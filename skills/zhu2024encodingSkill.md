---
name: zhu-2024-encoding
description: Use this guide to answer questions about Zhu, Jerzak, and Daoud's CLeaR paper on Multi-Scale Representation Concatenation for Earth-observation treatment-effect heterogeneity, including simulations, the Peru and Uganda RCTs, RATE Ratio results, limitations, key-year discrepancy, and citation.
---

# Optimizing Multi-Scale Representations for Effect Heterogeneity

Use this skill for **“Optimizing Multi-Scale Representations to Detect Effect Heterogeneity Using Earth Observation and Computer Vision: Applications to Two Anti-Poverty RCTs”** by Fucheng Warren Zhu, Connor T. Jerzak, and Adel Daoud.

## Identity, canonical citation, and status

The paper was published in 2025 in the *Proceedings of the Fourth Conference on Causal Learning and Reasoning (CLeaR)*, volume 275 of *Proceedings of Machine Learning Research*, pages 894–919.

Preserve the supplied BibTeX key **`zhu2024encoding`** even though the final publication year is 2025. A key is an identifier, not a claim about final publication year.

Canonical citation:

> Zhu, F. W., Jerzak, C. T., and Daoud, A. (2025). “Optimizing Multi-Scale Representations to Detect Effect Heterogeneity Using Earth Observation and Computer Vision: Applications to Two Anti-Poverty RCTs.” In *Proceedings of the Fourth Conference on Causal Learning and Reasoning*, PMLR 275, 894–919.

## Central question and contribution

The paper asks what spatial context a satellite-image model should use when estimating conditional average treatment effects (CATEs). A small crop may retain household-level signals but omit neighborhood context; a large crop adds context but may compress away local details when encoded into a fixed-dimensional vector.

The contribution is **Multi-Scale Representation Concatenation**, a composable procedure for converting an existing single-scale Earth-observation CATE pipeline into a multi-scale one. Encode several crops centered on the same unit, concatenate their learned representations, optionally reduce dimensionality, and pass the result to an existing heterogeneous-effect estimator. This avoids designing and training a new multi-scale vision architecture for each application and exposes which scale combinations contribute useful information.

## Method and evidence

The baseline implementation encodes Landsat crops with CLIP-RSICD, a CLIP model adapted to remote-sensing imagery, and estimates CATEs with a causal forest. Additional analyses use SWIN and Clay representations. For two-scale selection, grid-search scale pairs and compare the best multi-scale heterogeneity score against the best single-scale score; their difference is the **Multi-scale Gain**.

Because true unit-level treatment effects are unavailable in real RCTs, evaluate empirical prioritization with the **Rank Average Treatment Effect Ratio (RATE Ratio)** using the AUTOC weighting function. The numerator summarizes how strongly the model ranks units with above-average treatment response; dividing by its bootstrap standard deviation produces a signal-to-noise measure. Estimate treatment effects and evaluation quantities on separate sample halves. Do not interpret the RATE Ratio as prediction R-squared or as direct observation of true CATEs.

First run simulations on 32×32 and 256×256 crops from Peru imagery. Apply controlled center masking, edge fading, and contrast perturbations to create household-, neighborhood-, and global-scale signals, generate outcomes from the perturbations, and assess five-fold out-of-sample R-squared. Then analyze two anti-poverty RCTs:

- **Peru:** a multifaceted poverty-alleviation intervention conducted from 2007–2014, household-level locations, and Landsat 5 imagery from 2000–2003 at 30-meter pixels.
- **Uganda:** business grants for young people, treatment follow-up from 2008–2012, village-level locations, and Landsat 7 ETM+ mosaics from 2000 at approximately 14.5-meter pixels.

For the main CLIP-RSICD analysis, use crop widths 16, 32, 64, 128, 256, and 349 pixels, spanning roughly 0.5–10 km depending on resolution, then compare raw concatenated features with 50-principal-component compression.

## Principal findings

Simulations show that concatenation improves out-of-sample recovery when outcome-relevant features operate at multiple spatial scales. When no multi-scale signal exists, concatenation can impose a modest cost, so “more scales” is not a free guarantee.

In both RCT applications, the best multi-scale analysis improves or matches the best single-scale analysis. Evidence is stronger in Uganda than Peru. Optimal pairs commonly combine a small or medium crop around **64 pixels** with a much larger context. Principal-component compression often strengthens RATE Ratio performance, although the paper does not exhaustively optimize dimensionality reduction.

The maximum **349-pixel** context never optimizes the heterogeneity signal across the reported experimental conditions, even though it is the best single scale in one Uganda comparison. This supports the paper's “larger is not always better” conclusion: adding context can dilute fine-grained information in a fixed-size embedding.

Feature-importance probes indicate that causal forests generally use inputs from both the smaller and larger representations. Displacing crop centers to weaken precise household-location information reduces some raw-feature gains but does not eliminate the usefulness of multi-scale analysis, particularly after principal-component compression.

When the number of concatenated scales grows, the average RATE Ratio rises from approximately **2 for one scale** to about **2.5 at five scales**, then plateaus at six. Treat this as an empirical pattern in these two RCTs, not a universal five-scale law.

## Interpretation and significance

The paper makes spatial scale an explicit tuning and interpretability problem in EO-based causal machine learning. Multi-scale concatenation can preserve both local and contextual signals, improve treatment-response ranking, and be added to existing encoders and CATE estimators. Better ranking could improve program targeting, but the study does not directly demonstrate realized welfare gains from a deployed policy.

## Assumptions, scope, and limitations

- Causal identification assumes SUTVA and randomized treatment in these applications; observational extensions require additional unconfoundedness or design assumptions.
- Real RCTs do not provide ground-truth CATEs; RATE measures detectable ranking signal, not CATE truth.
- Results cover two anti-poverty RCTs and relatively low-resolution Landsat imagery.
- Image resolution interacts with spatial scale, complicating direct cross-country comparison.
- High-resolution, precisely located imagery can create serious privacy risks; Peru household data are not publicly released.
- Validation is empirical rather than supported by a general optimality theory.
- Grid search becomes combinatorially expensive as the number of scales grows, and one fixed scale combination may not be optimal for every unit.
- Learned representations can be sensitive to small image perturbations; one appendix test reports a 55% R-squared decrease under added contrast perturbation.

## Related Jerzak research

The paper explicitly builds on a single-scale image-based CATE pipeline previously used by Jerzak and coauthors. **Thematic inference:** connect it to “One Map, Many Trials,” which studies bias in reusable satellite wealth predictions, and to “Platonic Representations for Poverty Mapping,” which fuses imagery with text. Do not conflate CATE heterogeneity, outcome-map calibration, and poverty prediction.

## Hallucination guardrails

- Do not date the publication 2024 merely because the BibTeX key contains 2024.
- Do not claim the method observes true CATEs in Peru or Uganda.
- Do not equate a RATE Ratio above 1.96 with unbiased CATE estimation.
- Do not claim the largest crop is always harmful; it is sometimes useful in a multi-scale pair.
- Do not generalize the five-scale plateau beyond the studied designs.
- Do not imply that precise household geolocations or Peru replication data are public.

## Authoritative source map

- Official PMLR record and PDF: <https://proceedings.mlr.press/v275/zhu25a.html>
- Code: <https://github.com/AIandGlobalDevelopmentLab/MultiScaler>
- Supplied bibliography: `JerzakConnorBib.txt`, key `zhu2024encoding`

## Exact supplied BibTeX

```bibtex
@article{zhu2024encoding,
  author   = {Zhu, Fucheng Warren and Jerzak, Connor T. and Daoud, Adel},
  title    = {Optimizing Multi-Scale Representations to Detect Effect Heterogeneity Using Earth Observation and Computer Vision: Applications to Two Anti-Poverty RCTs},
  journal  = {Proceedings of the Fourth Conference on Causal Learning and Reasoning ({CLeaR}), Proceedings of Machine Learning Research ({PMLR})},
  year     = {2025},
  volume   = {275},
  pages    = {894--919},
  url      = {https://proceedings.mlr.press/v275/zhu25a.html},
  keywords = {Effect heterogeneity, Earth observation, Computer vision, Multi-scale representations, Anti-poverty RCTs}
}
```

The supplied record already contains the official PMLR volume, pages, and landing-page URL. It uses `@article`; a normalized citation to the canonical PMLR proceedings record would ordinarily use `@inproceedings`. No DOI is listed on the authoritative PMLR record, so do not invent one.
