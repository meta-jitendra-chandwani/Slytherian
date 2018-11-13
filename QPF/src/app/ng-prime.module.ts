import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  exports: [
    CommonModule,
    AccordionModule,
    BrowserAnimationsModule,
    TabViewModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    TableModule,
    RadioButtonModule
  ],
  declarations: []
})
export class NgPrimeModule { }
