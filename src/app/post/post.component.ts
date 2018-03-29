import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number = 0;
  @Input() created_at: Date;

    constructor( public a_title: string, public a_content:string, public a_loveIts:number, public a_created_at: Date ) {
    this.title = a_title;
    this.content = a_content;
    this.loveIts = a_loveIts;
    this.created_at = a_created_at;
   }
  

  ngOnInit() {
  }

}
