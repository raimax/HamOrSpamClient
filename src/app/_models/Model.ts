export interface Model {
  id: number;
  hamCount: number;
  spamCount: number;
  priorHamProbability: number;
  priorSpamProbability: number;
  dataPointCount: number;
}
