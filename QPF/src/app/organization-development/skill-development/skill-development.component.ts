import { Component, OnInit } from '@angular/core';
import { SkillService } from './skill.service';
import {Skill} from './skill';

@Component({
  selector: 'app-skill-development',
  templateUrl: './skill-development.component.html',
  styleUrls: ['./skill-development.component.css']
})
export class SkillDevelopmentComponent implements OnInit {
  skillArray=[];
  skills: Skill[];
  skillTableHeader = ["Skill Development", "Time Spent in hrs", "Details", "Actions"];
  constructor(private skillService:SkillService) {
    this.skillArray=[{}];
   }

  ngOnInit() {
    this.getSkillName();
  }
  getSkillName(): any {
    return this.skillService.getSkillName()
      .subscribe((skills) => { this.skills = skills });
  }
 

  addSkillRow()
  {
    this.skillArray.push(null);
  }

}
