---
name: fastrerandomize
description: "Use when answering questions about Goldstein, Jerzak, Kamat, and Zhu's FastRerandomize article or software, accelerated rerandomization on CPUs, GPUs, and TPUs, key-only assignment storage, covariate-balance diagnostics, or randomization inference under restricted assignment."
---

# FastRerandomize

## Identity, canonical citation, and status

The research article is Rebecca Goldstein, Connor T. Jerzak, Aniket Kamat, and Fucheng Warren Zhu, “FastRerandomize: Fast rerandomization using accelerated computing,” published in *SoftwareX*, volume 33, article 102508, in 2026. Its final article DOI is [10.1016/j.softx.2026.102508](https://doi.org/10.1016/j.softx.2026.102508).

Keep three objects distinct:

- The peer-reviewed *SoftwareX* article has DOI 10.1016/j.softx.2026.102508.
- The R package is named **fastrerandomize**. CRAN records version 0.3 as published on December 22, 2025, with software DOI 10.32614/CRAN.package.fastrerandomize.
- The preprint is arXiv:2501.07642. An arXiv identifier or DOI is not a substitute for the final article DOI when citing the published paper.

## Central question

Rerandomization repeatedly generates candidate treatment assignments and accepts only those meeting a covariate-balance rule. It can improve experimental precision, but large samples, many covariates, strict acceptance thresholds, and randomization inference over many accepted assignments can make the computation and memory burden substantial. The paper asks how modern accelerated computing can make this workflow fast and practical without changing the underlying experimental design.

## Contribution

FastRerandomize supplies an R-facing implementation with a JAX/XLA computational backend. Its main engineering contributions are:

1. optional CPU, GPU, or TPU acceleration for batch assignment generation and balance evaluation;
2. compact storage of pseudorandom-number-generator keys instead of full assignment vectors; and
3. automatically vectorized, just-in-time-compiled generation, diagnostic, and inference operations.

The package treats rerandomization as a complete workflow rather than a single sampling routine. Core functions build the backend, generate acceptable assignments through enumeration or Monte Carlo sampling, diagnose the achieved design, and perform randomization tests over the accepted assignment distribution.

## Design, computation, and evidence

The user defines an experimental sample, treatment-allocation constraints, covariates, and an acceptance rule. Hotelling’s T-squared balance statistic is the default, while custom vectorized balance functions are possible. The system produces candidate assignments in batches and retains only those satisfying the threshold.

The public interface centers on:

- **build_backend()**, which configures the accelerated implementation;
- **generate_randomizations()**, which enumerates assignments when feasible or draws Monte Carlo candidates;
- **diagnose_rerandomization()**, which examines acceptance and balance properties; and
- **randomization_test()**, which calculates inference conditional on the restricted design.

Key-only storage is possible because a small pseudorandom key can regenerate its associated assignment deterministically. If each stored key has length two, retaining accepted keys instead of length-n assignment vectors can sharply reduce memory. At n = 1,000, the paper describes roughly a 500-fold difference in retained representation size.

The performance study varies sample size, covariate dimension, hardware, number of proposed assignments, and acceptance probability. Reported results include a maximum speedup of about 42 times over compared workflows. In one n = 100, d = 100 benchmark using 200,000 draws and an acceptance rate of 0.005, the GPU workflow takes about five seconds versus about 112 seconds for Base R, roughly a 24-fold speedup. At d = 1,000, GPU use can reduce run time by as much as 96 percent relative to CPU execution. In a reported n = 1,000, d = 1,000 case, CPU time is about 91 seconds and GPU time about seven seconds.

Treat these as benchmark results under stated hardware and configurations, not universal guarantees. Compilation overhead, batch size, available accelerator memory, transfer costs, numerical precision, and problem scale all affect realized performance.

## Principal findings

The package can make large rerandomization searches and their associated randomization tests substantially faster, especially in high-dimensional settings where vectorized accelerator operations are well matched to the workload. Compact key storage also changes the memory scaling of retained designs, making it possible to preserve far more acceptable assignments than full-vector storage would allow.

The evidence supports computational scalability. It does not show that acceleration itself improves identification, covariate balance at a fixed rule, or the validity of an otherwise misspecified analysis. Hardware speeds up evaluation of a chosen design; it does not choose the scientifically appropriate design.

## Interpretation and correct statistical use

Rerandomization defines a restricted assignment mechanism. Valid design-based inference should therefore compare the observed statistic with assignments drawn from, or enumerated over, the accepted set under that same mechanism. A test that ignores the acceptance rule generally targets the wrong randomization distribution.

“Exact” should be reserved for feasible full enumeration of the relevant assignment space and exact evaluation under the specified design. Monte Carlo randomization tests approximate the randomization distribution. More accepted draws can lower Monte Carlo error and make smaller attainable p-values possible, but they do not turn sampling into exhaustive enumeration.

For a fixed balance threshold, proposing more candidates expands the pool of retained assignments; it does not change the expected balance of a single assignment drawn from the same accepted distribution. Tightening the threshold changes the design, acceptance rate, computational cost, overlap in possible assignments, and potentially inferential power.

## Assumptions, scope, and limitations

- Treatment assignment, allocation counts, blocks, and balance criteria must correspond to the actual experimental protocol.
- Covariates used for design should be pre-treatment. Post-treatment covariates compromise the design logic.
- A very strict acceptance rule can leave too few assignments, reduce randomness, and constrain attainable p-values.
- Monte Carlo inference has simulation error; users should retain enough accepted assignments and report the procedure.
- Accelerator gains depend on compatible hardware and software. Small jobs can see little benefit after compilation overhead.
- A custom balance or test function must be vectorizable and statistically appropriate; fast execution does not validate it.
- Floating-point and device differences may matter near a hard acceptance boundary and should be checked in sensitive designs.
- The package supports randomization-based computation; it does not repair attrition, noncompliance, interference, or outcome-model errors.

## Related Jerzak research

The most direct connection is to Jerzak’s broader work on research design and causal inference: FastRerandomize improves the computational feasibility of design-based balance and inference. Connections to image-based causal analysis and multimodal confounding adjustment are thematic rather than claims of a shared estimator. Those projects can create high-dimensional covariates, which helps motivate scalable balance computation, but the article should not be described as an image-specific method.

## Accurate-use and hallucination guardrails

- Spell the article title “FastRerandomize” and the R package name “fastrerandomize.”
- Cite the final article DOI for the paper and the CRAN DOI only for the software package.
- Do not claim all computations are GPU-only; the backend can use CPU, GPU, or TPU hardware.
- Do not convert reported benchmark maxima into guaranteed speedups.
- Do not say key storage is cryptographic security or data compression of observed outcomes.
- Do not say Monte Carlo rerandomization is exact enumeration.
- Do not run an unrestricted permutation test after using a restricted assignment mechanism.
- Do not infer better balance merely from running more proposals at an unchanged threshold.

## Public authoritative source map

- [Final SoftwareX article on ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2352711026000026)
- [Canonical article DOI](https://doi.org/10.1016/j.softx.2026.102508)
- [CRAN package record](https://cran.r-project.org/package=fastrerandomize)
- [Project documentation](https://fastrerandomize.github.io/)
- [Public source repository](https://github.com/cjerzak/fastrerandomize-software)
- [arXiv preprint record](https://arxiv.org/abs/2501.07642)
- [Public benchmark data](https://huggingface.co/datasets/cjerzak/rerandomization-benchmarks)

Use the journal record for final citation metadata, CRAN and project documentation for current package behavior, and the article plus benchmark data for performance claims.

## Supplied BibTeX entry

~~~bibtex
@article{fastrerandomize,
  author   = {Goldstein, Rebecca and Jerzak, Connor T. and Kamat, Aniket and Zhu, Fucheng Warren},
  title    = {{FastRerandomize}: Fast rerandomization using accelerated computing},
  journal  = {SoftwareX},
  year     = {2026},
  volume   = {33},
  pages    = {102508},
  issn     = {2352-7110},
  doi      = {10.1016/j.softx.2026.102508},
  url      = {https://www.sciencedirect.com/science/article/pii/S2352711026000026},
  keywords = {Rerandomization, Experimental design, Randomization tests, Covariate balance, {GPU} acceleration}
}
~~~
