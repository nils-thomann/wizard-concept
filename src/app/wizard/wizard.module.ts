import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { NextDirective } from './next.directive';
import { PreviousDirective } from './previous.directive';
import { DismissDirective } from './dismiss.directive';
import { CloseDirective } from './close.directive';
import { StepComponent } from './step/step.component';

const COMPONENTS = [
  WizardComponent,
  NextDirective,
  PreviousDirective,
  DismissDirective,
  CloseDirective,
  StepComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class WizardModule {}
