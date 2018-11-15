import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceTabViewComponent } from '../performance-tab-view/performance-tab-view.component';
import { AppraiseDashboardComponent } from '../appraise-dashboard/appraise-dashboard.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { SelfDevelopmentComponent } from '../self-development/self-development.component';
import { OrganizationDevelopmentComponent } from '../organization-development/organization-development.component';
import { AdditionalEffortsComponent } from '../additional-efforts/additional-efforts.component';
import { RetrospectiveNotesComponent } from '../retrospective-notes/retrospective-notes.component';
import { SummaryComponent } from '../summary/summary.component';
import { SummaryTabViewComponent } from '../summary-tab-view/summary-tab-view.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AppraiseDashboardComponent },
    { path: 'performance', component: PerformanceTabViewComponent },
    { path: 'achievement', component: AchievementsComponent },
    { path: 'selfDevelopment', component: SelfDevelopmentComponent },
    { path: 'organizationDevelopment', component: OrganizationDevelopmentComponent },
    { path: 'additionalEffort', component: AdditionalEffortsComponent },
    { path: 'retrospectiveNotes', component: RetrospectiveNotesComponent },
    { path: 'summary', component: SummaryTabViewComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }