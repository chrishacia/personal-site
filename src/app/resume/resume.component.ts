import { Component } from '@angular/core';
import resumeData from './resume.json';

interface Resume {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  skills: string[];
  experience: {
    company: string;
    position: string;
    duration: string;
    location?: string;
    description?: string;
  }[];
}

const resume: Resume = resumeData;


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resume = resume;
}
