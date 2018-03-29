import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Contenu du premier post',
      loveIts: 1,
      created_at: new Date('March 21, 2018 15:24:12')
    },
    {
      title: 'Mon deuxième post',
      content: 'Contenu du deuxième post',
      loveIts: -1,
      created_at: new Date('March 23, 2018 11:55:54')
    },
    {
      title: 'Mon troisième post',
      content: 'Contenu du troisième post',
      loveIts: 0,
      created_at: new Date('March 29, 2018 16:48:32')
    }
  ];
}

