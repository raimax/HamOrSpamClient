import { Classification } from '../_enums/Classification';
import { DataPoint } from './DataPoint';

export interface ClassificationResponse {
  classification: Classification;
  probabilityForHam: number;
  probabilityForSpam: number;
  dataPoints: DataPoint[];
}
