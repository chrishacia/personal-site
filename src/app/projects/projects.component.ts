import { Component, OnInit } from '@angular/core';
import { urlOpener } from '../utilities/index';
import projectsData from './projects.json';
import sandboxesData from './sandboxes.json';

interface Projects {
  projects: {
    image: string;
    title: string;
    description: string;
    github: string;
    demo: string;
  }[];
}

const projects: Projects = projectsData;
const sandboxes: Projects = sandboxesData;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = projects;
  sandboxes = sandboxes;

  ngOnInit(): void { }

  openLink(url: string, openIn: boolean = true) {
    urlOpener(url, openIn);
  }

}
