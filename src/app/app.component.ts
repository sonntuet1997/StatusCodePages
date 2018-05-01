import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private elRef: ElementRef) {

  }

  ngOnInit(): void {
    const loadingElement = document.getElementById('Loading');
    loadingElement.classList.add('hide-loading');
    setTimeout(x => {
      loadingElement.parentNode.removeChild(loadingElement);
    }, 1400);
  }
}
