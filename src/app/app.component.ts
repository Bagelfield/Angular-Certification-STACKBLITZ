import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss', './app.component.scss']
})
export class AppComponent {
  
}
