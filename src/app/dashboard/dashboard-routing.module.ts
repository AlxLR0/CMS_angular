import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { PeriodosComponent } from './pages/periodos/periodos.component';
import { PermisosComponent } from './pages/permisos/permisos.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: DashboardHomeComponent
      },
      {
        path: 'alumnos',
        component: AlumnosComponent
      },
      {
        path: 'cursos',
        component: CursosComponent
      },
      {
        path: 'pagos',
        component: PagosComponent
      },
      {
        path: 'periodos',
        component: PeriodosComponent
      },
      {
        path: 'permisos',
        component: PermisosComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
