import { Component } from '@angular/core';
import { PopupText } from "popup-text";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  async handleClick(event: Event){
    await PopupText.showPopup({message: 'Hello World'})

  }
}
