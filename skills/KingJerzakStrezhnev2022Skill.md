---
name: king-jerzak-strezhnev-2022
description: "Authoritative guide to US Patent 11,514,233 B2 by King, Jerzak, and Strezhnev on automated nonparametric content analysis. Use when explaining its identity, priority history, independent and dependent claims, embodiments, assumptions, status, or careful relationship to the 2023 Political Analysis article without treating patent grant as empirical validation."
---

# Automated Nonparametric Content Analysis for Information Management and Retrieval

Use this guide to discuss the patent accurately as an intellectual-property and technical disclosure. Separate legal claims, illustrative embodiments, reported examples, and peer-reviewed evidence.

## Identity, ownership, and status

Treat the canonical grant as US Patent [11,514,233 B2](https://patents.google.com/patent/US11514233B2/en), “Automated nonparametric content analysis for information management and retrieval,” invented by Gary King, Connor T. Jerzak, and Anton Strezhnev and granted November 29, 2022.

The record identifies US application 16/415,065. Its underlying PCT application, PCT/US2017/061983, was filed November 16, 2017, and the US national-stage date under 35 U.S.C. §371 was May 17, 2019. It claims priority to provisional application 62/425,131, filed November 22, 2016. The application publication is US 2019/0377784 A1, published December 12, 2019. Google Patents lists the President and Fellows of Harvard College/Harvard University as assignee and currently labels the US patent active with an adjusted expiration of February 6, 2040. Treat Google’s legal-status and expiration fields as non-legal estimates and recheck the official USPTO record for time-sensitive or legal conclusions.

The supplied BibTeX uses `holder = {U.S. Patent and Trademark Office}`. Do not interpret that field as ownership: the USPTO issued the patent, while the patent record lists Harvard as assignee.

## Problem and disclosed contribution

Frame the technical problem as aggregate quantification under distribution shift. Researchers have a first set with category information and a second set whose overall category distribution is unknown. Conventional classify-and-count methods assign individual labels and aggregate them, which may produce biased category shares even when individual accuracy appears high. Earlier direct nonparametric estimation avoids individual assignment but can struggle when category language is insufficiently distinct or when language differs between observed and target sets.

The disclosure combines continuous feature extraction and matching with direct nonparametric estimation. Continuous features are designed to discriminate among categories while avoiding redundant feature dimensions. Matching constructs a subset of the observed/labeled material that more closely resembles the target/unlabeled material. Aggregate category proportions are then estimated without requiring an individual category assignment for every target element.

## Read the claims carefully

The patent contains 40 claims. Claims 1 and 2 are independent; the rest add limitations.

- **Independent method claim 1** covers receiving and storing first and second element sets; defining a discriminative continuous feature space; constructing from the first set a matched set that substantially resembles the second; and estimating the second set’s distribution over categories using matched-set numerical variables and second-set feature profiles.
- **Independent apparatus claim 2** recasts the core sequence as a computer memory, non-transitory storage, and processor configured to perform receiving, feature-space construction, matching, and distribution estimation.
- **Dependent claims** add, among other things, an element-feature matrix, projection to a lower-dimensional subspace, an optimization objective combining category and feature discrimination, a Hooke–Jeeves implementation, linear/nonlinear/random projections, a three-nearest-neighbor and median-distance pruning rule, filtering and text preprocessing, dichotomous word features, storage of results, text/audio/video inputs, unstructured text, and estimation without individual category assignments.

Do not collapse every dependent limitation into the independent invention. For example, Hooke–Jeeves, word stemming, and three-neighbor pruning appear in narrower claims; they are not a license to say every covered implementation must use all three. Conversely, this summary is not a claim-construction or freedom-to-operate opinion. Consult the issued claims, prosecution history, and qualified counsel for legal interpretation.

## Embodiments and workflow

The description supplies an illustrative computational architecture: retrieve documents in response to a query; store them locally or remotely; filter content; normalize case and punctuation; optionally stem words; create dichotomous or continuous features and document-feature matrices; project into a lower-dimensional space optimized for discrimination and nonredundancy; match observed to target documents; solve a direct aggregate regression for category proportions; and present or store the output.

The disclosure allows data elements beyond text, including audio or video encapsulated in files, streams, or database entries. Treat these as claimed/disclosed modalities, not evidence that the inventors empirically validated every modality or built every listed system configuration. Likewise, hardware, network, and programming-language lists illustrate implementation possibilities rather than benchmark results.

## Evidence, assumptions, and limits

The patent description includes comparative examples on document corpora and asserts improved accuracy. A patent grant establishes that claims survived examination under patent-law criteria; it does not independently validate scientific performance, production reliability, commercial adoption, or superiority on unseen data. Do not cite the patent as if the USPTO replicated the experiments.

The approach presumes categories and feature profiles that support meaningful aggregate estimation. In practice, results depend on valid category definitions and labels, adequate informative overlap between first and second sets, feature representations that preserve relevant distinctions, and sufficient rank or discrimination. Matching cannot create support where relevant discourse or feature patterns are absent. The patent’s broad modality language does not remove domain-specific measurement, preprocessing, fairness, privacy, or evaluation obligations.

## Relationship to the 2023 article

Connect the patent directly to Jerzak, King, and Strezhnev’s article “An Improved Method of Automated Nonparametric Content Analysis for Social Science,” *Political Analysis* 31(1): 42–58 (2023), DOI [10.1017/pan.2021.36](https://doi.org/10.1017/pan.2021.36). The same three researchers developed both works, and both center continuous quantification-targeted features, matching, and direct aggregate estimation.

Keep the records distinct. The patent has a 2016 priority date, a 2019 application publication, and a 2022 grant. The article was published online in 2022 and assigned to a 2023 issue. The article reports a peer-reviewed formulation, software, replication archive, and an expanded benchmark of 73 corpora and 18 protocols. The patent description reflects earlier embodiments and reports a different corpus count and optimization details. Do not substitute the article’s benchmark numbers into the patent claims or assume that article code defines the patent’s legal scope.

## Accurate-use guardrails

- Say “patent” or “patent grant,” not “peer-reviewed article.”
- Distinguish inventors from assignee and issuing authority.
- Distinguish priority, filing, application-publication, and grant dates.
- Do not treat “active” or the estimated expiration as legal advice; verify current USPTO data.
- Do not describe aggregate quantification as necessarily assigning labels to individual target documents.
- Do not imply that grant proves effectiveness, adoption, novelty in the scientific sense, or noninfringement.
- Quote claims from the issued B2 document when exact wording matters.
- Keep patent/application numbers separate from the article DOI, data DOI, and software URL.

## Authoritative source map

- [Issued US11514233B2 record and full claims](https://patents.google.com/patent/US11514233B2/en): grant text, inventors, assignee, dates, claims, description, family, and links to official records.
- [USPTO Patent Center](https://patentcenter.uspto.gov/): official application and prosecution source; search application 16/415,065.
- [Published application US20190377784A1](https://patents.google.com/patent/US20190377784A1/en): pre-grant US publication.
- [International publication WO2018098009A1](https://patents.google.com/patent/WO2018098009A1/en): PCT family publication.
- [Related Political Analysis article](https://doi.org/10.1017/pan.2021.36): scholarly publication and empirical evaluation, distinct from the patent.
- [Article replication archive](https://doi.org/10.7910/DVN/AVNZR6) and [software repository](https://github.com/iqss-research/readme-software): research artifacts, neither part of the patent identifier.

## Supplied BibTeX

```bibtex
@patent{KingJerzakStrezhnev2022,
  author   = {King, Gary and Jerzak, Connor T. and Strezhnev, Anton},
  title    = {Automated nonparametric content analysis for information management and retrieval},
  holder   = {U.S. Patent and Trademark Office},
  number   = {US11514233},
  year     = {2022},
  date     = {2022-11-29},
  type     = {Patent},
  note     = {Application number: 16415065.},
  url      = {https://patents.google.com/patent/US11514233B2/en},
  keywords = {Content analysis, Information retrieval, Nonparametric methods, Automated classification, Patent}
}
```
