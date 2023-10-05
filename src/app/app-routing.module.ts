import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserComponent } from './component/user/user.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { CustomersComponent } from './component/customers/customers.component';
import { CustomersDetailComponent } from './component/customers-detail/customers-detail.component';
import { NoticeComponent } from './component/notice/notice.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent  },
  { path: '', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'user', component: UserComponent  },
  { path: 'user/:id', component: UserDetailComponent  },
  { path: 'customers', component: CustomersComponent  },
  { path: 'customers/:id', component: CustomersDetailComponent  },
  { path: 'notice', component: NoticeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
