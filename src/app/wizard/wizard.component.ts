import { Component, OnInit } from '@angular/core';
import { StepBaseComponent } from './steps/step-base.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent implements OnInit {
  public stepComponent: StepBaseComponent;

  constructor() {}

  ngOnInit() {}

  onActivate(componentRef: StepBaseComponent) {
    this.stepComponent = componentRef;
  }
}
