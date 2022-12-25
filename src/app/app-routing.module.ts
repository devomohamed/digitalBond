import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './pages/job/job.component';
import { HomeComponent } from './pages/home/home.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'job',component:JobComponent},
  {path:'thanks',component:ThanksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
