import { Component } from '@angular/core';
import { SmartLinkComponent } from '../../shared/smart-link';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [SmartLinkComponent],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css'],
})
export class NotFound {

}
