import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { urlOpener } from '../../utilities/index';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  headerString: string = 'Frontend Developer';
  headerStringArray: string[] = ['Father', 'Gamer', 'Amateur Photographer', 'Software Engineer'];
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faYoutube = faYoutube
  faDiscord = faDiscord;
  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
    this.stringTimer();
  }

  stringTimer() {
    interval(3000).subscribe(() => {
      this.headerString = this.headerStringArray[Math.floor(Math.random() * this.headerStringArray.length)];
    });
  }
  openLink(url: string, openIn: boolean = true) {
    urlOpener(url, openIn);
  }
}
