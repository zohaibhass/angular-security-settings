import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'otp-access',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './otp-access.component.html',
  styleUrls: ['./otp-access.component.css']
})
export class OtpAccessComponent {
  target = '';
  otps: any[] = [];

  generate() {
    const id = Math.random().toString(36).slice(2, 9);
    this.otps.push({
      id,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toLocaleString(),
    });
    alert('OTP: ' + id);
  }
}
