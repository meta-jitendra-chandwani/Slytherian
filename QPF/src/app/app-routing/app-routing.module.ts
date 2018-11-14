import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceTabViewComponent } from '../performance-tab-view/performance-tab-view.component';
import { AppraiseDashboardComponent } from '../appraise-dashboard/appraise-dashboard.component';
import { SummaryComponent } from '../summary/summary.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AppraiseDashboardComponent },
    { path: 'performance', component: SummaryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }