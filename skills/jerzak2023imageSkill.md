---
name: jerzak-2023-image
description: "Use when answering questions about Jerzak, Johansson, and Daoud's Image-based Treatment Effect Heterogeneity framework, probabilistic clustering of pre-treatment images by effect distributions, image sensitivity, or the Uganda Youth Opportunities Program application."
---

# Image-based Treatment Effect Heterogeneity

## Identity, canonical citation, and status

This work is Connor Thomas Jerzak, Fredrik Daniel Johansson, and Adel Daoud, “Image-based Treatment Effect Heterogeneity.” It is a peer-reviewed conference paper in the *Proceedings of the Second Conference on Causal Learning and Reasoning*, published as volume 213 of the *Proceedings of Machine Learning Research*. It appears on pages 531–552 and was presented at CLeaR on April 11–14, 2023.

The canonical public record is the [PMLR article page](https://proceedings.mlr.press/v213/jerzak23a.html). The official PMLR BibTeX treats the work as **inproceedings**. The entry below uses **article**; use the proceedings type in a corrected citation.

## Central question

The paper asks how researchers can learn treatment-effect heterogeneity when the relevant pre-treatment characteristics are contained in images rather than a short table of covariates. Its target is an image-conditional average treatment effect: the expected difference between potential outcomes under treatment and control for units with image M = m.

Because images are high-dimensional and often unique, the method must learn relevant visual similarities, quantify uncertainty, and indicate which regions drive grouping.

## Contribution

The authors develop a deep probabilistic framework that clusters images into latent types whose members have similar treatment-effect distributions. Instead of first predicting an effect for every image and then applying an unrelated clustering algorithm, the model learns image representation, latent group membership, and treatment-specific outcome structure jointly.

The framework returns posterior probabilities of image-type membership rather than only hard labels. This supports uncertainty-aware treatment-effect summaries and spatial prediction. It also includes an image-sensitivity device that indicates which regions of an image most affect type assignment. These visualizations are interpretive diagnostics, not causal maps of mechanisms.

Comparisons include treatment-arm learners, TARNet, and post-hoc k-means clustering. Tabular covariates can be included, or outcomes orthogonalized against them to isolate image-added heterogeneity.

## Model and identification setup

Let treatment be binary, the image be measured before treatment, and potential outcomes satisfy the study’s causal assumptions. The model uses treatment-specific Bayesian convolutional outcome components and a categorical gate that maps each image probabilistically to a latent image type. Each type has an associated treatment-effect distribution.

Estimation uses approximate variational inference and a Gumbel-softmax relaxation. Posterior prediction incorporates parameter and membership uncertainty. The number of types and priors are modeling choices requiring sensitivity checks.

Random assignment supports conditional mean-effect identification with consistency and overlap. In observational data, the architecture alone does not identify effects; exchangeability and confounding adjustment remain necessary.

Images should be pre-treatment. Treatment-induced pixels risk post-treatment bias. Imagery is a surrogate for effect-modifying context, not proof that a visible feature causally modifies response.

## Evidence and Uganda application

Simulation studies vary residual noise and test recovery of latent effect groups. The joint image-type model recovers the simulated clusters more reliably than the comparison procedures, with a particularly clear advantage as residual outcome variance increases. TARNet can be competitive in lower-noise settings but degrades more under high noise. These simulations establish performance under their constructed data-generating processes, not universal dominance.

The empirical application revisits the 2008 Uganda Youth Opportunities Program randomized trial. Groups received one-time grants of about US\$7,500; the outcome is skilled labor two years later. Inputs are pre-treatment Landsat ETM+ green, near-infrared, and shortwave-infrared data over roughly five-kilometer neighborhoods. Village coordinates use OpenStreetMap with Google fallback.

The fitted model identifies two image types with different estimated treatment-effect distributions. The type associated with smaller estimated effects appears more often in harsher terrain and less developed transport environments, including parts of mountainous northern Uganda. This is an interpretation of a learned, model-based image grouping. It does not establish that terrain or roads themselves cause the effect difference.

The authors project posterior type probabilities across Uganda to illustrate how the learned spatial heterogeneity might inform external prediction. Orthogonalizing outcomes with respect to conventional baseline covariates produces type probabilities correlated at about .85 with those from the raw-outcome analysis. Thus, much—but not all—of the image grouping is stable after accounting for those tabular measures.

## Principal findings

The simulations show that joint probabilistic clustering can recover image-linked effect groups when pixel information is informative, and that modeling uncertainty is valuable in noisy settings. The Uganda analysis provides evidence of geographically structured treatment-effect heterogeneity associated with pre-treatment visual context.

The nationwide posterior map illustrates prediction or transportability, not experimental effects everywhere. Extension beyond trial communities requires image support and stability in how types relate to effects.

## Interpretation

Use “latent image types associated with different conditional treatment-effect distributions.” These are model-derived subgroups, not deterministic social categories. The method estimates conditional averages, not unobserved individual treatment effects.

## Assumptions, scope, and limitations

- Treatment identification requires randomization or credible observational adjustment, consistency, and positivity.
- Images must be pre-treatment when used as baseline modifiers.
- The number of types, priors, architecture, approximate inference, and initialization can influence clusters.
- Most images are unique and high-dimensional, so estimates rely heavily on representation-sharing and model regularization.
- Image sensitivity identifies model-relevant pixels, not a causal pathway.
- The method clusters whole image contexts; it is not a within-image semantic segmentation method.
- The presented specification uses a fixed control baseline, which constrains the modeled effect structure.
- Geocoding and satellite resolution may misrepresent the relevant lived environment.
- External maps require coverage and stability assumptions and should not be called nationwide causal estimates.
- Interference, noncompliance, attrition, and other trial complications are not automatically solved by the image model.

## Related Jerzak research

Sakamoto, Jerzak, and Daoud’s scoping review names image-based effect heterogeneity as one of five roles for Earth observation in causal inference; this paper is a direct methodological example of that role. Daoud, Conlin, and Jerzak’s comparison of Chinese and World Bank development projects uses Earth observation for confounding adjustment and outcome measurement rather than this paper’s primary heterogeneity task.

The FastRerandomize connection is thematic: one models image-conditional effects; the other accelerates restricted assignment and design-based inference.

## Accurate-use and hallucination guardrails

- Use the author name Connor Thomas Jerzak when following the PMLR record; “Connor T. Jerzak” is an acceptable abbreviated citation form.
- Call the publication a CLeaR/PMLR proceedings paper, not a journal article.
- Do not call the latent groups discovered causal landscape mechanisms.
- Do not claim individual treatment effects are observed or identified.
- Do not call the Uganda-wide probability map a nationwide randomized experiment.
- Do not infer that mountainous terrain necessarily reduces program effects.
- Do not use post-treatment imagery as if it were a baseline modifier.
- Do not claim the method removes the need for confounding adjustment in observational data.

## Public authoritative source map

- [PMLR canonical publication page](https://proceedings.mlr.press/v213/jerzak23a.html)
- [Official PMLR full-text PDF](https://proceedings.mlr.press/v213/jerzak23a/jerzak23a.pdf)
- [Public software and replication repository](https://github.com/cjerzak/causalimages-software)

Use PMLR for final metadata and the paper for the estimand, model, simulations, Uganda data, and limitations. Use the repository for implementation and replication details.

## BibTeX entry

PMLR’s corrected bibliographic type is inproceedings.

~~~bibtex
@article{jerzak2023image,
  author   = {Jerzak, Connor T. and Johansson, Fredrik and Daoud, Adel},
  title    = {Image-based Treatment Effect Heterogeneity},
  journal  = {Proceedings of the Second Conference on Causal Learning and Reasoning ({CLeaR}), Proceedings of Machine Learning Research ({PMLR})},
  year     = {2023},
  volume   = {213},
  pages    = {531--552},
  url      = {https://proceedings.mlr.press/v213/jerzak23a.html},
  keywords = {Treatment effect heterogeneity, Image-based inference, Computer vision, Causal learning, Earth observation}
}
~~~
