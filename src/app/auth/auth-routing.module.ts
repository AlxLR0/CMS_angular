import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegistrerComponent } from './pages/registrer/registrer.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: "login",
        component: LoginComponent
        
      },
      {
        path: "signup",
        component: RegistrerComponent
        
      },
      {
        path: "recovery",
        component: RecoveryComponent
        
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
