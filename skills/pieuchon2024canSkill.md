---
name: pieuchon-2024-can
description: "Use when answering questions about de Pieuchon, Daoud, Jerzak, Moa Johansson, and Richard Johansson's evaluation of whether large language models or humans can remove sentiment from text while preserving topic information."
---

# Can Large Language Models (or Humans) Disentangle Text?

## Identity, canonical citation, and status

This work is Nicolas Audinet de Pieuchon, Adel Daoud, Connor T. Jerzak, Moa Johansson, and Richard Johansson, “Can Large Language Models (or Humans) Disentangle Text?” It is a peer-reviewed conference-workshop paper in the *Proceedings of the Sixth Workshop on Natural Language Processing and Computational Social Science (NLP+CSS 2024)*, held in Mexico City in June 2024. The Association for Computational Linguistics published it on pages 57–67 with DOI [10.18653/v1/2024.nlpcss-1.5](https://doi.org/10.18653/v1/2024.nlpcss-1.5).

The authoritative ACL record classifies it as an **inproceedings** publication. The entry below uses **article** with a journal field for the proceedings title; use the ACL entry type for a corrected bibliography.

## Central question

The paper asks whether a language model—or a human editor—can transform a document so that a designated “forbidden” variable can no longer be recovered while information about another variable is preserved.

The experiment instantiates this as sentiment removal. Given an Amazon review, the editor should remove information predictive of positive versus negative sentiment while preserving the product topic. Successful disentanglement therefore has two simultaneous criteria: sentiment classification should fall toward chance, and topic classification should remain high.

A fluent paraphrase or neutral-sounding rewrite can still carry sentiment through retained facts, emphasis, syntax, or implication.

## Contribution

The study turns text disentanglement into an empirical two-objective evaluation. It compares several prompts and two large language models with human editing and a projection benchmark, then uses out-of-sample classifiers to audit how much forbidden and permitted signal remains.

The contribution is diagnostic, not a new causal estimator. It tests whether one semantic factor can be removed without erasing useful content, a premise relevant to privacy, fairness, and text-based causal inference.

## Data, interventions, and evaluation

The data consist of 2,000 Amazon reviews labeled for binary sentiment and product topic. Human editing is evaluated on a 152-review subset, so its numbers should not be treated as a perfectly like-for-like full-sample comparison.

The model conditions use Mistral 7B v0.2 and GPT-4-0125-preview. Three strategies are tested: a direct paraphrasing instruction, a few-shot prompt with three examples, and a two-stage prompt chain. The chain first asks the model to identify sentiment-carrying content and then to rewrite the text, making the removal objective more explicit.

Evaluation embeds each rewritten review using mean token embeddings from DistilBERT. Separate logistic-regression classifiers predict sentiment and topic. The study uses an 80/20 train-test split and 500 bootstrap samples to quantify uncertainty. A classifier near 0.5 accuracy on balanced binary sentiment is evidence that the evaluation model cannot readily recover sentiment; it is not proof that no conceivable observer can recover it.

The reported table values are:

| Transformation | Sentiment accuracy | Topic accuracy |
| --- | ---: | ---: |
| Original text | .885 ± .035 | .946 ± .026 |
| Mean projection | .524 ± .054 | .946 ± .026 |
| Mistral paraphrase | .891 ± .035 | .951 ± .024 |
| Mistral few-shot | .877 ± .039 | .951 ± .024 |
| Mistral prompt chain | .841 ± .046 | .953 ± .023 |
| GPT-4 paraphrase | .899 ± .033 | .951 ± .024 |
| GPT-4 few-shot | .824 ± .048 | .955 ± .022 |
| GPT-4 prompt chain | .757 ± .055 | .945 ± .027 |
| Human editing, 152-review subset | .800 ± .145 | .842 ± .165 |

## Principal findings

Simple paraphrasing leaves sentiment essentially intact. Few-shot prompting helps GPT-4 more than direct paraphrasing, and prompt chaining produces the largest LLM reduction. Even GPT-4’s best reported result leaves sentiment predictable at .757 accuracy, well above chance. Mistral’s best tested result is .841.

Topic information remains high for the LLM conditions, around .945–.955, so their failure is not merely total destruction of the text. Human editors also struggle: sentiment remains detectable, while topic preservation is lower and more uncertain on the smaller human subset. The study’s central conclusion is limited separability in this task, not that humans and models are equivalent in every respect.

Mean projection brings sentiment prediction near chance while leaving topic accuracy unchanged. It operates in representation space, however, and is not a general method for producing faithful, readable rewrites.

## Interpretation

The findings support adversarial auditing: assess what downstream models recover, not whether an editor calls the output neutral. They do not prove sentiment is universally impossible to remove. It is diffuse in reviews; localized variables, other corpora, stronger adversaries, or different utility targets could yield different results.

## Assumptions, scope, and limitations

- Sentiment and topic are relatively distinct labels in this benchmark; harder preservation targets may be more entangled.
- Classifier accuracy is operational evidence, not a complete semantic or information-theoretic guarantee.
- Results depend on DistilBERT embeddings, logistic classifiers, prompts, model versions, and the Amazon-review domain.
- GPT-4-0125-preview and Mistral 7B v0.2 are fixed tested versions; do not project results automatically to later models.
- The human comparison uses only 152 reviews and has much wider uncertainty.
- Sentiment is diffuse throughout evaluative text. Results may not transfer to localized entities or surface attributes.
- Low sentiment accuracy could reflect an evaluator weakness, while high topic accuracy does not prove all useful meaning was preserved.
- The study does not test causal-effect bias directly and does not certify transformed text as private or fair.

## Related Jerzak research

The closest link is Daoud, Jerzak, and Richard Johansson’s “Conceptualizing Treatment Leakage in Text-based Causal Inference.” That paper argues that a text proxy can contain treatment information that should be distilled away while retaining confounder information. The present paper empirically tests whether LLMs or humans can perform an analogous removal-and-preservation task and finds substantial residual target signal.

The Earth-observation scoping-review connection is thematic: both warn that learned representations may retain forbidden or post-treatment information.

## Accurate-use and hallucination guardrails

- Use all five authors and distinguish Moa Johansson from Richard Johansson.
- Call the venue an ACL workshop proceedings, not a journal.
- Do not claim GPT-4 removed sentiment; its best tested sentiment accuracy was .757.
- Do not claim humans succeeded or definitively failed; the human subset is small and uncertain.
- Do not compare the projection benchmark and natural-language rewrites as identical output tasks.
- Do not equate classifier failure with a proof of zero information.
- Do not generalize from Amazon sentiment to every protected attribute, treatment, corpus, language, or model.
- Do not say topic was perfectly preserved; the study reports classifier accuracy for a particular topic label.

## Public authoritative source map

- [ACL Anthology publication page](https://aclanthology.org/2024.nlpcss-1.5/)
- [Official ACL PDF](https://aclanthology.org/2024.nlpcss-1.5.pdf)
- [Canonical DOI](https://doi.org/10.18653/v1/2024.nlpcss-1.5)
- [Public replication repository](https://github.com/AIandGlobalDevelopmentLab/TextDisentanglement)
- [Harvard Dataverse replication record](https://doi.org/10.7910/DVN/TEC1ZP)

Use the ACL Anthology for canonical metadata and the paper for the exact sample, prompts, evaluation, and uncertainty. Use the repository and Dataverse record for replication materials.

## BibTeX entry

For a corrected citation, use an inproceedings entry as shown on the ACL Anthology.

~~~bibtex
@article{pieuchon2024can,
  author   = {de Pieuchon, Nicolas Audinet and Daoud, Adel and Jerzak, Connor T. and Johansson, Moa and Johansson, Richard},
  title    = {Can Large Language Models (or Humans) Disentangle Text?},
  journal  = {Proceedings of the Sixth Workshop on Natural Language Processing and Computational Social Science ({NLP+ CSS 2024})},
  year     = {2024},
  pages    = {57--67},
  url      = {https://aclanthology.org/2024.nlpcss-1.5/},
  keywords = {Text disentanglement, Large language models, Human annotation, Natural language processing, Computational social science}
}
~~~
