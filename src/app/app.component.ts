import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 posts = [
   { title: 'Cleo',
  imageUrl: 'assets/cleo.JPG',
  username: 'cleo',
  content: 'The fearless leader of these goons.'
  },
  { title: 'Ziva',
    imageUrl: 'assets/ziva.JPG',
    username: 'ziva',
    content: 'The purveyor of cuddles and kisses.'
  },
  { title: 'Jerry Lee',
    imageUrl: 'assets/jerrylee.JPG',
    username: 'jerry lee',
    content: 'The provider of pure comic relief.'
  },
 ];
}
