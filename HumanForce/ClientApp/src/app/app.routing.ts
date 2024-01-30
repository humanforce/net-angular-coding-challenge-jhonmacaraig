import { RouterModule, Routes } from "@angular/router";
import { PageLayoutComponent } from "./template-shared/page-layout-template/page-layout-component";


const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app',
    component: PageLayoutComponent,
    data: { title: 'Human Force' },
    children: [
      {
        path: '',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: '',
        loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
      }
    ]
  },
  /*{ path: '**', component: NotFoundComponent },*/
]

const handledRoutes: Routes = [];
routes.forEach((route) => {
  const handledRoute = {
    path: route.path.toLowerCase(),
    component: route.component,
    canActivate: route.canActivate,
    data: route.data,
    redirectTo: route.redirectTo,
    pathMatch: route.pathMatch
  };
  handledRoutes.push(handledRoute);
  handledRoutes.push(route);
});

export const AppRoutingModule = RouterModule.forRoot(handledRoutes, { enableTracing: false });
