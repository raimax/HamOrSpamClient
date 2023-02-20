import { Component } from '@angular/core';
import { ClassificationService } from './_services/classification.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ClassificationResponse } from './_models/ClassificationResponse';
import { Classification } from './_enums/Classification';

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

  constructor(
    private classificationService: ClassificationService,
    private fb: FormBuilder
  ) {}

  classify() {
    const content = this.classificationRequestForm.get('content')?.value;

    if (!content) {
      console.log('Cannot classify: content is not set');
      return;
    }

    this.classificationService.classify({ content: content }).subscribe({
      next: (response) => (this.classification = response),
      error: (err) => console.log(err),
    });
  }

  isHam() {
    return this.classification?.classification === Classification.Ham
      ? true
      : false;
  }
}
