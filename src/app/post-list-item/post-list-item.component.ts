import { Component, Input, OnInit } from '@angular/core';
//import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  //@Input() post: PostComponent;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
    //this.post = new PostComponent( "", "", 0, new Date() );
  }

  onLoveIt() {
    this.loveIts++;
    //this.post.loveIts++;
  }

  onDontLoveIt() {
    this.loveIts--;
    //this.post.loveIts--;
  }

  ngOnInit() {
  }