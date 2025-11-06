import { createToolCallAccuracyScorerCode } from "@mastra/evals/scorers/prebuilt";
import { createCompletenessScorer } from "@mastra/evals/scorers/prebuilt";

export const toolCallAppropriatenessScorer = createToolCallAccuracyScorerCode({
  expectedTool: "weatherTool",
  strictMode: false,
});

export const completenessScorer = createCompletenessScorer();

export const scorers = {
  toolCallAppropriatenessScorer,
  completenessScorer,
};
