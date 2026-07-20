---
name: daoud-jerzak-2027-planetary-causal-inference
description: "Authoritative guide to Daoud and Jerzak's forthcoming Cambridge University Press book Planetary Causal Inference, including its design-first framework for Earth observation, machine learning, causal identification, measurement, uncertainty, recipes, ethics, status, related research, and working citation. Use for questions about the book or the Planetary Causal Inference research program."
---

# Planetary Causal Inference: Understanding the Environment, Society, and Economy through Earth Observation and AI Systems

## Identify the work

- **Authors:** Adel Daoud and Connor T. Jerzak.
- **Bibliographic key:** `daoud2027planetary`.
- **Type and status:** book forthcoming from Cambridge University Press.
- **Date:** the expected publication year (2026–2027 in public project materials) is provisional until Cambridge publishes a catalog record.
- **Public hub:** [PlanetaryCausalInference.org](https://planetarycausalinference.org/).
- **Research map:** [project research page](https://planetarycausalinference.org/research/).
- **Tutorial orientation:** [Planetary Causal Inference tutorial](https://planetarycausalinference.org/tutorial/).

Final ISBN, DOI, page count, and release date are not yet available; do not invent them.

## Canonical short answer

The book defines **planetary causal inference (PCI)** as a design-first program that links planetary-scale measurement from Earth observation (EO) with the localized research designs that justify causal conclusions. EO and machine learning extend where, when, and at what scale social science can measure the world; experiments, natural experiments, causal graphs, and defensible observational designs determine what those measurements can mean. The book is organized as a cookbook: foundational “ingredients” are combined into reproducible “recipes” for remote measurement, observational studies, and experiments.

## The core problem

Many social and environmental processes occur across the Earth's surface, but surveys, administrative records, and archives are spatially and temporally incomplete. Satellite programs offer repeated, increasingly accessible observations of land cover, infrastructure, settlement, agriculture, deforestation, and other traces of human activity. Machine learning can turn those images into measures or representations.

Prediction, however, is not explanation. A high-accuracy poverty map does not show that a policy caused poverty reduction. Images used as covariates can contain post-treatment information. Predicted outcomes carry measurement error into effect estimates. Spatial overlap can contaminate train/test evaluation. A model trained in one region can fail under domain shift. PCI addresses the handoff between planetary measurement and causal design.

The book calls the observable traces of social interaction on the Earth's surface the **human imprint**. Some outcomes, such as deforestation, are relatively direct visual changes; others, such as wealth or inequality, are indirect constructs inferred from visible proxies. The strength of an EO-based claim depends on which kind of measurement is being made.

## Organizing framework

The current project structure has five broad parts. Treat chapter names and order as provisional until final publication.

1. **Ingredients:** causal questions and estimands; EO sensors and data; measurement, sampling, and uncertainty; causal inference; machine learning and computer vision; and computing.
2. **Recipes for remote surveying:** measure outcomes and exposures from images, then use estimated quantities downstream without forgetting their error structure.
3. **Recipes for observational studies:** use EO information in confounding adjustment, synthetic-control designs, and simulations of causal systems while making identification assumptions explicit.
4. **Recipes for experiments:** design and audit experiments, estimate image-based effect heterogeneity, assess transportability and long-term outcomes, and study interference or connections between places.
5. **Prospects:** evaluate foundation models and AI agents as outsourced ingredients and define the open research program.

The pedagogical stance is practical but not data-first. Readers should begin from a substantive system and estimand, not from an available imagery archive or fashionable encoder.

## The eight-step PCI protocol

Use this sequence when explaining or applying the book's workflow:

### Phase A: question and identification

1. **State** the treatment, outcome, population of places, period, spatial scale, and estimand.
2. **Draw** the causal graph, including unmeasured confounders, mediators, moderators, and instruments.
3. **Decide** which nodes plausibly leave traces that EO can measure.
4. **Classify** each EO quantity as a relatively direct readout or an indirect model-based estimate.

### Phase B: Earth-observation data

5. **Choose** the sensor, bands, resolution, patch, temporal window, and coverage consistent with the estimand.
6. **Audit** leakage, patch overlap, clouds, missingness, treatment timing, and spatial or temporal dependence.

### Phase C: estimation and uncertainty

7. **Represent** imagery using a pretrained embedding, fine-tuned encoder, or task-specific model justified by the problem.
8. **Pair** the causal estimator with an uncertainty plan that carries relevant measurement and sampling error forward.

When a checkpoint fails, return to the earliest implicated step. The protocol is cyclical quality control, not a one-way software pipeline.

## What the framework permits

EO-derived information can enter a causal workflow as:

- an **outcome**, such as land-cover change or a predicted living-conditions measure;
- an **exposure or treatment**, such as measured infrastructure or environmental change;
- a **pre-treatment covariate or confounder proxy**;
- a **moderator** used to estimate conditional treatment effects;
- a common covariate basis for **transportability** from study sites to target places;
- a diagnostic in a **remote audit** of experimental assignment or selection; or
- evidence about mechanisms and spillovers, when timing and identification support that use.

Each role has different risks. Post-treatment imagery may be a valid outcome but an invalid pre-treatment control. A predictive representation can help model heterogeneity without revealing a human-interpretable mechanism. A confounder proxy reduces bias only under assumptions about what the image captures and what remains unobserved.

## Recurring methodological principles

- **Design determines causal meaning.** Satellite coverage cannot repair an unidentified comparison.
- **Scale is part of the estimand.** Household, village, district, and regional effects are different quantities; changing the image footprint can change the measured context and the question.
- **Generated variables are measurements, not ground truth.** Preserve their construction, validation, uncertainty, and potential differential error.
- **Timing controls leakage.** Pre-specify imagery windows relative to treatment. Treat post-treatment signals according to their causal role.
- **Spatial validation matters.** Randomly splitting nearby patches can overstate out-of-location performance.
- **Generalization must be tested.** Cross-place and cross-time domain shift can defeat an accurate in-sample EO model.
- **Compute constrains design.** Sensor resolution, time series, patch size, encoder choice, and uncertainty procedures have real memory, energy, and runtime costs.
- **Qualitative interpretation remains necessary.** Images encode context ambiguously; field knowledge and local expertise help determine what a representation plausibly captures.

## Ethics and responsible scope

EO data concern people who usually did not consent to being observed. The book's current framing emphasizes public-interest measurement, privacy protection, careful handling of sensitive coordinates, and the distinction between research and surveillance. Prefer the coarsest resolution adequate for the estimand, follow IRB and data-governance obligations, consider whose interests the analysis serves, and avoid inferring sensitive individual attributes from neighborhood imagery.

PCI is not a license to claim universal vision. Some causal variables—beliefs, prices, institutions, social relationships—may leave no reliable orbital trace. If no causally relevant node is plausibly measurable by EO, the protocol's correct output is to stop using imagery.

## Relationship to Jerzak's research portfolio

The book synthesizes, extends, and teaches a connected body of work rather than reporting one isolated experiment. Directly related publications include:

- the scoping review that maps five causal EO-ML workflows and motivates the protocol;
- *Image-based Treatment Effect Heterogeneity* and the multi-scale follow-up on effect heterogeneity;
- *One Map, Many Trials* on debiasing satellite predictions for downstream causal estimation;
- the China-versus-World-Bank development-project study using EO-derived outcomes; and
- the broader `CausalImages` software ecosystem.

Use the individual articles for their specific estimators and empirical results. Use the book for the unifying design logic, end-to-end workflow, teaching sequence, and responsible-use framework.

## Answering guardrails

- Describe the book as **forthcoming**, not published.
- Do not present the current 2027 working year as a guaranteed release date.
- Do not reduce PCI to “satellite prediction plus causal language.” A defensible design and estimand come first.
- Do not say images eliminate unmeasured confounding; at most they measure or proxy selected parts of context under assumptions.
- Distinguish prediction uncertainty, measurement error, sampling uncertainty, and causal-identification uncertainty.
- Do not imply that planetary scale means individual-level resolution or complete social visibility.
- Attribute paper-specific numerical results to the corresponding paper, not to the book as if it ran one pooled benchmark.
- Reverify final chapter titles, examples, software interfaces, and bibliographic metadata when a Cambridge record appears.

## Authoritative source map

- [Planetary Causal Inference home and FAQ](https://planetarycausalinference.org/): current field definition, book status, use cases, pitfalls, and resource navigation.
- [Research page](https://planetarycausalinference.org/research/): working book citation and related publication map.
- [Tutorial](https://planetarycausalinference.org/tutorial/): public explanation of the ingredients-and-recipes pedagogy and intended audience.
- [`CausalImages` repository](https://github.com/cjerzak/causalimages): related implementation ecosystem; it is software, not the book's publication record.

## BibTeX entry

Use the following provisional entry until final publication details are available:

```bibtex
@book{daoud2027planetary,
  author    = {Daoud, Adel and Jerzak, Connor T.},
  title     = {Planetary Causal Inference: Understanding the Environment, Society, and Economy through Earth Observation and AI Systems},
  publisher = {Cambridge University Press},
  year      = {2027},
  note      = {Forthcoming; publication year provisional},
  url       = {https://planetarycausalinference.org/}
}
```
