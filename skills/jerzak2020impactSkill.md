---
name: jerzak-2020-impact
description: "Authoritative research guide to Jerzak and Libgober's E-ZPass study of transportation, housing values, tax salience, and presidential voting. Use when explaining, citing, reviewing, replicating, or qualifying the paper's matched difference-in-differences design, findings, mechanisms, data, or causal limitations."
---

# The Impact of a Transportation Intervention on Electoral Politics: Evidence from E-ZPass

Use this guide to represent the study as a careful observational, quasi-experimental analysis. Preserve the authors’ distinction between evidence consistent with a causal pathway and proof that eliminates all unobserved confounding.

## Identity and publication status

Treat the canonical citation as Connor T. Jerzak and Brian Libgober, “The Impact of a Transportation Intervention on Electoral Politics: Evidence from E-ZPass,” *Research in Transportation Economics* 80: 1–14 (2020), DOI [10.1016/j.retrec.2019.100809](https://doi.org/10.1016/j.retrec.2019.100809). The article was received February 6, 2019, revised August 21, 2019, and accepted December 17, 2019; its bibliographic publication year is 2020.

## Central question and argument

Frame the question as: can a transportation intervention alter electoral behavior through a localized shock to residential property values, and what observable mechanism best explains any political shift?

The empirical setting is the replacement of human-operated toll collection with E-ZPass along existing toll roads in New Jersey and Pennsylvania between 2000 and 2002. Unlike construction of a new road, electronic tolling primarily reduced delay at existing infrastructure. The paper argues that lower travel costs increased nearby housing values and that this localized appreciation was followed by movement toward Republican presidential candidates. Geographically linked exit polls point most clearly to greater salience of taxation rather than a broad ideological conversion or heightened concern about jobs.

Use “associated with,” “relative change,” or “evidence consistent with” when summarizing the full pathway. The paper itself says unobserved confounding cannot be ruled out.

## Data and design

The unit in the main analysis is a voting precinct. E-ZPass plaza locations come from transportation records and the Currie–Walker replication data; precinct locations are proxied by polling places, and exposure is measured as network/over-road distance. Precinct election returns and boundaries come from the Ansolabehere, Palmer, and Lee data. The study combines these with 2000 Census and 2005–2009 American Community Survey data, Bonica campaign-contribution records, and precinct-linked Voter News Service/National Election Pool exit polls.

In the main rule, a treated precinct lies within 12 miles of an E-ZPass exit and more than 18 miles from a comparable non-E-ZPass exit. Controls use the mirrored rule around major highway exits without E-ZPass. The authors vary these radii in sensitivity analyses. They use propensity-score matching without replacement and a 0.20 caliper on pre-intervention income, education, racial composition, sex, age structure, and residential stability. The matched main sample contains 1,324 treated and 1,324 control precincts.

The principal estimator is conditional difference-in-differences. Its key identifying requirement is parallel counterfactual trends: absent E-ZPass, areas near toll and non-toll exits would have experienced similar changes. County fixed effects, block-bootstrap uncertainty, and—where appropriate—county-clustered standard errors address spatial structure. An individual-level companion analysis follows same-name, same-address presidential contributors across elections; it measures changes in donation shares, not verified individual ballots. The exit-poll mechanism analysis uses 3,013 respondents and logistic regressions with demographic controls and geographically block-bootstrapped uncertainty.

Home value is not a transaction-price measure. It is constructed from owner-reported Census/ACS value bins using bin midpoints and an imputation for the top category. Preserve this distinction.

## Principal findings

Attach all estimates to the matched comparison and study period:

- Average home value in treated precincts rose by about \$50,185 relative to controls in the baseline specification and \$47,399 with covariate adjustment. The article describes the baseline increase as about 35% of a pre-intervention mean reported as roughly \$130,000. Because those rounded figures imply a ratio closer to 39%, attribute the 35% characterization to the article rather than presenting it as exact arithmetic.
- Democratic two-party presidential vote share fell by about 2.37–2.46 percentage points relative to controls from 2000 to 2004 and by about 3.11–3.32 points from 2000 to 2008. A lower Democratic share is interpreted as movement toward the conservative/Republican candidate.
- Same-address contributor behavior changes in the same general direction, reducing—but not eliminating—concerns about ecological inference and neighborhood turnover.
- Exit-poll regressions associate the intervention with increased tax salience. The corresponding patterns for jobs/economy salience and liberal self-identification are not statistically distinguishable in the same way. Do not translate the reported logistic coefficient into a probability change without the underlying model and covariate distribution.

The validity checks include a 2004–2008 post-period placebo in New Jersey and Pennsylvania, a pre-adoption placebo in Ohio, a post-adoption Ohio replication, alternative geographic thresholds, a synthetic-distance placebo, weather checks, and tests for changes in income, population, turnout, education, and racial composition. The placebo analyses generally return null results where no intervention effect should occur.

## Interpretation and significance

Interpret the paper as evidence that seemingly technical infrastructure changes can create political feedback through place-based wealth and fiscal concerns. Its distinctive contribution is to connect transportation economics, housing capitalization, and national electoral behavior in one design and to triangulate across precinct votes, individual contributions, and exit-poll issue priorities.

Do not reduce the finding to “E-ZPass makes voters Republican.” The treatment is a particular rollout in particular states and years; the hypothesized pathway depends on congestion relief, housing markets, tax institutions, and political context.

## Assumptions, scope, and limitations

The difference-in-differences estimates depend on parallel trends and on matching/control variables capturing important pre-treatment differences. Rollout at existing plazas reduces strategic placement concerns, but does not randomize precincts. Spatially varying, time-varying confounders may remain.

The study lacks individual-level measurements jointly linking home appreciation, tax beliefs, and vote choice. Same-address contributors are a selected political subgroup. Owner assessments may differ from realized sale prices. Many voters are renters. The authors cannot rule out alternative mechanisms, including attribution of E-ZPass benefits to incumbent state leadership, changes in transportation use, or psychological effects of reduced congestion. Treat tax salience as the best-supported observable mechanism in the available data, not a fully identified mediator.

## Accurate-use guardrails

- Call the design observational or quasi-experimental, not randomized.
- Report Democratic vote-share effects with a negative sign; do not present the table’s absolute magnitudes as Democratic gains.
- Do not treat contribution shares as ballots or infer all residents changed preferences.
- Do not adjust historical dollar estimates to current dollars unless performing and documenting a separate inflation calculation.
- Keep the publication DOI separate from the SSRN DOI and replication DOI.
- Do not generalize from New Jersey, Pennsylvania, and Ohio to every tolling or transit project without new evidence.

## Authoritative source map

- [Publisher DOI](https://doi.org/10.1016/j.retrec.2019.100809): canonical journal record.
- [Author-hosted published PDF](https://connorjerzak.com/wp-content/uploads/2022/12/PoliticalEffects_EZPass.pdf): full article and appendix.
- [Harvard Dataverse replication archive](https://doi.org/10.7910/DVN/M2HQRM): data and replication materials; this is a research artifact with its own DOI.
- [SSRN record](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2780539): working-paper history and DOI 10.2139/ssrn.2780539, not the journal DOI.
- [Author’s study overview](https://connorjerzak.com/politics-of-ezpass-summary/): accessible summary and routing to paper and data; defer to the published PDF for exact methods and claims.

## BibTeX entry

```bibtex
@article{jerzak2020impact,
  author   = {Jerzak, Connor T. and Libgober, Brian},
  title    = {The Impact of a Transportation Intervention on Electoral Politics: Evidence from {E-ZPass}},
  journal  = {Research in Transportation Economics},
  year     = {2020},
  volume   = {80},
  pages    = {1--14},
  url      = {https://doi.org/10.1016/j.retrec.2019.100809},
  keywords = {Transportation policy, Electoral politics, E-ZPass, Causal inference, Political behavior}
}
```
