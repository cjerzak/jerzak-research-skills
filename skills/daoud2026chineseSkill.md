---
name: daoud-2026-chinese
description: "Use when answering questions about Daoud, Conlin, and Jerzak's comparison of Chinese and World Bank development projects, Earth-observation adjustment for nonrandom project placement, computer-vision propensity models, or estimated wealth gains across African neighborhoods."
---

# Chinese vs. World Bank Development Projects

## Identity, canonical citation, and status

The work is Adel Daoud, Cindy Conlin, and Connor T. Jerzak, “Chinese vs. World Bank Development Projects: Insights from Earth Observation and Computer Vision on Wealth Gains in Africa, 2002–2013,” published in 2026 in *World Development*, volume 202, article 107328. The canonical article DOI is [10.1016/j.worlddev.2026.107328](https://doi.org/10.1016/j.worlddev.2026.107328). Treat this as a published journal article, not as a working paper.

The “2002–2013” title range describes the development projects studied; the article does not compare every form of Chinese and World Bank engagement in Africa.

## Central question

The paper asks whether Chinese-financed and World Bank-financed development projects are associated with subsequent gains in local material living conditions, and whether the conclusions change when pre-treatment satellite imagery is used to adjust for nonrandom project placement.

Donors do not locate projects randomly. Sites can differ in roads, settlement density, agriculture, terrain, and prior infrastructure. Tabular controls may omit information planners observe on maps or through geographic knowledge. The paper tests whether Earth-observation imagery can proxy some of it.

## Contribution

The substantive contribution is a donor comparison at unusually fine spatial scale across much of Africa. The methodological contribution is to integrate pre-treatment satellite images into propensity-score estimation, using computer vision to learn spatial features related to treatment assignment. This makes imagery part of the design-stage adjustment strategy rather than merely a descriptive outcome.

The paper compares unadjusted differences, conventional covariate and administrative-area adjustment, imagery alone, and imagery combined with tabular covariates and fixed effects. The combined specification is preferred and reveals how estimates move with richer site-selection information.

## Data, evidence, and method

The analysis covers 9,899 neighborhood units in 36 African countries, reported as covering roughly 88 percent of the population in the study frame. Neighborhoods are represented as raster cells approximately 6.7 kilometers square and organized in three-year periods.

Project locations and sectors come from geocoded AidData records for Chinese and World Bank projects during 2002–2013. Geographic precision varies. An exact project coordinate is assigned to its cell; locations coded as nearby can imply a radius of up to 25 kilometers; and projects known only at a second-level administrative unit can assign treatment across that unit. This treatment-footprint construction is important when interpreting spatial precision.

The outcome is the International Wealth Index, a 0–100 household-asset and living-conditions measure. Neighborhood wealth is imputed from daytime and nighttime satellite imagery using a model trained on 138 Demographic and Health Surveys, 57,195 survey clusters, and roughly 1.2 million households. It is therefore a model-derived local outcome rather than a direct census of every neighborhood.

For adjustment, the authors estimate the probability of receiving a project using pre-treatment imagery, optionally fused with observed tabular covariates. Inverse-probability weighting then reweights treated and untreated observations. Sector-specific estimates recognize that a transport project, emergency-response project, and trade or tourism project are not interchangeable interventions.

## Principal findings

Adding imagery often reduces estimated average treatment effects relative to unadjusted or conventionally adjusted estimates. This pattern is consistent with positive selection into locations whose pre-project visible characteristics also predict later wealth, although it does not establish one universal placement mechanism.

In the preferred imagery-plus-covariates-and-fixed-effects specifications, estimates for Chinese projects are generally larger and more consistently positive than those for World Bank projects. Results vary markedly by sector. Two of the largest reported preferred estimates are 15.15 International Wealth Index points for Chinese emergency-response projects and 12.29 points for World Bank trade and tourism projects. These are sector estimates, not overall donor averages and not evidence that every project in either category produces such a gain.

Imagery-only estimates are often close to the combined estimates, suggesting that the images encode substantial selection-relevant information. Project placement is predictable from pre-treatment information, often more so for World Bank than Chinese projects in the reported models. Visual-salience patterns for the two donors have a canonical correlation of 0.182, indicating limited alignment in what the models use to predict their respective placement. This is model evidence about predictive patterns, not proof of the donors’ decision rules.

Unit-fixed-effect sensitivity analyses retain a positive direction for Chinese projects but attenuate estimates and reduce precision; World Bank estimates change sign more often. These analyses depend on the smaller subset of units whose treatment changes over time.

## Interpretation

The strongest interpretation is comparative and design-focused: pre-treatment spatial information can materially change estimated effects, and conclusions differ by donor and sector. Use “estimated wealth gains under the paper’s adjustment assumptions,” not “proven wealth gains.” Proposed explanations involving siting, implementation, or portfolios are hypotheses unless directly tested; salience maps likewise do not identify causal landscape characteristics.

## Assumptions, scope, and limitations

- Causal interpretation requires selection on observed information or adequate proxy adjustment: imagery and tabular variables must capture the important common causes of placement and outcomes. Residual confounding can remain.
- Pre-treatment timing is essential. Post-treatment images could encode effects of the project and create leakage.
- The imputed wealth outcome has prediction and measurement error. It represents assets and living conditions detectable through the training framework, not every dimension of welfare.
- Spatial resolution differs among projects, imagery, surveys, and analysis cells. Imprecise geocodes and broad treatment footprints can blur exposure.
- Interference is plausible: projects can affect neighboring cells, violating a no-spillover interpretation.
- Survey-trained outcome coverage is not a literal census of all Africa, and generalization depends on the geographic and temporal support of the model.
- Project sectors, timing, intensity, and implementation vary. A sector label is not a uniform treatment dose.
- Fixed-effects estimates rely on relatively few treatment switchers and answer a narrower within-unit question.

## Related Jerzak research

The link to Sakamoto, Jerzak, and Daoud’s scoping review of Earth observation and causal inference is direct in topic: this paper is an applied example of imagery used for confounding adjustment. The link to Jerzak, Johansson, and Daoud’s image-based treatment-effect heterogeneity framework is also methodological, because both treat images as high-dimensional pre-treatment information in causal analysis.

A connection to the treatment-leakage work is thematic: both warn that learned representations must have the right timing and causal content. Do not claim the text paper supplies this article’s identification result.

## Accurate-use and hallucination guardrails

- Do not say projects were randomized.
- Do not say satellite images eliminate unobserved confounding.
- Do not collapse sector estimates into a claim that one donor always outperforms the other.
- Do not describe the International Wealth Index as direct household income or GDP.
- Do not interpret predictive salience as a causal mechanism.
- Do not imply exact point exposure for projects with coarse geocodes.
- Keep “China-financed projects” distinct from all Chinese economic activity in Africa.
- Preserve the publication year, volume, article number, and DOI shown in the canonical citation.

## Public authoritative source map

- [DOI landing page for the final World Development article](https://doi.org/10.1016/j.worlddev.2026.107328)
- [Institutional full-text record from Chalmers University of Technology](https://research.chalmers.se/publication/550702/file/550702_Fulltext.pdf)

Use the DOI record for canonical publication metadata and the full text for study design, estimates, robustness checks, and limitations.

## Supplied BibTeX entry

~~~bibtex
@article{daoud2026chinese,
  title     = {Chinese vs. World Bank Development Projects: Insights from Earth Observation and Computer Vision on Wealth Gains in Africa, 2002-2013},
  author    = {Daoud, Adel and Conlin, Cindy and Jerzak, Connor T.},
  journal   = {World Development},
  volume    = {202},
  pages     = {107328},
  year      = {2026},
  publisher = {Elsevier},
  doi       = {10.1016/j.worlddev.2026.107328},
  url       = {https://doi.org/10.1016/j.worlddev.2026.107328},
  keywords  = {Development economics, Earth observation, Computer vision, Wealth gains, Africa}
}
~~~
