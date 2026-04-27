import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const externalLinkPattern = /^[a-z][a-z0-9+.-]*:/i;

@Component({
  selector: 'app-smart-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './smart-link.html'
})
export class SmartLinkComponent {
  @Input() href = '';
  @Input() linkClass = '';
  @Input() target?: string;
  @Input() rel?: string;

  get isInternal(): boolean {
    const value = (this.href ?? '').trim();
    if (!value || value.startsWith('//')) {
      return false;
    }
    return !externalLinkPattern.test(value);
  }
}
