import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './steps/location/location.component';
import { PropertyTypeComponent } from './steps/property-type/property-type.component';
import { WizardComponent } from './wizard.component';

const routes: Routes = [
  {
    path: '',
    component: WizardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'location',
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path: 'property-type',
        component: PropertyTypeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
