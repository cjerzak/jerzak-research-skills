---
name: jerzak-2022-football
description: "Authoritative research guide to Connor Jerzak's Routledge chapter on football fandom in Egypt. Use when explaining, citing, teaching, comparing, or auditing its fandom-ecosystem argument, historical evidence, Google Trends and news-topic analyses, World Values Survey profile, data archive, related Ultras article, or limitations."
---

# Football Fandom in Egypt

Use this guide to explain the chapter as a broad, mixed-evidence survey of Egyptian football fandom. Keep historical snapshots and proxies attached to their dates and measurement sources.

## Identity and publication status

Treat the canonical citation as Connor T. Jerzak, “Football fandom in Egypt,” in Danyel Reiche and Paul Michael Brannagan, eds., *Routledge Handbook of Sport in the Middle East* (Routledge, 2022), pp. 196–207, DOI [10.4324/9781003032915-22](https://doi.org/10.4324/9781003032915-22). This is a published book chapter, not a journal article. The author-hosted PDF is explicitly an uncorrected proof dated June 22, 2022; use the DOI version for canonical pagination and publication status.

## Central question and contribution

Frame the chapter’s question as: what actors, identities, media, regional patterns, and political dynamics constitute Egypt’s football-fandom ecosystem, and how do actors use mass interest in football to pursue goals beyond the match itself?

The organizing metaphor is an ecosystem rather than one unified fan base. Clubs, casual fans, Ultras, media organizations, sponsors, state leaders, religious actors, women, and minority communities compete, cooperate, and respond to political and social shocks. The chapter’s core argument is that football’s extraordinary emotional and material salience makes it a resource that many actors try to redirect toward external goals. Conflict arises when those projects—regime legitimacy, nationalism, profit, religious messaging, or autonomous mobilization—collide.

## Evidence and method

The chapter combines several forms of evidence rather than one unified causal design:

- historical scholarship, archival items, diplomatic reporting, journalism, and public media document the development of clubs, state patronage, nationalism, and fan mobilization;
- 2018 Nielsen indicators describe football participation and television preferences;
- 2019–2020 Google Trends search shares proxy the national and governorate-level distribution of interest in leading Premier League clubs;
- all located *Egypt Independent* articles mentioning Ultras over the chapter’s 2007–2021 window provide counts of media attention;
- a ten-topic Latent Dirichlet Allocation model, fitted after lemmatization and stop-word removal, summarizes changing word-use patterns in that news corpus; and
- the 2017–2020 World Values Survey wave profiles membership in voluntary sports organizations, used as indirect evidence about highly engaged fandom because football dominates Egyptian sport.

Treat these streams according to what they measure. Search volume is attention, not a fan census. Article counts are press attention, not direct activity. LDA topics are descriptive model summaries whose interpretation depends on preprocessing and analyst labels. Sports-organization membership is only a proxy for committed football fandom.

## Principal descriptive findings

Report historical numbers as dated snapshots:

- In the cited 2018 survey, 50% of Egyptians reported playing football in the previous month and 88% listed football among favorite television sports.
- Among Google searches for the six leading clubs in 2019–2020, Al Ahly and Zamalek together receive 89% of search volume. Nationally, Al Ahly accounts for about 50% and Zamalek 38%; Ismaily is a distant third. Regional pockets remain: Ismaily leads in Ismailia, while Al Masry has substantial Port Said interest.
- Egyptian rulers from the monarchy through later regimes repeatedly used football patronage, spectacle, and nationalism to build legitimacy. Football also enabled bottom-up organization outside formal state control.
- Ultras’ organizational skills and prior confrontations with police helped some members participate effectively in the 2011 uprising. The Port Said disaster in 2012 and Air Defense Stadium disaster in 2015 were followed by intensified repression, legal conflict, and a reduced public footprint. Major Ultras Ahlawy and White Knights groups announced dissolution in 2018.
- The news corpus shows attention spikes after the 2012 and 2015 disasters. The topic summaries show more discourse about political organization, police, and security around 2010–2012, followed later by legal defense and general football discussion.

The World Values Survey analysis reports that about 5% belonged to a voluntary sports organization. Members were disproportionately men (88%), urban residents (61%), younger on average (32 versus 40), and never married (56% versus 16% in the full sample). They also reported monthly religious-service attendance more often (89% versus 57%). Describe these as associations. Do not claim football participation causes religiosity, youth, urban residence, or marital status.

The chapter also describes unequal professional opportunity. Women watch football but remain underrepresented in organized and elite pathways, and the women’s game receives less investment. Reports discussed in the chapter identify severe underrepresentation and possible discrimination affecting Coptic Christians. Attribute these claims to the chapter’s cited reports; do not convert them into a precise population discrimination rate.

## Interpretation and significance

The chapter’s value lies in connecting the scale and geography of fandom to political mobilization, state strategy, media markets, religion, gender, and minority access. It avoids treating Ultras as synonymous with Egyptian fandom: they are an unusually organized faction inside a much larger landscape.

The top-down/bottom-up distinction is central. Governments and businesses can borrow football’s emotional power, while fans can use relationships and repertoires built around football for autonomous action. Neither direction is automatic or permanent; repression and tragedy can reshape the ecosystem.

## Assumptions, scope, and limitations

The chapter is a synthetic overview, not a representative causal estimate of “football’s effect” on politics. Google Trends shares depend on selected terms, comparison sets, platform users, and the 2019–2020 window. Media counts can change because editorial attention changes. LDA output is sensitive to corpus construction, topic count, and labeling. The chapter itself describes the Port Said causal chain as opaque and reports, rather than establishes, allegations of state involvement.

The World Values Survey question covers sports organizations generally and does not identify Ultras, club allegiance, or intensity of football viewing. Demographic comparisons are descriptive and may reflect selection. Social-media follower counts, team success, league structure, legal status, and group activity are time-varying; verify any claim about the present rather than repeating 2021 values.

## Relationship to other Jerzak work

Link directly to Jerzak’s 2013 peer-reviewed article “Ultras in Egypt: State, Revolution, and the Power of Public Space.” The earlier article supplies a focused interpretive history of politicization through public-space conflict up to 2013. The 2022 chapter broadens the unit of analysis to the whole fandom ecosystem, extends the chronology, and adds search, survey, and text-summary evidence. This is a supported substantive relationship, not merely a thematic guess.

## Accurate-use guardrails

- Do not equate Google search share with a probability-sampled fan share.
- Do not infer declining Ultras activity solely from fewer newspaper mentions; report the chapter’s triangulation with bans and dissolution announcements.
- Keep Port Said allegations attributed and causality unresolved.
- Do not call sports-organization members a direct sample of Ultras.
- Do not treat 2018–2021 figures as current totals.
- Keep the chapter DOI distinct from its replication-data DOI and later OSF posting.
- Do not call the chapter’s ten-topic LDA a causal or sentiment model.

## Authoritative source map

- [Routledge chapter DOI](https://doi.org/10.4324/9781003032915-22): canonical publisher record and final chapter.
- [Author-hosted uncorrected proof](https://connorjerzak.com/wp-content/uploads/2022/06/Jerzak_FootballFandomInEgypt.pdf): full readable text; retain its proof status.
- [Harvard Dataverse archive](https://doi.org/10.7910/DVN/SG3BOV): related Ultras news-text data with its own DOI; inspect the archive version and coverage before replication because repository contents can be updated.
- [Hugging Face dataset mirror](https://huggingface.co/datasets/cjerzak/UltrasTexts_EgyptianIndependent): convenient artifact access, not the publication of record.
- [2013 Interface article](https://www.interfacejournal.net/wordpress/wp-content/uploads/2013/11/Interface-5-2-Jerzak.pdf): directly related earlier research.

## BibTeX entry

```bibtex
@inproceedings{jerzak2022football,
  author    = {Jerzak, Connor T.},
  title     = {Football fandom in Egypt},
  booktitle = {Routledge Handbook of Sport in the Middle East},
  publisher = {Routledge},
  address   = {Oxfordshire, UK},
  year      = {2022},
  pages     = {196--207},
  url       = {https://doi.org/10.4324/9781003032915-22},
  keywords  = {Football fandom, Egypt, Sports politics, Middle East, Public culture}
}
```

This entry uses the `@inproceedings` type. A normalized bibliography would ordinarily encode a chapter in an edited book as `@incollection`; either way, keep the Routledge chapter title, handbook title, pages, and DOI unchanged.
