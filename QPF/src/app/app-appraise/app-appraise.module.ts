import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent } from '../performance-tab-view/achievements/achievements.component';
import { AdditionalEffortsComponent } from '../performance-tab-view/additional-efforts/additional-efforts.component';
import { AppraiseDashboardComponent } from '../appraise-dashboard/appraise-dashboard.component';
import { RetrospectiveNotesComponent } from '../performance-tab-view/retrospective-notes/retrospective-notes.component';
import { SelfDevelopmentComponent } from '../performance-tab-view/self-development/self-development.component';
import { OrganizationDevelopmentComponent } from '../performance-tab-view/organization-development/organization-development.component';
import { PerformanceTabViewComponent } from '../performance-tab-view/performance-tab-view.component';
import { ReviewSummaryComponent } from '../summary-tab-view/review-summary/review-summary.component';
import { SummaryComponent } from '../summary-tab-view/summary/summary.component';
import { SummaryTabViewComponent } from '../summary-tab-view/summary-tab-view.component';
import { SummaryAchievementComponent } from '../summary-tab-view/summary/summary-achievement/summary-achievement.component';
import { SummarySelfDevelopmentComponent } from '../summary-tab-view/summary/summary-self-development/summary-self-development.component';
import { SummarySkillDevelopmentComponent } from '../summary-tab-view/summary/summary-skill-development/summary-skill-development.component';
import { SummaryRecruitmentComponent } from '../summary-tab-view/summary/summary-recruitment/summary-recruitment.component';
import { SummaryOrganizationBrandBuildingComponent } from '../summary-tab-view/summary/summary-organization-brand-building/summary-organization-brand-building.component';
import { SummaryOrganizationEventComponent } from '../summary-tab-view/summary/summary-organization-event/summary-organization-event.component';
import { SummaryAdditionalEffortsComponent } from '../summary-tab-view/summary/summary-additional-efforts/summary-additional-efforts.component';
import { SummaryAccomplishmentComponent } from '../summary-tab-view/summary/summary-accomplishment/summary-accomplishment.component';
import { SummaryImprovementComponent } from '../summary-tab-view/summary/summary-improvement/summary-improvement.component';
import { SkillDevelopmentComponent } from '../performance-tab-view/organization-development/skill-development/skill-development.component';
import { RecruitmentContributionComponent } from '../performance-tab-view/organization-development/recruitment-contribution/recruitment-contribution.component';
import { OrganizationBrandBuildingComponent } from '../performance-tab-view/organization-development/organization-brand-building/organization-brand-building.component';
import { OrganizationEventsComponent } from '../performance-tab-view/organization-development/organization-events/organization-events.component';
import { RetrospectiveNotesChildOneComponent } from '../performance-tab-view/retrospective-notes/retrospective-notes-child-one/retrospective-notes-child-one.component';
import { RetrospectiveNotesChildTwoComponent } from '../performance-tab-view/retrospective-notes/retrospective-notes-child-two/retrospective-notes-child-two.component';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations:[
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
  ]
})
export class AppAppraiseModule { }
