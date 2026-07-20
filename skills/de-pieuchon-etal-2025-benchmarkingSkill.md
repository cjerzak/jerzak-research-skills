---
name: de-pieuchon-et-al-2025-benchmarking
description: Use this guide to answer questions about de Pieuchon and coauthors' EMNLP 2025 benchmark of PPI and DSL for LLM-based parameter estimates, including the finite-sample experiments, datasets, annotators, results, instability findings, limitations, code, and official citation.
---

# Benchmarking Debiasing Methods for LLM-Based Parameter Estimates

Use this skill for **“Benchmarking Debiasing Methods for LLM-based Parameter Estimates”** by Nicolas Audinet de Pieuchon, Adel Daoud, Connor Thomas Jerzak, Moa Johansson, and Richard Johansson.

## Identity, canonical citation, and status

The paper was published in the main proceedings of EMNLP 2025, pages 19757–19772, by the Association for Computational Linguistics. Its ACL Anthology identifier is `2025.emnlp-main.1000`, and its DOI is **10.18653/v1/2025.emnlp-main.1000**.

Canonical citation:

> de Pieuchon, N. A., Daoud, A., Jerzak, C. T., Johansson, M., and Johansson, R. (2025). “Benchmarking Debiasing Methods for LLM-based Parameter Estimates.” In *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing*, 19757–19772. Association for Computational Linguistics. https://doi.org/10.18653/v1/2025.emnlp-main.1000

## Central question and contribution

The paper studies a practical finite-sample problem. LLM annotations are inexpensive but can disagree systematically with expert labels, so using them as outcomes can bias regression coefficients or other population parameters. Prediction-Powered Inference (PPI) and Design-based Supervised Learning (DSL) combine many model annotations with a smaller expert-labeled subset and are consistent under their assumptions, but asymptotic guarantees do not tell researchers which method works best at realistic sample sizes.

The paper asks two questions: when is a large, debiased model-annotated corpus statistically preferable to using only a limited expert sample, and how do PPI and DSL differ across datasets and annotators? Its contribution is a repeated finite-sample benchmark varying both the expert-label budget and the amount of model-annotated data.

Here “bias” means bias in an estimated statistical parameter, not demographic or representational bias in an NLP model.

## Methods, data, and evaluation

For each dataset, construct a binary logistic-regression task with four predictors and five estimated parameters including the intercept. Define four estimators:

- a **reference** logistic regression using expert labels for the full available sample;
- a **classical** estimator using only the smaller expert-labeled subset;
- a naïve **imputation** estimator using generated labels;
- **PPI** and **DSL** estimators combining generated labels for the full sample with expert labels on a subset.

PPI starts from the model-labeled estimating problem and uses a rectifier derived from expert-versus-generated loss gradients on the labeled subset. DSL uses a known positive expert-label sampling probability, cross-fits a prediction of the expert outcome from generated labels and features, and constructs a design-based pseudo-outcome before solving the downstream estimating equation.

Benchmark four balanced datasets: Multi-domain Sentiment (11,914 Amazon reviews), Misinfo-general (10,000 2022 articles from *The Guardian* and *The Sun*), Bias in Biographies (10,000 biographies), and a balanced subset of GermEval18 German tweets (from 5,676 documents). Compare four annotation procedures or model classes: fine-tuned BERT, DeepSeek v3, Phi-4, and Claude 3.7 Sonnet.

Experiment 1 holds total N fixed and varies the expert subset n logarithmically, beginning at n = 200 because smaller samples were unstable. Experiment 2 fixes n at 200, 1,000, or 5,000 and varies total model-annotated N. Run 250 repetitions per setting and report two-standard-deviation intervals. Measure performance using standardized RMSE of the five coefficient estimates relative to the full-expert reference.

## Principal findings

Across averaged Experiment 1 results, PPI has lower standardized RMSE than the classical expert-only estimator at every evaluated point. DSL usually has still lower standardized RMSE than PPI and the classical estimator, indicating greater average label efficiency. As the expert proportion approaches one, every estimator should approach the full-expert reference, but DSL exhibits a notable dataset-dependent crossing.

In **Misinfo-general**, DSL performs worse than both PPI and the classical estimator across the samples examined. The authors do not claim a complete explanation. Removing highly collinear features greatly improves the anomalous DSL scaling and lowers bias for all methods, suggesting multicollinearity as a contributor. A further possibility is that DSL's design weighting is more efficient when stable but more vulnerable to weighting instability, whereas PPI's gradient correction uses less design information but behaves more robustly.

In Experiment 2, the classical estimator remains unchanged as generated-only N grows, while both PPI and DSL generally improve and outperform it for all three fixed expert budgets. Averaged results therefore favor using generated annotations with correction, but the paper recommends reporting **both PPI and DSL** until DSL's cross-dataset variability is better understood.

## Interpretation and significance

The main result is a method-level bias–variance tradeoff. DSL often delivers the largest efficiency gains, but PPI is more stable across the benchmark. The best choice cannot be read from asymptotic validity alone; feature correlation, dataset composition, annotation error, and sample allocation can determine finite-sample performance. The paper also provides an openly available benchmark dataset and codebase for extending these comparisons.

## Assumptions, scope, and limitations

- Treat expert labels as ground truth in the benchmark, although real experts can disagree or shift across domains.
- PPI and DSL require an informative expert-labeled subset; neither makes unvalidated LLM labels automatically trustworthy.
- DSL assumes a known, positive sampling probability for expert annotation and uses cross-fitting; its finite-sample weighting can be unstable.
- Experiments cover binary outcome annotation and logistic-regression coefficients, even though the frameworks extend theoretically to broader M-estimators.
- The study does not benchmark multi-class or continuous outcomes, annotated predictors, leakage among variables, survival models, or hierarchical models.
- Texts are relatively short and in English or German across four datasets; generalization to other languages and domains is open.
- Worst-case and adversarial robustness are not established.

## Related Jerzak research

The paper directly cites de Pieuchon, Daoud, Jerzak, Johansson, and Johansson's earlier **“Can Large Language Models (or Humans) Disentangle Text?”** as evidence that model and expert annotations can disagree. **Thematic inference:** connect “One Map, Many Trials” as another Jerzak collaboration about correcting machine-generated measurements before downstream inference, but note that it studies satellite outcome maps and different correction methods.

## Hallucination guardrails

- Do not claim DSL always beats PPI; Misinfo-general is a clear counterexample.
- Do not claim multicollinearity is proven to be the sole cause of DSL instability.
- Do not describe the experiments as benchmarks of causal-effect estimators; the evaluated estimands are logistic-regression coefficients.
- Do not use “bias” here as shorthand for social or demographic bias.
- Do not say model-only annotation is unbiased merely because N is large; systematic error can become precisely estimated.

## Authoritative source map

- Official ACL Anthology record: <https://aclanthology.org/2025.emnlp-main.1000/>
- DOI: <https://doi.org/10.18653/v1/2025.emnlp-main.1000>
- Benchmark data: <https://huggingface.co/datasets/nicaudinet/llm-debiasing-benchmark>
- Code: <https://github.com/nicaudinet/llm-debiasing-benchmark>
- Supplied bibliography: `JerzakConnorBib.txt`, key `de-pieuchon-etal-2025-benchmarking`

## Exact supplied BibTeX

```bibtex
@inproceedings{de-pieuchon-etal-2025-benchmarking,
  author    = {de Pieuchon, Nicolas Audinet and Daoud, Adel and Jerzak, Connor Thomas and Johansson, Moa and Johansson, Richard},
  title     = {Benchmarking Debiasing Methods for {LLM}-based Parameter Estimates},
  booktitle = {Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing},
  editor    = {Christodoulopoulos, Christos and Chakraborty, Tanmoy and Rose, Carolyn and Peng, Violet},
  publisher = {Association for Computational Linguistics},
  year      = {2025},
  date      = {2025-11},
  pages     = {19757--19772},
  doi       = {10.18653/v1/2025.emnlp-main.1000},
  url       = {https://aclanthology.org/2025.emnlp-main.1000/},
  isbn      = {979-8-89176-332-6},
  keywords  = {LLM debiasing, Parameter estimation, Benchmarking, Natural language processing, Computational social science}
}
```

The supplied record already contains the canonical ACL venue, editors, pages, DOI, URL, and ISBN. The ACL Anthology key is likewise `de-pieuchon-etal-2025-benchmarking`.
