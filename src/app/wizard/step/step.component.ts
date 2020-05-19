import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { NextDirective } from '../next.directive';
import { PreviousDirective } from '../previous.directive';
import { DismissDirective } from '../dismiss.directive';
import { CloseDirective } from '../close.directive';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
})
export class StepComponent implements OnInit {
  @ContentChild(NextDirective, { read: TemplateRef, static: false })
  nextTemplateOutlet;
  @ContentChild(PreviousDirective, { read: TemplateRef, static: false })
  previousTemplateOutlet;
  @ContentChild(DismissDirective, { read: TemplateRef, static: false })
  dismissTemplateOutlet;
  @ContentChild(CloseDirective, { read: TemplateRef, static: false })
  closeTemplateOutlet;

  constructor() {}

  ngOnInit() {}
}
