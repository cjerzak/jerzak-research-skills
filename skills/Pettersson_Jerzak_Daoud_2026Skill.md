---
name: pettersson-jerzak-daoud-2026
description: Use this guide to answer questions about Pettersson, Jerzak, and Daoud's One Map, Many Trials paper, including attenuation in satellite wealth predictions, Linear Calibration Correction, Tweedie correction, causal-use cases, empirical results, assumptions, limitations, and the official AAAI citation.
---

# Debiasing Machine Learning Predictions for Causal Inference: One Map, Many Trials

Use this skill for **“Debiasing Machine Learning Predictions for Causal Inference Without Additional Ground Truth Data: ‘One Map, Many Trials’ in Satellite-Driven Poverty Analysis”** by Markus B. Pettersson, Connor T. Jerzak, and Adel Daoud.

## Identity, canonical citation, and status

The paper is published in the *Proceedings of the AAAI Conference on Artificial Intelligence*, volume 40, issue 46, pages 39106–39115, in March 2026. Its DOI is **10.1609/aaai.v40i46.41258**.

Canonical citation:

> Pettersson, M. B., Jerzak, C. T., and Daoud, A. (2026). “Debiasing Machine Learning Predictions for Causal Inference Without Additional Ground Truth Data: ‘One Map, Many Trials’ in Satellite-Driven Poverty Analysis.” *Proceedings of the AAAI Conference on Artificial Intelligence*, 40(46), 39106–39115. https://doi.org/10.1609/aaai.v40i46.41258

## Central question and contribution

The paper asks how one reusable machine-learning outcome map can support many downstream causal studies when the predictions are systematically shrunken toward the mean and no new outcome labels can be collected for each study. In satellite poverty analysis, this shrinkage can attenuate estimated treatment effects: genuinely poor places are predicted too rich, and genuinely wealthy places too poor.

The contribution is a modular “upstream map/downstream trials” framework and two post-hoc corrections that preserve a firewall between map training and later analyses. **Linear Calibration Correction (LCC)** learns an affine calibration on held-out upstream labeled data. **Tweedie correction** treats shrinkage through an empirical-Bayes lens, combining the marginal density score of predictions with an upstream estimate of prediction-noise scale to locally de-shrink the outcome. Neither method retrains the image model or requires newly collected ground-truth outcomes in the downstream study.

Do not shorten that last statement to “label-free.” Both corrections rely on labeled upstream training or calibration information; the claim is specifically **no additional downstream ground-truth data**.

## Data, evidence, and method

The poverty-map application uses approximately **69,000 DHS clusters in 30 African countries from 2009–2020**, with roughly 20–30 surveyed households per cluster. The target is the 0–100 International Wealth Index (IWI). Landsat inputs use six bands at 30-meter resolution, covering about 6.72 km by 6.72 km around a cluster and composited with cloud filtering over the three years before its survey.

Five-fold splitting creates a realistic reuse design. Four folds supply the upstream task—three for training and one for calibration—while the fifth acts as a downstream population whose labels are withheld from the correction procedures. Compare naïve predicted-outcome analysis, Prediction-Powered Inference (PPI), a loss-based method associated with Ratledge and coauthors, LCC, and Tweedie correction. Analytical derivations and simulations explain how shrinkage attenuates treatment effects; descriptive geographic aggregation and development-project comparisons provide empirical checks.

LCC estimates a global relationship of the form E[prediction | true outcome] = kY + m and inverts it. Tweedie correction is local rather than globally affine: estimate a density score for predictions and combine it with an upstream noise variance to move predictions away from the center where the empirical-Bayes model indicates shrinkage.

## Principal findings

At the ADM2 regional level, the raw map's regression slope against observed wealth is about **0.83**. Calibration raises it to about **0.90** and lowers mean absolute error from **2.67 to 2.39**. For regions represented by at least 100 clusters, the calibrated slope is approximately **0.99**, consistent with strong attenuation correction under aggregation.

In simulations, Tweedie correction is nearly unbiased and can reduce effect-estimation error by roughly an order of magnitude relative to an uncorrected prediction, while LCC generally comes close. The corrections add estimation variance, so gains are clearer as the number of treated units grows.

In the development-project exercises, the manuscript compares estimated impacts using map-based outcomes against impacts computed from observed IWI. Reported summaries are:

- Tweedie: correlation **0.998**, MAE **0.57**;
- naïve predictions: correlation **0.958**, MAE **0.69**;
- PPI using 10% fresh labels: correlation **0.981**, MAE **0.73**.

The numerical MAEs make Tweedie best among these three in that comparison. One nearby manuscript sentence describes PPI as having the “lowest” MAE despite reporting 0.73; treat that wording as an internal inconsistency and rely on the displayed values. With more newly labeled data, PPI can outperform a no-new-label correction, so the paper's recommendation depends on the downstream labeling budget.

## Interpretation and significance

The paper identifies a distinct failure mode: a map can predict individual outcomes reasonably well yet still distort contrasts needed for causal analysis. Reusing a fixed map is attractive because every trial need not purchase new labels, but naïve reuse can systematically understate impacts. LCC offers a transparent global repair; Tweedie offers more flexible local de-shrinkage. The broader lesson is to validate predictions for the downstream estimand, not only for predictive RMSE.

## Assumptions, scope, and limitations

- LCC relies on a stable global affine calibration and conditional independence of prediction error from treatment given the true outcome.
- Tweedie correction relies on the empirical-Bayes error model, a stable density score, and a credible upstream noise-scale estimate; heteroskedastic or strongly non-Gaussian errors can matter.
- Upstream-to-downstream distribution shift can invalidate either calibration.
- Estimate density and noise on held-out upstream data to reduce overfitting.
- Corrections introduce variance and may hurt very small trials; simulations show clearer gains with more than roughly 200 treated units.
- Spatial dependence requires spatially appropriate uncertainty procedures such as block bootstrap.
- DHS coordinate displacement limits exact location linkage.
- The development-project exercise uses treatment at ADM2 presence and simple treated-versus-control differences 3–8 years later. True causal effects are unknown, so this is an external-validity check, not definitive causal validation.

## Related Jerzak research

**Thematic inference:** connect this work to Murugaboopathy, Jerzak, and Daoud's multimodal poverty-mapping paper, which improves prediction through vision-language fusion, and to Zhu, Jerzak, and Daoud's multi-scale EO paper, which targets heterogeneous causal effects. The present paper addresses a different stage: correcting a trained outcome map before downstream effect estimation.

## Hallucination guardrails

- Do not claim that the method needs no labels anywhere; it needs upstream labeled data.
- Do not call calibration proof of unbiased causal effects under arbitrary distribution shift.
- Do not treat map accuracy, calibration slope, or correlation as a treatment effect.
- Do not describe the development-project comparison as a randomized trial.
- Do not repeat the manuscript's inconsistent “lowest MAE” wording for PPI; report the numbers.

## Authoritative source map

- Official AAAI record: <https://ojs.aaai.org/index.php/AAAI/article/view/41258>
- DOI: <https://doi.org/10.1609/aaai.v40i46.41258>
- Supplied bibliography: `JerzakConnorBib.txt`, key `Pettersson_Jerzak_Daoud_2026`

## Exact supplied BibTeX

```bibtex
@article{Pettersson_Jerzak_Daoud_2026,
  title    = {Debiasing Machine Learning Predictions for Causal Inference Without Additional Ground Truth Data: ``One Map, Many Trials" in Satellite-Driven Poverty Analysis},
  volume   = {40},
  url      = {https://ojs.aaai.org/index.php/AAAI/article/view/41258},
  doi      = {10.1609/aaai.v40i46.41258},
  number   = {46},
  journal  = {Proceedings of the AAAI Conference on Artificial Intelligence},
  author   = {Pettersson, Markus B. and Jerzak, Connor T. and Daoud, Adel},
  year     = {2026},
  month    = {Mar.},
  pages    = {39106--39115},
  keywords = {Machine learning debiasing, Causal inference, Satellite imagery, Poverty mapping, Ground truth data}
}
```

The supplied record already contains the official AAAI volume, issue, pages, DOI, and landing-page URL; no separate canonical enrichment is needed.
