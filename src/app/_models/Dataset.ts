export interface Dataset {
  id: number;
  hamCount: number;
  spamCount: number;
  priorHamProbability: number;
  priorSpamProbability: number;
  dataPointCount: number;
}
