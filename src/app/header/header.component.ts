import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class HeaderComponent implements OnInit {

  isNavOpen: boolean = false;
  faXmark = faXmark;
  s:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  openUrl(url: string, openIn: boolean = true, e: MouseEvent) {
    e.preventDefault();
    this.router.navigate([url]);
    this.isNavOpen = false;
  }

  handleKeyboardEvent(e: KeyboardEvent) {
    const k = e.key;
    const s = this.s;
    if (
      (k === 's' || k === 'p' || k === 'a' || k === 'r' || k === 'x') &&
      (s === '' || s === 's' || s === 'sp' || s === 'spa' || s === 'spar' || s === 'sparx' || s === 'sparxx')
    ) {
      this.s = s + k;
      if(this.s === 'sparxx') {
        alert('You found me!');
        this.s = '';
      }
    } else {
      this.s = '';
    }
  }

}
