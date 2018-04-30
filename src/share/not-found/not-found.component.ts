import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  title = 'app';
  height: number = document.documentElement.clientHeight;
  width: number = document.documentElement.clientWidth;
  @ViewChild('notFoundContent') notFoundContent: ElementRef;
  heightContent: number;

  onResize() {
    this.height = document.documentElement.clientHeight;
    this.width = document.documentElement.clientWidth;
    this.heightContent = this.height / 2 - this.notFoundContent.nativeElement.clientHeight / 2;
  }

  constructor() {

  }

  ngOnInit(): void {
    this.heightContent = this.height / 2 - this.notFoundContent.nativeElement.clientHeight / 2;
  }

}
