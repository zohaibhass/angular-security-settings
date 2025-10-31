import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'device-policy',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './device-policy.component.html',
  styleUrls: ['./device-policy.component.css']
})
export class DevicePolicyComponent {
  policy: any = { approvalMode: 'Manual', maxDevices: 2 };

  save() {
    alert('Saved');
  }
}
