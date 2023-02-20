import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ClassificationRequest } from '../_models/ClassificationRequest';
import { ClassificationResponse } from '../_models/ClassificationResponse';
import { Model } from '../_models/Model';

@Injectable({
  providedIn: 'root',
})
export class ClassificationService {
  constructor(private http: HttpClient) {}

  classify(request: ClassificationRequest) {
    return this.http.post<ClassificationResponse>(
      environment.apiUrl + 'classification/classify',
      request
    );
  }

  getModel() {
    return this.http.get<Model>(environment.apiUrl + 'classification/model');
  }
}
