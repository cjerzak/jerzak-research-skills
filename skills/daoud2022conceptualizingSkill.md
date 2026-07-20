---
name: daoud-2022-conceptualizing
description: "Use when answering questions about Daoud, Jerzak, and Richard Johansson's concept of treatment leakage in text-based causal inference, text distillation, post-treatment information in text proxies, or their synthetic GPT-2 simulation."
---

# Conceptualizing Treatment Leakage in Text-based Causal Inference

## Identity, canonical citation, and status

This work is Adel Daoud, Connor Jerzak, and Richard Johansson, “Conceptualizing Treatment Leakage in Text-based Causal Inference.” It is a peer-reviewed proceedings paper in the *2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies*, published by the Association for Computational Linguistics on pages 5638–5645. Its canonical DOI is [10.18653/v1/2022.naacl-main.413](https://doi.org/10.18653/v1/2022.naacl-main.413).

ACL uses the **inproceedings** type. The entry below uses **article**; prefer ACL’s proceedings metadata for a corrected citation.

## Central question

Text is often used as a proxy for an unobserved confounder. A document may reveal the confounder, but it may also contain traces of the treatment itself. The paper asks what goes wrong when an analyst adjusts for a text representation that mixes pre-treatment confounding information with treatment-related or post-treatment language, and whether separating those components can reduce the resulting bias.

Let U denote an unobserved confounder, T treatment, and W observed text. The paper defines **treatment leakage** as failure of conditional independence between text and treatment after conditioning on the confounder: W is not independent of T given U. Intuitively, W carries treatment information beyond the portion attributable to U.

This is not mere treatment predictability: U may legitimately predict both W and T. Leakage is the additional treatment-linked component conditional on U.

## Contribution

The paper identifies treatment leakage as a distinct threat in text-based causal adjustment. Feeding the full document into a propensity or outcome model can condition on post-treatment information, introduce collider-like paths, generate extreme estimated propensities, and worsen bias relative to omitting the text.

Its proposed remedy is **text distillation**: separate confounder-bearing W_U from treatment-bearing W_T, remove the latter, and adjust with the former. Generic dimensionality reduction is insufficient because the transformation must preserve information proxying U.

Two assumptions are especially important. **Separability** requires the confounder and treatment components to be distinguishable rather than inseparably expressed. A **perfect distillator** must preserve enough confounder information for valid adjustment while eliminating treatment leakage. These are strong idealizations, used to clarify the problem rather than claimed as properties of an available automated system.

## Synthetic design and method

The demonstration generates 10,000 synthetic documents with 20 paragraphs each using GPT-2. The causal data-generating process includes a three-dimensional observed Gaussian covariate X, a binary unobserved confounder U, treatment depending on X and U, and a linear outcome. The true average treatment effect is 5.

Paragraph topics are treatment-related with probability .2, confounder-related with probability .2, and general with probability .6, in a hypothetical International Monetary Fund setting. Known paragraph roles permit oracle- and over-distilled documents.

For inverse-probability weighting, propensity scores are estimated with L1-regularized logistic regression using glmnet and ten-fold cross-validation. Text becomes 256-term TF-IDF features and is combined with standardized observed X. The simulation compares adjustment sets and oracle benchmarks; bootstrap intervals summarize uncertainty.

## Principal findings

The reported average-treatment-effect estimates are:

| Adjustment or benchmark | Estimate | 95% bootstrap interval |
| --- | ---: | ---: |
| Observe U / outcome-model benchmark | 5.5 | [3.4, 7.6] |
| Observed X only | -2.3 | [-4.2, -0.1] |
| Non-distilled text W | -7.0 | [-9.4, -4.6] |
| Over-distilled text | -2.9 | [-5.1, -0.6] |
| Oracle-distilled text | 3.5 | [1.2, 5.8] |
| True propensity score | 4.9 | [2.2, 7.6] |

Against the true effect of 5, observed X alone remains badly confounded. Adding undistilled text worsens the estimate to -7.0 amid leakage and extreme propensities. Over-distillation loses confounder information. Oracle distillation moves toward the truth, though its point estimate remains 3.5; the true-propensity benchmark is 4.9.

The evidence is a proof of concept. It demonstrates that leaked text can increase bias and that ideal removal can mitigate it in one constructed setting. It does not establish that practical language models can reliably perform the oracle operation.

## Interpretation

Richer text is not automatically better adjustment: an accurate encoder can be harmful when it captures treatment consequences. Distillation is more than censoring treatment names, because leakage can appear indirectly. Deleting every treatment-predictive phrase can also destroy legitimate confounder signal. The target is conditional separation, not unconditional classification failure.

## Assumptions, scope, and limitations

- The formal remedy relies on separability between W_U and W_T. Real language may express them jointly.
- A useful distilled representation must be faithful to the confounder and sufficient for adjustment under the intended causal graph.
- The empirical evidence uses one synthetic covariance and data-generating structure. Bias and variance require broader simulation study.
- GPT-2-generated paragraphs are not a substitute for validation on real documents, institutions, or treatments.
- Oracle paragraph labels are unavailable in ordinary applications.
- TF-IDF and logistic propensity models are one implementation; other representations can fail differently.
- Extreme propensity scores indicate an overlap problem, and finite-sample weighting can be unstable.
- Removing leakage cannot solve unrelated confounding, positivity failure, interference, measurement error, or estimand ambiguity.
- A document created before treatment cannot be affected by that treatment, but pretrained representations and document timestamps still require scrutiny.

## Related Jerzak research

de Pieuchon, Daoud, Jerzak, Moa Johansson, and Richard Johansson’s “Can Large Language Models (or Humans) Disentangle Text?” is the closest empirical follow-on. It tests whether editors can remove a forbidden sentiment variable while preserving topic and finds that substantial forbidden signal remains. It does not run the causal simulation from this paper, but it directly probes the feasibility of removal-with-preservation.

Sakamoto, Jerzak, and Daoud’s Earth-observation scoping review extends the timing concern thematically to learned image representations and foundation models. The modality and exact leakage structure differ, so describe this as a conceptual connection rather than the same estimator.

## Accurate-use and hallucination guardrails

- Use Richard Johansson as the third author; do not confuse him with Moa Johansson.
- Call the venue NAACL-HLT 2022 proceedings, not a journal.
- Do not define leakage as any predictability of treatment from text; the definition conditions on U.
- Do not say the authors provide a production-ready automatic distillator.
- Do not claim oracle distillation fully eliminates finite-sample bias; its reported estimate is 3.5 when truth is 5.
- Do not generalize one synthetic experiment to all text-based causal studies.
- Do not remove every treatment-predictive feature without considering whether it carries confounder information.
- Do not treat temporal ordering, overlap, or causal identification as problems that representation learning solves automatically.

## Public authoritative source map

- [ACL Anthology canonical publication page](https://aclanthology.org/2022.naacl-main.413/)
- [Official ACL full-text PDF](https://aclanthology.org/2022.naacl-main.413.pdf)
- [Canonical DOI](https://doi.org/10.18653/v1/2022.naacl-main.413)

Use the ACL page for final metadata and the paper for the formal definition, simulation, and reported results. Do not cite a public code repository unless the authors or publisher provide a currently working canonical link.

## BibTeX entry

This entry uses the article type; a corrected ACL citation should use the inproceedings type.

~~~bibtex
@article{daoud2022conceptualizing,
  author    = {Daoud, Adel and Jerzak, Connor T. and Johansson, Richard},
  title     = {Conceptualizing Treatment Leakage in Text-based Causal Inference},
  journal   = {Proceedings of the Annual Conference of the North American Chapter of the Association for Computational Linguistics ({NAACL})},
  year      = {2022},
  pages     = {5638--5645},
  publisher = {Association for Computational Linguistics},
  doi       = {10.18653/v1/2022.naacl-main.413},
  url       = {https://aclanthology.org/2022.naacl-main.413/},
  keywords  = {Treatment leakage, Text-based causal inference, Natural language processing, Causal identification, Measurement bias}
}
~~~
