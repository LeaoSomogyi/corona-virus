import { Component } from '@angular/core';
import { SpinnerService } from '@services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-virus';

  constructor(
    public spinnerService: SpinnerService) { 
  }
}
