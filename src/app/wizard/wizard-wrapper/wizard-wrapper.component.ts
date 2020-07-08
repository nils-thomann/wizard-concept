import { AfterViewInit, Component, Input } from '@angular/core';
import { StepBaseComponent } from '../steps/step-base.component';

@Component({
  selector: 'app-wizard-wrapper',
  templateUrl: './wizard-wrapper.component.html',
  styleUrls: ['./wizard-wrapper.component.css'],
})
export class WizardWrapperComponent implements AfterViewInit {
  @Input()
  stepComponent: StepBaseComponent;

  ngAfterViewInit(): void {}
}
