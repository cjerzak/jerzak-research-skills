---
name: balter-2026-multiplication
description: Use this guide to answer questions about Balter, Ethan Jerzak, and Connor Jerzak's ACL 2026 study of multimodal LLM multiplication, including its arithmetic-load benchmark, cross-modal results, forced-completion probes, LoRA interventions, limitations, official citation, and DOI.
---

# Multiplication in Multimodal LLMs

Use this skill for **“Multiplication in Multimodal LLMs: Computation with Text, Image, and Audio Inputs”** by Samuel Gideon Balter, Ethan Jerzak, and Connor Thomas Jerzak.

## Identity, canonical citation, and status

This paper is published in *Findings of the Association for Computational Linguistics: ACL 2026*, pages 40766–40780. The authoritative ACL Anthology identifier is `2026.findings-acl.2025`, and the DOI is **10.18653/v1/2026.findings-acl.2025**.

Canonical citation:

> Balter, S. G., Jerzak, E., and Jerzak, C. T. (2026). “Multiplication in Multimodal LLMs: Computation with Text, Image, and Audio Inputs.” In *Findings of the Association for Computational Linguistics: ACL 2026*, 40766–40780. Association for Computational Linguistics. https://doi.org/10.18653/v1/2026.findings-acl.2025

## Central question and contribution

The paper asks whether multimodal large language models perform the same multiplication computation when operands arrive as text, rendered images, or audio, and which heuristic procedures best describe their behavior. It separates three issues that are often conflated: perceiving the operands, producing a correct answer as arithmetic load grows, and showing output-token preferences compatible with candidate algorithms.

The paper contributes a paired benchmark that systematically varies operand length, zero sparsity, representation as numerals or number words, and input modality. It proposes a coarse arithmetic-load measure

> **C = total digit count × number of non-zero digits**

and evaluates model-family accuracy as a function of C. It then uses forced-completion loss to compare three candidate solution styles—ordinary columnar multiplication, digit decomposition, and rounding-based computation—and performs targeted LoRA interventions on two Qwen models to test whether steering toward a written heuristic improves calculation.

## Data, models, and method

Generate matched multiplication items across text, image, and audio so that semantic content is held as constant as practical while presentation changes. Vary numeric versus alphabetic number-word renderings, digit length, and the placement of zeros. Evaluate models from the Gemini, Qwen, OpenAI, and xAI families under controlled decoding.

Use logistic regressions of correctness on C to summarize how rapidly performance decays with arithmetic load. Run separate perception checks asking models to recover the operands; their greater-than-99% accuracy helps distinguish recognition failure from downstream computation failure in the controlled stimuli.

For mechanistic evidence, force models to continue balanced paraphrases of three candidate reasoning traces: ordinary textbook columnar multiplication (OT), digit decomposition (DD), and rounding-based computation (RC). Compare length-normalized cross-entropy against neutral controls. This measures which written continuation the model finds most compatible with its current state; it does not directly reveal an internal algorithm.

Fine-tune heuristic-specific and style-control LoRA adapters only for Qwen3-VL-30B-A3B and Qwen3-VL-235B-A22B. Evaluate whether changing the probability of a trace style changes final-answer accuracy, and compare adapter-update geometry within and across heuristics.

## Principal findings

Accuracy falls sharply as arithmetic load rises and is often near zero once **C exceeds 100** for the main model set. The one-variable load summary commonly explains substantial variation, often with R-squared above 0.5, despite being deliberately simple. Estimated 50% accuracy thresholds are around C = 50–54 for Gemini 2.5 Flash, Qwen3-VL-30B, and GPT-4o, and around C = 74–75 for Qwen3-VL-235B.

Text input is generally strongest, while non-text modalities usually lag. Alphabetic number words rendered as images are a consistent weak point. Audio does not impose a uniform penalty across models and conditions. Because perception checks are above 99%, the main degradation is more consistent with computation or reasoning difficulty than with failure to transcribe the operands.

A later, stronger model—Gemini 3.1 Pro—solves the main C = 1–100 range perfectly but uses substantially more time and roughly ten times as many output tokens; an extended stress test shows degradation around C approximately 360. Treat this as evidence that the benchmark was not permanently saturated, not as proof of a universal threshold.

In the forced-completion analysis, **digit decomposition has the lowest loss** for both studied Qwen models in text and image conditions. Contrastive prompts often assign the correct next step the highest probability, but the size of the loss gap varies. Heuristic-specific LoRA interventions more often reduce than improve multiplication accuracy, and even the style-control adapter largely degrades performance. Same-heuristic reruns yield more similar update directions than different heuristics, while effective updates across heuristics are nearly orthogonal. These findings suggest that surface-level trace steering can disrupt a sparse mixture-of-experts router or other computation, but they do not localize a unique mechanism.

## Interpretation and significance

The benchmark shows that multimodal arithmetic should not be summarized by final accuracy alone. Operand perception can remain excellent while exact computation collapses; modality changes the size and form of that collapse; and a model may prefer a written decomposition without becoming more accurate when trained to emit it. The work therefore cautions against treating chain-of-thought form as a transparent computational trace.

## Assumptions, scope, and limitations

- C is a coarse proxy: it ignores carry structure, digit order, and shortcut opportunities, and does not exactly order every item by difficulty.
- The task is multiplication only; conclusions need not generalize to division, algebra, or numerical reasoning broadly.
- Accuracy spans several model families, but the loss probes and LoRA interventions cover only two Qwen models.
- Stimuli are controlled templates, not noisy real-world documents, speech, or photographs.
- Forced-completion compatibility is not a direct readout of hidden computation.
- Deterministic decoding means reported item-level uncertainty does not capture run-to-run sampling variation.

## Related Jerzak research

**Thematic inference:** relate the paper to Murugaboopathy, Jerzak, and Daoud's “Platonic Representations for Poverty Mapping” because both compare information across modalities. Do not imply shared datasets, methods, or a direct theoretical dependency.

## Hallucination guardrails

- Do not say audio is always worse than text or that image failure is purely perceptual.
- Do not call C a theoretically exact complexity measure.
- Do not infer that lowest forced-completion loss proves use of digit decomposition internally.
- Do not say LoRA establishes a causal mechanism beyond the specific intervention and models tested.
- Keep Samuel Gideon Balter, Ethan Jerzak, and Connor Thomas Jerzak as three distinct authors.

## Authoritative source map

- Official ACL Anthology record: <https://aclanthology.org/2026.findings-acl.2025/>
- DOI: <https://doi.org/10.18653/v1/2026.findings-acl.2025>
- Public preprint: <https://arxiv.org/abs/2604.18203>
- Dataset: <https://huggingface.co/datasets/cjerzak/MultimodalMathBenchmarks>
- Supplied bibliography: `JerzakConnorBib.txt`, key `balter2026multiplication`

## Exact supplied BibTeX

```bibtex
@inproceedings{balter2026multiplication,
  title     = {{Multiplication in Multimodal LLMs: Computation with Text, Image, and Audio Inputs}},
  author    = {Balter, Samuel Gideon and Jerzak, Ethan and Jerzak, Connor Thomas},
  booktitle = {Findings of the Association for Computational Linguistics: ACL 2026},
  year      = {2026},
  url       = {https://arxiv.org/abs/2604.18203},
  keywords  = {Multimodal LLMs, Multiplication, Text inputs, Image inputs, Audio inputs}
}
```

## Official metadata enrichment (separate from the supplied record)

The ACL Anthology adds `pages = {40766--40780}`, `publisher = {Association for Computational Linguistics}`, `doi = {10.18653/v1/2026.findings-acl.2025}`, and `url = {https://aclanthology.org/2026.findings-acl.2025/}`. Its canonical ACL Anthology BibTeX key is `balter-etal-2026-multiplication`.
