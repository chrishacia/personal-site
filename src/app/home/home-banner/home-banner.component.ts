import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { faGithub, faLinkedin, faTwitter, faFacebookSquare, faInstagramSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';

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
  faFacebookSquare = faFacebookSquare;
  faInstagramSquare = faInstagramSquare;
  faTiktok = faTiktok;

  constructor() { }

  ngOnInit(): void {
    this.stringTimer();
  }

  stringTimer() {
    interval(3000).subscribe(() => {
      this.headerString = this.headerStringArray[Math.floor(Math.random() * this.headerStringArray.length)];
    });
  }
}
