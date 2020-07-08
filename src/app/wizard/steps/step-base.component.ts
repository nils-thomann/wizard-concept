import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CloseDirective } from '../close.directive';
import { ContentDirective } from '../content.directive';
import { DismissDirective } from '../dismiss.directive';
import { NextDirective } from '../next.directive';
import { PreviousDirective } from '../previous.directive';

@Component({ selector: 'app-step-base-', template: '' })
export class StepBaseComponent {
  @ViewChild(ContentDirective, { read: TemplateRef, static: false })
  contentTemplateOutlet;
  @ViewChild(NextDirective, { read: TemplateRef, static: false })
  nextTemplateOutlet;
  @ViewChild(PreviousDirective, { read: TemplateRef, static: false })
  previousTemplateOutlet;
  @ViewChild(DismissDirective, { read: TemplateRef, static: false })
  dismissTemplateOutlet;
  @ViewChild(CloseDirective, { read: TemplateRef, static: false })
  closeTemplateOutlet;
}
