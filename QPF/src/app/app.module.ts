import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgPrimeModule } from './ng-prime.module';
import { AchievementsComponent } from './achievements/achievements.component';
import { AdditionalEffortsComponent } from './additional-efforts/additional-efforts.component';
import { AppraiseDashboardComponent } from './appraise-dashboard/appraise-dashboard.component';
import { RetrospectiveNotesComponent } from './retrospective-notes/retrospective-notes.component';
import { SelfDevelopmentComponent } from './self-development/self-development.component';
import { OrganizationDevelopmentComponent } from './organization-development/organization-development.component';
import { PerformanceTabViewComponent } from './performance-tab-view/performance-tab-view.component';
import { ReviewSummaryComponent } from './review-summary/review-summary.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryTabViewComponent } from './summary-tab-view/summary-tab-view.component';
import { SummaryAchievementComponent } from './summary/summary-achievement/summary-achievement.component';
import { SummarySelfDevelopmentComponent } from './summary/summary-self-development/summary-self-development.component';
import { SummarySkillDevelopmentComponent } from './summary/summary-skill-development/summary-skill-development.component';
import { SummaryRecruitmentComponent } from './summary/summary-recruitment/summary-recruitment.component';
import { SummaryOrganizationBrandBuildingComponent } from './summary/summary-organization-brand-building/summary-organization-brand-building.component';
import { SummaryOrganizationEventComponent } from './summary/summary-organization-event/summary-organization-event.component';
import { SummaryAdditionalEffortsComponent } from './summary/summary-additional-efforts/summary-additional-efforts.component';
import { SummaryAccomplishmentComponent } from './summary/summary-accomplishment/summary-accomplishment.component';
import { SummaryImprovementComponent } from './summary/summary-improvement/summary-improvement.component';
import { SkillDevelopmentComponent } from './organization-development/skill-development/skill-development.component';
import { RecruitmentContributionComponent } from './organization-development/recruitment-contribution/recruitment-contribution.component';
import { OrganizationBrandBuildingComponent } from './organization-development/organization-brand-building/organization-brand-building.component';
import { OrganizationEventsComponent } from './organization-development/organization-events/organization-events.component';
import { RetrospectiveNotesChildOneComponent } from './retrospective-notes/retrospective-notes-child-one/retrospective-notes-child-one.component';
import { RetrospectiveNotesChildTwoComponent } from './retrospective-notes/retrospective-notes-child-two/retrospective-notes-child-two.component';


@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    AdditionalEffortsComponent,
    AppraiseDashboardComponent,
    RetrospectiveNotesComponent,
    SelfDevelopmentComponent,
    OrganizationDevelopmentComponent,
    PerformanceTabViewComponent,
    ReviewSummaryComponent,
    SummaryComponent,
    SummaryTabViewComponent,
    SummaryAchievementComponent,
    SummarySelfDevelopmentComponent,
    SummarySkillDevelopmentComponent,
    SummaryRecruitmentComponent,
    SummaryOrganizationBrandBuildingComponent,
    SummaryOrganizationEventComponent,
    SummaryAdditionalEffortsComponent,
    SummaryAccomplishmentComponent,
    SummaryImprovementComponent,
    SkillDevelopmentComponent,
    RecruitmentContributionComponent,
    OrganizationBrandBuildingComponent,
    OrganizationEventsComponent,
    RetrospectiveNotesChildOneComponent,
    RetrospectiveNotesChildTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }