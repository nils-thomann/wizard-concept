import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CloseDirective } from './close.directive';
import { ContentDirective } from './content.directive';
import { DismissDirective } from './dismiss.directive';
import { NextDirective } from './next.directive';
import { PreviousDirective } from './previous.directive';
import { LocationComponent } from './steps/location/location.component';
import { PropertyTypeComponent } from './steps/property-type/property-type.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { WizardWrapperComponent } from './wizard-wrapper/wizard-wrapper.component';
import { WizardComponent } from './wizard.component';

const COMPONENTS = [
  WizardComponent,
  NextDirective,
  PreviousDirective,
  DismissDirective,
  CloseDirective,
  ContentDirective,
  LocationComponent,
  WizardWrapperComponent,
  PropertyTypeComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, WizardRoutingModule],
  exports: [...COMPONENTS],
})
export class WizardModule {}
