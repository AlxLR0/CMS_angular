import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { HomeComponent } from './pages/home/home.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { PeriodosComponent } from './pages/periodos/periodos.component';
import { PermisosComponent } from './pages/permisos/permisos.component';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
   
    DashboardHomeComponent,
        AlumnosComponent,
        DashboardLayoutComponent,
        CursosComponent,
        PagosComponent,
        PeriodosComponent,
        PermisosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
    // RouterModule.forRoot([
    //   {path: 'alumnos', component: AlumnosComponent},
    //   // {path: 'heroes-list', component: HeroesListComponent},
    // ]),
  ]
})
export class DashboardModule { }
