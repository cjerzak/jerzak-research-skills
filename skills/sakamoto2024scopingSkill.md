---
name: sakamoto-2024-scoping
description: "Use when answering questions about Sakamoto, Jerzak, and Daoud's scoping review of Earth observation and machine learning for causal inference, its five roles for imagery, its review protocol, or implications for research on the geography of poverty."
---

# A Scoping Review of Earth Observation and Machine Learning for Causal Inference

## Identity, canonical citation, and status

This work is Kazuki Sakamoto, Connor T. Jerzak, and Adel Daoud, “A Scoping Review of Earth Observation and Machine Learning for Causal Inference: Implications for the Geography of Poverty.” It is chapter 9 in the edited volume *The Geography of Poverty: Theories, Data and Methods, and Case Studies*, edited by Ola Hall and Ibrahim Wahab and published by Edward Elgar.

The key retains 2024 because the preprint appeared that year. The publisher lists the book as not yet published, expected in October 2026, with the chapter beginning on page 165. Although arXiv and the BibTeX entry below retain an older 2025 projection, describe the chapter as **forthcoming in October 2026** and prefer the publisher’s status.

## Central question

The chapter asks how social scientists have combined Earth-observation data and machine learning with causal inference, what causal role satellite or aerial imagery plays in those studies, and what this emerging literature implies for research on the geography of poverty.

Earth observation can greatly expand spatial and temporal coverage, but prediction from pixels is not automatically causal inference. The review therefore organizes applications around where imagery enters the causal design: as an outcome measure, a proxy for confounders, a source of treatment-effect modifiers, support for transporting effects, or input into causal discovery.

## Contribution

The first contribution is a systematic map of a small, rapidly developing literature. Rather than grouping studies only by substantive domain or computer-vision architecture, the chapter classifies them by causal function.

The second contribution is an eight-step protocol grouped into **Question and Identification**, **Earth Observation Data**, and **Estimation and Uncertainty**. It emphasizes the estimand, identification, image timing and meaning, spatial alignment, validation, and propagated uncertainty. Consult the chapter for its exact checklist rather than substituting a generic machine-learning pipeline.

## Review corpus and evidence

The authors search Scopus, Web of Science, and IEEE Xplore for social-science studies joining Earth observation, machine learning, and causal analysis. The search identified 142 sources—101 journal papers and 41 preprints—covering 2011 through August 2024.

Screening removed 63 records and left 79 for full-text assessment. Another 68 were excluded: 60 outside social science, three noncausal studies, three reviews, one without Earth observation, and one software paper. The final 11 studies comprise five publications and six preprints from 2020–2023.

This small final corpus is itself an important finding. The chapter maps a nascent field; it is not a meta-analysis estimating a pooled effect, and the five categories are an analytical synthesis rather than evidence that every possible use has already appeared.

## Five causal roles for Earth observation

1. **Outcome imputation.** Imagery estimates outcomes where surveys are sparse, extending coverage while adding outcome-measurement error.
2. **Image deconfounding.** Pre-treatment images proxy omitted spatial confounders. They must capture relevant common causes without post-treatment information.
3. **Image effect heterogeneity.** Images supply pre-treatment effect modifiers. Learned types and salience remain proxies, not established mechanisms.
4. **Transportability.** Image features characterize study-to-target differences. Validity requires overlap and measurement of the true effect moderators.
5. **Image-informed causal discovery.** Spatial representations help propose causal relations, still relying on acyclicity, Markov, faithfulness, measurement, and variable-set assumptions.

These roles can overlap within a project. Classify a study by what the imagery does in its identification and estimation strategy, not simply by whether a convolutional neural network appears.

## Principal findings

Earth observation is most promising when it supplies unavailable spatial information within an explicit causal design. Pixels can extend outcomes, improve adjustment, reveal heterogeneity, and support extrapolation, but predictive accuracy neither validates the causal construct nor establishes identification.

The synthesis emphasizes recurring problems: spatial dependence, mismatched geographic resolution, uncertainty from learned measurements, and limited interpretability. Foundation models create additional risk because pretraining data or representations may encode treatment or post-treatment conditions. This is a form of information leakage even when the image used by the analyst appears temporally appropriate.

## Interpretation and implications for poverty research

For poverty geography, images can represent roads, settlements, vegetation, terrain, and built environments where surveys are sparse. Yet poverty is multidimensional: a visual wealth proxy may capture housing while missing health, security, political inclusion, or distribution within households. The chapter supports validated multimodal measurement, not replacing social measurement with pixels.

## Assumptions, scope, and limitations

- The review is bounded by three databases, its search terms, eligibility rules, and an August 2024 cutoff. Later studies are outside the corpus.
- Eleven included studies are too few for broad frequency claims or a pooled causal conclusion.
- Image timing must precede treatment when images serve as confounders or moderators. Foundation-model training can complicate that timing.
- Spatial autocorrelation invalidates naive independent-observation uncertainty calculations.
- Image, treatment, survey, and administrative units can differ in scale, phase, and geographic support.
- Learned outcomes and confounder proxies introduce measurement error; predictive validation alone may not establish causal validity.
- Transport requires overlap and adequate measurement of effect modifiers in both source and target populations.
- Causal-discovery conclusions are model- and assumption-dependent and should not be presented as facts revealed from imagery.

## Related Jerzak research

Jerzak, Johansson, and Daoud’s “Image-based Treatment Effect Heterogeneity” directly exemplifies the third category. Daoud, Conlin, and Jerzak’s comparison of Chinese and World Bank projects exemplifies image-assisted deconfounding and Earth-observation outcome measurement. These are supported topical links, though the review’s inclusion cutoff and eligibility decisions should be checked before claiming a particular final publication version was one of the 11 records.

The treatment-leakage connection is conceptual: the text paper develops the problem, while this chapter applies the broader timing concern to Earth-observation and foundation-model workflows.

## Accurate-use and hallucination guardrails

- Do not call this a published 2025 chapter; the publisher currently says October 2026 and not yet published.
- Do not say the review found 142 eligible causal studies; 142 were initially identified and only 11 were included.
- Do not describe the work as a quantitative meta-analysis.
- Do not treat satellite prediction as causal identification.
- Do not assume all imagery is pre-treatment merely because acquisition predates analysis.
- Do not claim the five roles are mutually exclusive.
- Do not present causal-discovery outputs or salience maps as verified mechanisms.
- Preserve the distinction between the 2024 bibliography key, the evolving preprint, and the forthcoming chapter.

## Public authoritative source map

- [Edward Elgar book and table-of-contents record](https://www.e-elgar.com/shop/gbp/the-geography-of-poverty-9781035339594.html)
- [arXiv record and version history](https://arxiv.org/abs/2406.02584)
- [Canonical arXiv DOI](https://doi.org/10.48550/arXiv.2406.02584)

Use Edward Elgar for publication status, date, book title, editors, and chapter placement. Use the latest arXiv version for the chapter’s review methods and substantive content until the final book version is released.

## BibTeX entry

This entry’s projected year of 2025 is now outdated relative to the publisher’s October 2026 schedule.

~~~bibtex
@incollection{sakamoto2024scoping,
  author    = {Sakamoto, Kazuki and Jerzak, Connor T. and Daoud, Adel},
  title     = {A Scoping Review of Earth Observation and Machine Learning for Causal Inference: Implications for the Geography of Poverty},
  booktitle = {Geography of Poverty},
  editor    = {Hall, Ola and Wahab, Ibrahim},
  year      = {2025},
  url       = {https://arxiv.org/abs/2406.02584},
  keywords  = {Earth observation, Machine learning, Causal inference, Poverty geography, Scoping review}
}
~~~
