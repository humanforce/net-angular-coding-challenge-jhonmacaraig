import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { HFGridComponent } from "./component/hf-grid-component/hf-grid-component";
import { HFPanelInnerComponent } from "./component/hf-panel-inner-component/hf-panel-inner-component";

export class SharedModuleConstants {
  static AngularModules = [CommonModule, FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule];


  static HFPresentationWrappers = [
    HFGridComponent,
    HFPanelInnerComponent
  ]
  static sharedModuleDirective = [
  ]

  static moduleExports = [
    ...SharedModuleConstants.AngularModules,
    ...SharedModuleConstants.HFPresentationWrappers,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    }),
  ];
  static moduleImports = [
    ...SharedModuleConstants.AngularModules,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    }),
  ];
  static moduleProviders = [
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: SMSHttpInterceptor,
    //  multi: true
    //}, {
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: SMSHttpErrorInterceptor,
    //  multi: true
    //}
  ];

  static moduleDeclarations = [
    SharedModuleConstants.HFPresentationWrappers,
  ];
}
@NgModule({
  imports: [
    SharedModuleConstants.moduleImports
  ],
  exports: [SharedModuleConstants.moduleExports, SharedModuleConstants.sharedModuleDirective],
  providers: [SharedModuleConstants.moduleProviders,],
  declarations: [SharedModuleConstants.moduleDeclarations, SharedModuleConstants.sharedModuleDirective],
})
export class SharedModule {
  constructor() {
  }
}
