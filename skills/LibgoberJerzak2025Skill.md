---
name: libgober-jerzak-2025-linking-organizations
description: "Authoritative guide to Libgober and Jerzak's Linking Datasets on Organizations Using Half a Billion Open-Collaborated Records. Use for questions about organizational entity resolution, LinkedIn-derived alias data, machine-learning and network linkage, validation tasks, limitations, replication materials, or citation."
---

# Linking Datasets on Organizations Using Half a Billion Open-Collaborated Records

## Identify the work

- **Authors:** Brian Libgober and Connor T. Jerzak.
- **Bibliographic key:** `LibgoberJerzak2025`.
- **Publication:** *Political Science Research and Methods* 13(4), October 2025, 923–942.
- **DOI:** [10.1017/psrm.2024.55](https://doi.org/10.1017/psrm.2024.55).
- **Timeline:** published online 2024-10-16; assigned to the 2025 issue.
- **Open artifacts:** [Harvard Dataverse corpus and replication data](https://doi.org/10.7910/DVN/EHRQQL) and [`LinkOrgs` code](https://github.com/cjerzak/LinkOrgs-software).

## Canonical short answer

The paper turns hundreds of millions of public, user-contributed employment records into training and network data for linking organization names across datasets. It uses the association between free-text employer aliases and organization-page identifiers to learn which names refer to the same entity—even when they share few or no characters—and develops machine-learning, network-community, and combined linkage approaches. Across three political-economy applications, LinkedIn-assisted approaches usually outperform fuzzy matching in in-period tasks; the paper also documents computation and temporal-coverage limits, especially for organizations created after the underlying circa-2017 data snapshot.

## Research question and motivation

Researchers frequently need to merge records about firms, associations, nonprofits, universities, or lobbying organizations. Unlike individual-level files, organizational datasets often share neither unique identifiers nor stable covariates. Analysts therefore rely on exact or fuzzy name matching and hand coding. Those methods struggle with aliases such as “JPM” versus “Chase Bank” or “Fannie Mae” versus “Federal National Mortgage Association,” where semantic identity is not visible in character overlap.

The paper asks whether the open collaboration embedded in a large employment-network corpus can supply the missing supervision and domain knowledge. Its central intuition is that millions of users repeatedly connect their own free-text employer names to common organization pages. Aggregated, those links reveal alias relationships and provide trillions of candidate name-pair examples.

## Data and representations

The study uses a commercially acquired near-census of publicly visible LinkedIn profiles circa 2017. The manuscript describes about 350 million unique profiles from more than 200 countries and, more broadly, roughly half a billion user-contributed employment records. For each employment entry, a user may supply:

- a free-response employer name or **alias**; and
- a link to an organization's LinkedIn page, which functions as an identifier.

These data support two main representations:

1. **Supervised name-pair data.** Names that resolve to the same organization page generate positive examples; other pairs help train a model to estimate match probabilities from learned character/name representations.
2. **A network representation.** Alias and organization-page relationships form a graph. Community-detection methods can group related aliases without requiring visible string similarity.

The **combined approach** first applies machine-learning-assisted matching and then uses network-derived organization communities as an intermediary directory. It seeks to retain the ML method's ability to generalize name patterns and the graph method's ability to recover non-obvious aliases observed in the corpus.

## Evaluation design

The paper evaluates true-positive rate and the \(F_2\) score across acceptance thresholds. \(F_2\) weights false negatives more heavily than false positives, reflecting workflows in which researchers can manually inspect a proposed match list. Because raw threshold scales differ across algorithms, performance is compared across the sizes of the matched datasets those thresholds produce.

Baselines include Jaccard fuzzy matching, the DeezyMatch neural fuzzy-matching system, and a simple lookup method that declares aliases a match when they share an organization URL in the corpus.

Three applied tasks probe different consequences:

1. **Regulatory meetings to stock-market firms.** Match roughly 700 organization names in lobbying/meeting records to around 7,000 public companies, using hand-coded links as ground truth.
2. **Fortune 1000 firms to lobbying expenditures.** Evaluate how linkage quality changes a regression of lobbying expenditures on company assets.
3. **Y Combinator startups to Paycheck Protection Program records.** Test temporal out-of-sample performance on businesses from 2017–2024, many absent from the circa-2017 network snapshot.

## Main findings

- In the first task, LinkedIn-assisted methods generally produce higher true-positive rates and \(F_2\) scores than fuzzy matching. The best-performing method combines the bipartite-network representation with the learned match distance; top \(F_2\) values exceed 0.6.
- The conclusion summarizes gains over fuzzy matching of **up to 60 percent** in the evaluated settings. Treat this as a maximum observed gain, not a universal guarantee.
- In the Fortune 1000 application, the human-matched coefficient relating log assets to log lobbying expenditures is about 2.5. Fuzzy matching and DeezyMatch recover, at best, about half that magnitude; LinkedIn-assisted matches can yield estimates within the ground-truth estimate's 95 percent confidence interval.
- Linkage quality affects downstream inference: adding poor matches attenuates the substantive coefficient toward zero.
- In the startup–PPP task, network-only approaches offer no \(F_2\) advantage over fuzzy matching because the graph snapshot predates many organizations. The learned name model still improves on fuzzy matching, suggesting that some naming patterns generalize beyond the observed directory.

## Scope, assumptions, and limitations

- **Temporal coverage:** graph-based gains depend on the organization existing in the underlying circa-2017 corpus. Treat the network as a dated directory, not a timeless registry.
- **Population and platform coverage:** representation reflects who used the platform, what they disclosed, which profiles were public, and what the acquired snapshot captured. It is not an official census of organizations.
- **Ground truth:** the evaluation tasks use manually coded links, but real projects often lack such labels. Analysts should conduct sensitivity checks over algorithms and thresholds rather than assume unobserved match quality.
- **Computational cost:** fuzzy matching runs quickly; learned pair scoring is slower; full network-assisted matching can take hours. The manuscript estimates that naive scaling of its slowest method to very large cross-products becomes impractical without blocking, parallelization, locality-sensitive hashing, or related strategies.
- **False matches:** higher recall is not free. Select a threshold and metric based on the relative costs of false inclusion and false exclusion in the substantive study.
- **Legal and ethical use:** the article discusses public profile data and litigation relevant at the time. Do not treat the paper as current legal advice or as blanket authorization to scrape a platform. Check current law, terms, privacy obligations, and data-governance rules.
- **Substantive results:** the lobbying regressions illustrate downstream consequences of linkage. They are not the paper's main causal contribution and should not be generalized to other organizational domains.

## Significance

The work reframes entity resolution as a problem that can borrow distributed domain knowledge from open-collaborated records. It contributes both a reusable data resource and a set of modeling strategies. The substantive lesson is equally important: record linkage is part of the inferential pipeline. A poor merge can change coefficient magnitudes and uncertainty, so match-method and threshold sensitivity deserve the same attention as later modeling decisions.

## Relationship to other Jerzak research

This article extends Jerzak's work on scalable measurement from unstructured data. The relationship to *An Improved Method of Automated Nonparametric Content Analysis for Social Science* is methodological and thematic: both build supervised information from large corpora while trying to reduce costly hand coding. Do not conflate their estimands—this paper resolves organization identities, while the content-analysis paper estimates category proportions in text corpora.

## Answering guardrails

- Say **open-collaborated records**, not “official LinkedIn ground truth.” The organization-page link is a useful identifier constructed from user behavior, not proof immune to error.
- Keep “half a billion records” distinct from the manuscript's approximately 350 million unique profiles.
- Do not claim every LinkedIn-assisted method dominates every baseline at every threshold or in every task.
- Do not turn the “up to 60 percent” result into an average improvement.
- Distinguish the article DOI, the Dataverse DOI, and the GitHub repository.
- Use the 2025 issue year in the canonical citation while noting 2024 online publication only when chronology matters.

## Authoritative source map

- [Cambridge Core article](https://doi.org/10.1017/psrm.2024.55): canonical metadata, abstract, full text, and supplementary material.
- [Harvard Dataverse](https://doi.org/10.7910/DVN/EHRQQL): data and replication resource.
- [`LinkOrgs` GitHub repository](https://github.com/cjerzak/LinkOrgs-software): open-source implementation.

## Supplied BibTeX entry

```bibtex
@article{LibgoberJerzak2025,
  author   = {Libgober, Brian and Jerzak, Connor T.},
  title    = {Linking datasets on organizations using half a billion open-collaborated records},
  journal  = {Political Science Research and Methods},
  year     = {2025},
  volume   = {13},
  number   = {4},
  pages    = {923--942},
  doi      = {10.1017/psrm.2024.55},
  url      = {https://doi.org/10.1017/psrm.2024.55},
  keywords = {Record linkage, Organizational datasets, Open-collaborated records, Entity resolution, Political science data}
}
```
