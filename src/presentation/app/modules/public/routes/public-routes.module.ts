import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {PUBLIC_ROUTES} from "./public-routes";


@NgModule({
  imports: [
    RouterModule.forChild(PUBLIC_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutesModule {
}
