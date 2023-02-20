import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassificationRequest } from '../_models/ClassificationRequest';

@Injectable({
  providedIn: 'root',
})
export class ClassificationService {
  constructor(private http: HttpClient) {}

  classify(request: ClassificationRequest) {}

  getDataset() {}
}
