import { Routes } from '@angular/router';

import { RegistrationComponent } from '../registration/registration.component';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';

export const routes: Routes = [
  { path: 'user',  component: UserComponent },
  { path: 'admin',  component: AdminComponent },
  { path: 'registration',     component: RegistrationComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
];