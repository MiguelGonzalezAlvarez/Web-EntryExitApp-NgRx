import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { dashboardRoutes } from "./dashboard/dashboard.routes";

const routes = [
    { path: '', component: DashboardComponent, children: dashboardRoutes },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }