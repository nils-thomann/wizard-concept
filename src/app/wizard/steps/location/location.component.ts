import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StepBaseComponent } from '../step-base.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent extends StepBaseComponent {
  public formGroup: FormGroup;

  constructor(private readonly router: Router, readonly fb: FormBuilder) {
    super();

    this.formGroup = fb.group({
      input: ['', [Validators.required]],
    });
  }

  public next() {
    if (this.formGroup.valid) {
      this.router.navigate(['/wizard', 'property-type']);
    }
  }

  public close() {
    confirm('close wizard');
  }

  public dismiss() {
    confirm('dismiss wizard');
  }
}
