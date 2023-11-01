import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { btn } from './icon.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'search';

  ngOnInit(): void {
    const btn = document.getElementById('menu-btn') as HTMLElement;
    const nav = document.getElementById('menu') as HTMLElement;

    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    });

  }
}


