import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  sitename = 'The Will Will Web';
  sitelogo = '/assets/images/logo.png';

  constructor() {
    setTimeout(() => {
      this.sitename = 'canboo inside';
    }, 2000);
  }

  changeTitle($event: MouseEvent) {
    if ($event.ctrlKey)
    {
      this.sitename = 'click';
    }
  }

}
