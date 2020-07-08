import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StepBaseComponent } from '../step-base.component';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css'],
})
export class PropertyTypeComponent extends StepBaseComponent {
  constructor(private readonly router: Router) {
    super();
  }

  public previous() {
    this.router.navigate(['/wizard', 'location']);
  }

  public close() {
    confirm('close wizard');
  }

  public dismiss() {
    confirm('dismiss wizard');
  }
}
