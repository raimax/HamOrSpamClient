import { Component } from '@angular/core';
import { ClassificationService } from './_services/classification.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ClassificationResponse } from './_models/ClassificationResponse';
import { Classification } from './_enums/Classification';
import { Model } from './_models/Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  classification: ClassificationResponse | null = null;
  classificationRequestForm = this.fb.group({
    content: ['', Validators.required],
  });
  isLoading: boolean = false;
  columnsToDisplay = ['word', 'count', 'hamProbability', 'spamProbability'];
  model: Model | null = null;

  constructor(
    private classificationService: ClassificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getModel();
  }

  classify() {
    const content = this.classificationRequestForm.get('content')?.value;

    if (!content) {
      console.log('Cannot classify: content is not set');
      return;
    }

    this.isLoading = true;

    this.classificationService.classify({ content: content }).subscribe({
      next: (response) => {
        this.classification = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }

  isHam() {
    return this.classification?.classification === Classification.Ham
      ? true
      : false;
  }

  getModel() {
    this.classificationService.getModel().subscribe({
      next: (response) => {
        this.model = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
}
