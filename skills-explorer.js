/* ============================================================
   Research Skills Explorer — external script version.
   Commit this file to the repo root and load it via jsDelivr
   (see embed snippet). The WordPress page only needs:
     <div id="jrs-root"></div> + one <script src> tag.
   Retarget with data-owner / data-repo / data-branch / data-path
   attributes on that div. New skills in the repo appear
   automatically; widget updates just require a push here.
   ============================================================ */
(function () {
  "use strict";

  function escAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function boot() {
    var host = document.getElementById("jrs-root");
    if (!host || host.getAttribute("data-jrs-booted")) return;
    host.setAttribute("data-jrs-booted", "1");
    var ds = host.dataset || {};

    // Inject scoped styles once
    if (!document.getElementById("jrs-styles")) {
      var st = document.createElement("style");
      st.id = "jrs-styles";
      st.textContent = JRS_CSS;
      document.head.appendChild(st);
    }

    // Build the widget shell inside the host div
    host.innerHTML =
      '<div class="jrs-head">' +
        '<h2 class="jrs-title">' + escAttr(ds.title || "Research Skills") + '</h2>' +
        '<span class="jrs-count" id="jrs-count"></span>' +
        '<p class="jrs-sub">' + escAttr(ds.subtitle || "A living catalog of agentic research skills. Entries are read directly from the GitHub repository, so this index is always current.") + '</p>' +
      '</div>' +
      '<div class="jrs-search-wrap">' +
        '<input class="jrs-search" id="jrs-search" type="search" placeholder="Filter skills by name or description\u2026" aria-label="Filter skills" autocomplete="off" />' +
      '</div>' +
      '<ul class="jrs-list" id="jrs-list" aria-live="polite"></ul>' +
      '<div class="jrs-status" id="jrs-status"><span class="jrs-spinner"></span>Loading catalog from GitHub\u2026</div>' +
      '<div class="jrs-foot">' +
        '<span>Source of record: <a id="jrs-repo-link" href="#" target="_blank" rel="noopener">GitHub repository</a></span>' +
        '<span id="jrs-updated"></span>' +
      '</div>';

  

      /* Config comes from data-* attributes on the #jrs-root div,
       so this same script serves any repo without edits. */
    var JRS_CONFIG = {
      owner:  ds.owner  || "cjerzak",
      repo:   ds.repo   || "jerzak-research-skills",
      branch: ds.branch || "main",
      path:   ds.path   || "skills",
      cacheMinutes: parseInt(ds.cacheMinutes || "30", 10)
    };


      var API_BASE = "https://api.github.com/repos/" + JRS_CONFIG.owner + "/" + JRS_CONFIG.repo;
      var RAW_BASE = "https://raw.githubusercontent.com/" + JRS_CONFIG.owner + "/" + JRS_CONFIG.repo + "/" + JRS_CONFIG.branch;
      var WEB_BASE = "https://github.com/" + JRS_CONFIG.owner + "/" + JRS_CONFIG.repo;
      var CACHE_KEY = "jrs-cache::" + WEB_BASE + "/" + JRS_CONFIG.path + "@" + JRS_CONFIG.branch;

      var elList   = document.getElementById("jrs-list");
      var elStatus = document.getElementById("jrs-status");
      var elSearch = document.getElementById("jrs-search");
      var elCount  = document.getElementById("jrs-count");
      var elUpd    = document.getElementById("jrs-updated");
      document.getElementById("jrs-repo-link").href = WEB_BASE + "/tree/" + JRS_CONFIG.branch + "/" + JRS_CONFIG.path;

      var skills = [];

      /* ---------- tiny, safe Markdown renderer (escapes ALL html first) ---------- */
      function esc(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      }
      function inlineMd(s) {
        s = s.replace(/`([^`]+)`/g, function (_, c) { return "<code>" + c + "</code>"; });
        s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
          '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        s = s.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
        s = s.replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
        return s;
      }
      function renderMd(src) {
        var lines = esc(src).split(/\r?\n/);
        var out = [], i = 0, inCode = false, listType = null;
        function closeList() { if (listType) { out.push("</" + listType + ">"); listType = null; } }
        while (i < lines.length) {
          var ln = lines[i];
          if (/^```/.test(ln)) {
            if (!inCode) { closeList(); out.push("<pre><code>"); inCode = true; }
            else { out.push("</code></pre>"); inCode = false; }
            i++; continue;
          }
          if (inCode) { out.push(ln); i++; continue; }
          var h = ln.match(/^(#{1,4})\s+(.*)$/);
          if (h) { closeList(); var lvl = h[1].length; out.push("<h" + lvl + ">" + inlineMd(h[2]) + "</h" + lvl + ">"); i++; continue; }
          if (/^\s*([-*_])\s*\1\s*\1[\s\-*_]*$/.test(ln)) { closeList(); out.push("<hr>"); i++; continue; }
          var ul = ln.match(/^\s*[-*+]\s+(.*)$/);
          var ol = ln.match(/^\s*\d+[.)]\s+(.*)$/);
          if (ul || ol) {
            var want = ul ? "ul" : "ol";
            if (listType !== want) { closeList(); out.push("<" + want + ">"); listType = want; }
            out.push("<li>" + inlineMd((ul || ol)[1]) + "</li>"); i++; continue;
          }
          var bq = ln.match(/^\s*&gt;\s?(.*)$/);
          if (bq) {
            closeList();
            var acc = [bq[1]];
            while (i + 1 < lines.length && /^\s*&gt;\s?/.test(lines[i + 1])) { i++; acc.push(lines[i].replace(/^\s*&gt;\s?/, "")); }
            out.push("<blockquote><p>" + inlineMd(acc.join(" ")) + "</p></blockquote>"); i++; continue;
          }
          if (/^\s*$/.test(ln)) { closeList(); i++; continue; }
          closeList();
          var para = [ln];
          while (i + 1 < lines.length && !/^\s*$/.test(lines[i + 1]) &&
                 !/^(#{1,4})\s|^```|^\s*[-*+]\s|^\s*\d+[.)]\s|^\s*&gt;/.test(lines[i + 1])) {
            i++; para.push(lines[i]);
          }
          out.push("<p>" + inlineMd(para.join(" ")) + "</p>"); i++;
        }
        if (inCode) out.push("</code></pre>");
        closeList();
        return out.join("\n");
      }

      /* ---------- frontmatter parsing (name / description) ---------- */
      function parseSkillMd(md, fallbackName) {
        var name = null, desc = null, body = md;
        var fm = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
        if (fm) {
          body = md.slice(fm[0].length);
          var yaml = fm[1].split(/\r?\n/);
          for (var i = 0; i < yaml.length; i++) {
            var m = yaml[i].match(/^(name|title|description)\s*:\s*(.*)$/i);
            if (!m) continue;
            var key = m[1].toLowerCase(), val = m[2].trim();
            if (/^[>|]/.test(val)) {           // folded / literal block scalar
              var acc = [];
              while (i + 1 < yaml.length && /^\s+\S/.test(yaml[i + 1])) { i++; acc.push(yaml[i].trim()); }
              val = acc.join(" ");
            }
            val = val.replace(/^["']|["']$/g, "");
            if (key === "description") { if (!desc) desc = val; }
            else if (!name) { name = val; }
          }
        }
        if (!name) {
          var h1 = body.match(/^\s*#\s+(.+)$/m);
          name = h1 ? h1[1].trim() : fallbackName;
        }
        if (!desc) {
          var stripped = body.replace(/^\s*#.*$/m, "");
          var p = stripped.split(/\n\s*\n/).map(function (s) { return s.trim(); })
                          .filter(function (s) { return s && !/^[#>`\-*\d]/.test(s); })[0];
          desc = p ? p.replace(/\s+/g, " ").slice(0, 220) : "";
        }
        return { name: name, description: desc, body: body };
      }

      function titleCase(slug) {
        return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); });
      }

      /* ---------- data loading ---------- */
      function loadCache() {
        try {
          var raw = sessionStorage.getItem(CACHE_KEY);
          if (!raw) return null;
          var obj = JSON.parse(raw);
          if (Date.now() - obj.t > JRS_CONFIG.cacheMinutes * 60000) return null;
          return obj;
        } catch (e) { return null; }
      }
      function saveCache(data) {
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), skills: data })); } catch (e) {}
      }

      function fetchJson(url) {
        return fetch(url, { headers: { "Accept": "application/vnd.github+json" } }).then(function (r) {
          if (!r.ok) throw new Error("GitHub API " + r.status);
          return r.json();
        });
      }

      function loadAll() {
        var cached = loadCache();
        if (cached) {
          skills = cached.skills;
          elUpd.textContent = "cached " + new Date(cached.t).toLocaleTimeString();
          render(); return;
        }
        fetchJson(API_BASE + "/contents/" + JRS_CONFIG.path + "?ref=" + JRS_CONFIG.branch)
          .then(function (entries) {
            var dirs = entries.filter(function (e) { return e.type === "dir"; });
            // Also allow loose top-level .md files as entries
            var looseMd = entries.filter(function (e) {
              return e.type === "file" && /\.md$/i.test(e.name) && !/^readme\.md$/i.test(e.name);
            });
            if (!dirs.length && !looseMd.length) throw new Error("empty");

            var tasks = dirs.map(function (d) {
              return fetchJson(API_BASE + "/contents/" + JRS_CONFIG.path + "/" + encodeURIComponent(d.name) + "?ref=" + JRS_CONFIG.branch)
                .then(function (files) {
                  var mdFile = files.find(function (f) { return /^skill\.md$/i.test(f.name); }) ||
                               files.find(function (f) { return /^readme\.md$/i.test(f.name); }) ||
                               files.find(function (f) { return /\.md$/i.test(f.name); });
                  var others = files.filter(function (f) { return !mdFile || f.name !== mdFile.name; })
                                    .map(function (f) { return { name: f.name, url: f.html_url, type: f.type }; });
                  var base = {
                    slug: d.name,
                    name: titleCase(d.name),
                    description: "",
                    body: "",
                    files: others,
                    ghUrl: WEB_BASE + "/tree/" + JRS_CONFIG.branch + "/" + JRS_CONFIG.path + "/" + d.name
                  };
                  if (!mdFile) return base;
                  return fetch(RAW_BASE + "/" + JRS_CONFIG.path + "/" + d.name + "/" + mdFile.name)
                    .then(function (r) { return r.ok ? r.text() : ""; })
                    .then(function (md) {
                      var p = parseSkillMd(md, base.name);
                      base.name = p.name; base.description = p.description; base.body = p.body;
                      return base;
                    })
                    .catch(function () { return base; });
                })
                .catch(function () {
                  return { slug: d.name, name: titleCase(d.name), description: "", body: "", files: [],
                           ghUrl: WEB_BASE + "/tree/" + JRS_CONFIG.branch + "/" + JRS_CONFIG.path + "/" + d.name };
                });
            });

            looseMd.forEach(function (f) {
              tasks.push(
                fetch(RAW_BASE + "/" + JRS_CONFIG.path + "/" + f.name)
                  .then(function (r) { return r.ok ? r.text() : ""; })
                  .then(function (md) {
                    var fb = titleCase(f.name.replace(/\.md$/i, ""));
                    var p = parseSkillMd(md, fb);
                    return { slug: f.name, name: p.name, description: p.description, body: p.body,
                             files: [], ghUrl: f.html_url };
                  })
              );
            });

            return Promise.all(tasks);
          })
          .then(function (results) {
            skills = results.sort(function (a, b) { return a.name.localeCompare(b.name); });
            saveCache(skills);
            elUpd.textContent = "loaded " + new Date().toLocaleTimeString();
            render();
          })
          .catch(function (err) {
            elStatus.innerHTML = 'Couldn\u2019t load the catalog right now'
              + (String(err).indexOf("403") > -1 ? " (GitHub API rate limit \u2014 try again in a few minutes)" : "")
              + '.<br>You can browse it directly on <a href="' + WEB_BASE + '/tree/' + JRS_CONFIG.branch + '/' + JRS_CONFIG.path
              + '" target="_blank" rel="noopener">GitHub</a>.';
          });
      }

      /* ---------- rendering ---------- */
      function cardHtml(s, idx) {
        var files = "";
        if (s.files && s.files.length) {
          files = '<div class="jrs-files"><span class="jrs-files-label">Also in this skill:</span>'
            + s.files.map(function (f) {
                return '<a href="' + esc(f.url) + '" target="_blank" rel="noopener">'
                     + esc(f.name) + (f.type === "dir" ? "/" : "") + "</a>";
              }).join(" &nbsp;\u00b7&nbsp; ")
            + "</div>";
        }
        return '<li class="jrs-card" data-idx="' + idx + '">'
          + '<button class="jrs-card-btn" aria-expanded="false">'
          + '<span class="jrs-eyebrow"><span>skill / ' + esc(s.slug) + '</span><span class="jrs-chevron">&#9656;</span></span>'
          + '<h3 class="jrs-name">' + esc(s.name) + "</h3>"
          + '<p class="jrs-desc">' + esc(s.description || "No description provided.") + "</p>"
          + "</button>"
          + '<div class="jrs-detail">'
          + '<div class="jrs-md">' + (s.body ? renderMd(s.body) : "<p>No SKILL.md found in this folder yet.</p>") + "</div>"
          + files
          + '<a class="jrs-ghlink" href="' + esc(s.ghUrl) + '" target="_blank" rel="noopener">View on GitHub &#8599;</a>'
          + "</div></li>";
      }

      function render() {
        var q = elSearch.value.trim().toLowerCase();
        var shown = skills.filter(function (s) {
          if (!q) return true;
          return (s.name + " " + s.slug + " " + s.description).toLowerCase().indexOf(q) > -1;
        });
        elCount.textContent = skills.length
          ? (q ? shown.length + " of " + skills.length : skills.length) + " skill" + (skills.length === 1 ? "" : "s")
          : "";
        if (!shown.length) {
          elList.innerHTML = "";
          elStatus.textContent = skills.length ? "No skills match \u201c" + elSearch.value + "\u201d." : "No skills found yet.";
          elStatus.style.display = "";
          return;
        }
        elStatus.style.display = "none";
        elList.innerHTML = shown.map(function (s) { return cardHtml(s, skills.indexOf(s)); }).join("");
      }

      elList.addEventListener("click", function (e) {
        var btn = e.target.closest(".jrs-card-btn");
        if (!btn) return;
        // don't toggle if a link inside detail was clicked (links aren't in btn, so fine)
        var card = btn.closest(".jrs-card");
        var open = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });

      var debounce;
      elSearch.addEventListener("input", function () {
        clearTimeout(debounce);
        debounce = setTimeout(render, 120);
      });

      loadAll();
  }

  var JRS_CSS = "/* Everything is scoped under #jrs-root so it won't fight your theme. */\n#jrs-root {\n  --jrs-paper: #fbfaf6;\n  --jrs-ink: #1c2430;\n  --jrs-ink-soft: #55606e;\n  --jrs-line: #dcd8cc;\n  --jrs-accent: #0f6b63;       /* petrol \u2014 used sparingly */\n  --jrs-accent-ink: #0a4b45;\n  --jrs-card: #ffffff;\n  --jrs-mono: \"SFMono-Regular\", ui-monospace, \"Cascadia Mono\", Menlo, Consolas, monospace;\n  --jrs-serif: \"Iowan Old Style\", \"Palatino Linotype\", Palatino, Georgia, serif;\n  --jrs-sans: -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-family: var(--jrs-sans);\n  color: var(--jrs-ink);\n  background: var(--jrs-paper);\n  border: 1px solid var(--jrs-line);\n  border-radius: 10px;\n  padding: clamp(16px, 3vw, 32px);\n  line-height: 1.55;\n  box-sizing: border-box;\n}\n#jrs-root *, #jrs-root *::before, #jrs-root *::after { box-sizing: border-box; }\n\n/* ---------- header ---------- */\n#jrs-root .jrs-head {\n  display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 16px;\n  border-bottom: 2px solid var(--jrs-ink);\n  padding-bottom: 14px; margin-bottom: 18px;\n}\n#jrs-root .jrs-title {\n  font-family: var(--jrs-serif);\n  font-size: clamp(1.4rem, 2.6vw, 1.9rem);\n  font-weight: 700; letter-spacing: .01em; margin: 0;\n}\n#jrs-root .jrs-count {\n  font-family: var(--jrs-mono); font-size: .78rem;\n  color: var(--jrs-ink-soft); letter-spacing: .06em; text-transform: uppercase;\n}\n#jrs-root .jrs-sub {\n  flex-basis: 100%; margin: 2px 0 0; color: var(--jrs-ink-soft);\n  font-size: .95rem; max-width: 60ch;\n}\n\n/* ---------- search ---------- */\n#jrs-root .jrs-search-wrap { margin: 0 0 20px; }\n#jrs-root .jrs-search {\n  width: 100%; padding: 10px 14px;\n  font: inherit; font-size: .95rem;\n  color: var(--jrs-ink); background: var(--jrs-card);\n  border: 1px solid var(--jrs-line); border-radius: 6px;\n  outline: none;\n}\n#jrs-root .jrs-search:focus {\n  border-color: var(--jrs-accent);\n  box-shadow: 0 0 0 3px rgba(15,107,99,.15);\n}\n\n/* ---------- catalog list ---------- */\n#jrs-root .jrs-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }\n#jrs-root .jrs-card {\n  background: var(--jrs-card);\n  border: 1px solid var(--jrs-line);\n  border-left: 5px solid var(--jrs-accent);\n  border-radius: 6px;\n  overflow: hidden;\n}\n#jrs-root .jrs-card-btn {\n  display: block; width: 100%; text-align: left;\n  background: none; border: 0; cursor: pointer;\n  font: inherit; color: inherit;\n  padding: 14px 16px 12px;\n}\n#jrs-root .jrs-card-btn:focus-visible {\n  outline: 2px solid var(--jrs-accent); outline-offset: -2px;\n}\n#jrs-root .jrs-eyebrow {\n  display: flex; justify-content: space-between; gap: 12px;\n  font-family: var(--jrs-mono); font-size: .72rem;\n  letter-spacing: .08em; text-transform: uppercase;\n  color: var(--jrs-ink-soft); margin-bottom: 4px;\n}\n#jrs-root .jrs-chevron { transition: transform .18s ease; }\n#jrs-root .jrs-card.open .jrs-chevron { transform: rotate(90deg); }\n#jrs-root .jrs-name {\n  font-family: var(--jrs-serif); font-size: 1.15rem; font-weight: 700;\n  margin: 0 0 4px;\n}\n#jrs-root .jrs-desc { margin: 0; color: var(--jrs-ink-soft); font-size: .93rem; }\n\n/* ---------- expanded detail ---------- */\n#jrs-root .jrs-detail {\n  display: none;\n  border-top: 1px dashed var(--jrs-line);\n  padding: 16px 18px 18px;\n  background: linear-gradient(#fdfcf9, #fdfcf9);\n}\n#jrs-root .jrs-card.open .jrs-detail { display: block; }\n#jrs-root .jrs-detail .jrs-md { font-size: .93rem; max-width: 72ch; }\n#jrs-root .jrs-md h1, #jrs-root .jrs-md h2, #jrs-root .jrs-md h3, #jrs-root .jrs-md h4 {\n  font-family: var(--jrs-serif); line-height: 1.25; margin: 1.2em 0 .45em;\n}\n#jrs-root .jrs-md h1 { font-size: 1.25rem; }\n#jrs-root .jrs-md h2 { font-size: 1.1rem; }\n#jrs-root .jrs-md h3 { font-size: 1rem; }\n#jrs-root .jrs-md p { margin: .55em 0; }\n#jrs-root .jrs-md ul, #jrs-root .jrs-md ol { margin: .55em 0; padding-left: 1.4em; }\n#jrs-root .jrs-md li { margin: .25em 0; }\n#jrs-root .jrs-md code {\n  font-family: var(--jrs-mono); font-size: .84em;\n  background: #f1efe8; border: 1px solid var(--jrs-line);\n  border-radius: 4px; padding: .08em .35em;\n}\n#jrs-root .jrs-md pre {\n  background: #22282f; color: #e8e6df;\n  padding: 12px 14px; border-radius: 6px;\n  overflow-x: auto; font-size: .82rem; line-height: 1.5;\n}\n#jrs-root .jrs-md pre code { background: none; border: 0; padding: 0; color: inherit; }\n#jrs-root .jrs-md blockquote {\n  margin: .7em 0; padding: .2em 1em;\n  border-left: 3px solid var(--jrs-accent); color: var(--jrs-ink-soft);\n}\n#jrs-root .jrs-md a { color: var(--jrs-accent-ink); text-decoration: underline; }\n#jrs-root .jrs-md hr { border: 0; border-top: 1px dashed var(--jrs-line); margin: 1.2em 0; }\n\n#jrs-root .jrs-files {\n  margin-top: 14px; padding-top: 10px;\n  border-top: 1px dashed var(--jrs-line);\n  font-family: var(--jrs-mono); font-size: .78rem;\n}\n#jrs-root .jrs-files a { color: var(--jrs-accent-ink); text-decoration: none; }\n#jrs-root .jrs-files a:hover { text-decoration: underline; }\n#jrs-root .jrs-files-label {\n  letter-spacing: .08em; text-transform: uppercase;\n  color: var(--jrs-ink-soft); margin-right: 8px;\n}\n#jrs-root .jrs-ghlink {\n  display: inline-block; margin-top: 12px;\n  font-family: var(--jrs-mono); font-size: .78rem;\n  color: var(--jrs-accent-ink); text-decoration: none;\n  border: 1px solid var(--jrs-line); border-radius: 5px;\n  padding: 5px 10px; background: var(--jrs-card);\n}\n#jrs-root .jrs-ghlink:hover { border-color: var(--jrs-accent); }\n\n/* ---------- states ---------- */\n#jrs-root .jrs-status {\n  font-family: var(--jrs-mono); font-size: .82rem;\n  color: var(--jrs-ink-soft); padding: 24px 0; text-align: center;\n}\n#jrs-root .jrs-status a { color: var(--jrs-accent-ink); }\n#jrs-root .jrs-spinner {\n  display: inline-block; width: 14px; height: 14px;\n  border: 2px solid var(--jrs-line); border-top-color: var(--jrs-accent);\n  border-radius: 50%; vertical-align: -2px; margin-right: 8px;\n  animation: jrs-spin .8s linear infinite;\n}\n@keyframes jrs-spin { to { transform: rotate(360deg); } }\n@media (prefers-reduced-motion: reduce) {\n  #jrs-root .jrs-spinner { animation: none; }\n  #jrs-root .jrs-chevron { transition: none; }\n}\n#jrs-root .jrs-foot {\n  margin-top: 18px; padding-top: 10px;\n  border-top: 1px solid var(--jrs-line);\n  font-family: var(--jrs-mono); font-size: .72rem;\n  letter-spacing: .05em; color: var(--jrs-ink-soft);\n  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 6px;\n}\n#jrs-root .jrs-foot a { color: var(--jrs-accent-ink); text-decoration: none; }";

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
