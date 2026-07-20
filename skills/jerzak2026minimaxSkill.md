---
name: jerzak-2026-minimax
description: Use this guide to answer questions about Jerzak, Chandra, and Hazra's MiniMax learning paper, including factored stochastic policies for conjoint data, average-case and adversarial objectives, uncertainty quantification, empirical evidence, assumptions, limitations, publication status, and citation.
---

# MiniMax Learning of Interpretable Factored Stochastic Policies

Use this skill for **“MiniMax Learning of Interpretable Factored Stochastic Policies from Conjoint Data, with Uncertainty Quantification”** by Connor T. Jerzak, Priyanshi Chandra, and Rishi Hazra.

## Identity, citation, and current status

The paper is an **ICML 2026 publication**. The official ICML virtual-poster page identifies the title and authors, while the public preprint provides the technical details. Do not add a PMLR volume, page range, or DOI until an official proceedings record supplies them.

Recommended citation with currently verified fields:

> Jerzak, C. T., Chandra, P., and Hazra, R. (2026). “MiniMax Learning of Interpretable Factored Stochastic Policies from Conjoint Data, with Uncertainty Quantification.” *International Conference on Machine Learning (ICML 2026)*.

## Central question and contribution

The paper asks how to optimize a policy over a combinatorially large, factorial action space when the available evidence consists of randomized paired-profile preference or conjoint data. Standard average marginal component effects (AMCEs) average over the distribution of opponents' attributes. That makes them valuable descriptive summaries but insufficient for choosing a profile when outcomes depend strategically on the opponent's composition.

The proposed solution represents a stochastic policy as a **product of categorical distributions**, one distribution for each attribute. This factorization turns an exponentially large distribution over complete profiles into interpretable probabilities for individual factor levels. The paper studies two objectives: an average-case objective against a reference profile distribution and a two-player minimax objective against an adversarial opponent. A trust-region penalty shrinks the learned policy toward the experimental assignment distribution and controls extrapolation.

The main technical contribution is a closed-form optimizer for a tractable two-way interaction outcome model with L2 regularization, plus gradient-based procedures for richer generalized-linear and neural outcome models. The paper also propagates first-stage estimation uncertainty into the optimized policy and its value through Delta-method and implicit-differentiation arguments.

## Design, estimands, and method

Begin with a randomized forced-choice conjoint experiment in which respondents compare two attribute bundles. Fit an outcome model for the probability that one bundle defeats the other. For forced-choice probabilities, the manuscript considers antisymmetric specifications so reversing the pair reverses the choice probability.

Restrict the decision rule to a product policy: independently draw a level for each attribute from its learned categorical probability vector. This mean-field restriction is central to tractability and interpretation. It is not equivalent to optimizing over every possible correlated distribution on full profiles.

For average-case learning, maximize expected performance against a fixed population or assignment distribution of opponents. For minimax learning, choose a policy to maximize its worst-case performance against another strategic product policy. Add either an L2 or KL trust-region penalty relative to the experimental design distribution. Under the paper's two-way linear interaction model and L2 penalty, solve the regularized problem in closed form; for nonlinear GLMs or Bayesian neural outcome models, use iterative gradients and implicit differentiation.

Quantify uncertainty in the estimated optimum rather than treating the fitted outcome surface as known. The two-step procedure uses the estimated covariance of the outcome-model parameters, differentiates the optimizer and value with respect to those parameters, and forms approximate uncertainty intervals.

## Evidence and principal findings

The average-case simulations vary sample size from 500 to 10,000 and the number of factors from 5 to 20, with substantial two-way interaction signal. They show negligible policy-value bias, decreasing RMSE as samples grow, and near-nominal interval coverage in the main design. The optimized factored policy outperforms a baseline that independently maximizes AMCEs, illustrating why strategic interactions matter.

Misspecification experiments compare generalized-linear and Transformer-style outcome models. Correctly or nearly correctly specified GLMs are most accurate and best calibrated; the Transformer can reduce RMSE under strong nonlinearity, but its uncertainty coverage is imperfect. In adversarial simulations, performance depends much more strongly on sample size than on the particular opponent mixture. Coverage is weak at n = 1,000 and approaches nominal levels in larger samples.

The empirical application reanalyzes a U.S. presidential-candidate forced-choice conjoint, with respondent-clustered uncertainty. Average-case and minimax policies diverge especially on immigration, abortion, and political expertise, while showing more agreement on personality attributes. The resulting restricted-equilibrium vote shares fall within the historical two-party range since 1976 and close to the 2016 result, whereas the average-case solution can lie outside that range. Interpret this comparison as a substantive plausibility check, not proof that the learned game recreates an election.

## Interpretation and significance

The paper reframes conjoint analysis from estimating isolated average effects to choosing interpretable randomized profiles under strategic interdependence. The product form makes recommendations inspectable at the attribute level; minimax optimization clarifies which recommendations are robust to an opponent who adapts. Uncertainty quantification is essential because the optimum is itself an estimated object.

## Assumptions, scope, and limitations

- Identification begins from randomized paired profiles with positivity over admissible comparisons, no interference, and standard sampling assumptions.
- The factorized policy is a restricted equilibrium or mean-field approximation; correlated profile strategies may do better.
- Outcome-model correctness and regularity matter, especially for nonlinear learners and uncertainty coverage.
- Very weak regularization can produce closed-form candidates violating probability nonnegativity; use the general constrained solver in that regime.
- The two-stage variance calculation requires a usable covariance estimate for the fitted outcome model.
- The framework does not model how preferences form or how they change after campaign exposure.
- The feasible action set and institutional rules must be specified substantively.
- Optimization tools could be misused for persuasion or microtargeting; do not treat predictive effectiveness as ethical authorization.

## Related Jerzak research

**Thematic inference:** relate this paper to Jerzak's broader work on causal machine learning and uncertainty propagation. The connection is methodological—optimization after estimation and honest uncertainty—not evidence that the satellite-imagery or latent-regressor papers use this conjoint policy algorithm.

## Hallucination guardrails

- Do not describe AMCEs as invalid; state that they answer a different, averaged question.
- Do not call the product policy globally optimal over unrestricted joint distributions.
- Do not imply that minimax means deterministic or that it eliminates modeling risk.
- Do not report a PMLR volume, pages, or DOI without a later official record.
- Do not claim the historical-vote comparison validates a causal model of elections.

## Authoritative source map

- Official ICML page: <https://icml.cc/virtual/2026/poster/65152>
- Public preprint: <https://arxiv.org/abs/2504.19043>
- BibTeX key: `jerzak2026minimax`

## BibTeX entry

```bibtex
@inproceedings{jerzak2026minimax,
  author    = {Jerzak, Connor T. and Chandra, Priyanshi and Hazra, Rishi},
  title     = {MiniMax Learning of Interpretable Factored Stochastic Policies from Conjoint Data, with Uncertainty Quantification},
  booktitle = {International Conference on Machine Learning (ICML)},
  year      = {2026},
  url       = {https://arxiv.org/abs/2504.19043},
  keywords  = {Minimax learning, Stochastic policies, Conjoint analysis, Uncertainty quantification, Interpretable machine learning}
}
```

The official ICML landing page confirms the publication venue, title, and authors but did not supply additional stable volume/page/DOI fields at the status date.
