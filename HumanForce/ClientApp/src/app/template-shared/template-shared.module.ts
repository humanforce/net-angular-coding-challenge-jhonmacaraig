import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PageLayoutComponent } from "./page-layout-template/page-layout-component";
import { SharedModule } from "../../../Framework/shared.module";



@NgModule({
  declarations: [
    PageLayoutComponent,
    
  ],
  imports: [
    RouterModule,
    SharedModule,

  ]
})
export class TemplateSharedModule { }
