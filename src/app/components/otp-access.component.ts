// import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";

// @Component({
//   selector: "otp-access",
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   template: `<div class="security-card">
//     <h3 class="card-title">OTP Access</h3>
//     <div class="form-group">
//       <label>Target User ID</label>
//       <input
//         class="form-control"
//         [ngModel]="target"
//         (ngModelChange)="target = $event"
//         placeholder="Enter user ID"
//       />
//     </div>
//     <button class="btn primary generate-btn" (click)="generate()">
//       <i class="fas fa-key"></i> Generate OTP
//     </button>
//     <div class="otp-list" *ngIf="otps.length > 0">
//       <h4>Active OTP Codes</h4>
//       <ul class="otp-items">
//         <li *ngFor="let o of otps" class="otp-item">
//           <span class="otp-code">{{ o.id }}</span>
//           <span class="otp-expiry">Expires: {{ o.expiresAt }}</span>
//         </li>
//       </ul>
//     </div>
//   </div>`,
//   styles: [
//     `
//       .security-card {
//         background: #ffffff;
//         border-radius: 8px;
//         padding: 1.5rem;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         margin-bottom: 1rem;
//       }
//       .card-title {
//         color: #2c3e50;
//         margin: 0 0 1.5rem 0;
//         padding-bottom: 0.5rem;
//         border-bottom: 2px solid #eee;
//       }
//       .form-group {
//         margin-bottom: 1.25rem;
//       }
//       .form-group label {
//         display: block;
//         margin-bottom: 0.5rem;
//         color: #546e7a;
//         font-weight: 500;
//       }
//       .form-control {
//         width: 100%;
//         padding: 0.5rem;
//         border: 1px solid #ddd;
//         border-radius: 4px;
//         font-size: 1rem;
//         transition: border-color 0.2s;
//       }
//       .form-control:focus {
//         border-color: #3498db;
//         outline: none;
//         box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
//       }
//       .btn {
//         background: #3498db;
//         color: white;
//         border: none;
//         padding: 0.6rem 1.2rem;
//         border-radius: 4px;
//         font-size: 1rem;
//         cursor: pointer;
//         transition: background 0.2s;
//       }
//       .btn:hover {
//         background: #2980b9;
//       }
//       .generate-btn {
//         margin-bottom: 1.5rem;
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//       }
//       .otp-list {
//         background: #f8f9fa;
//         border-radius: 4px;
//         padding: 1rem;
//       }
//       .otp-list h4 {
//         margin: 0 0 1rem 0;
//         color: #2c3e50;
//       }
//       .otp-items {
//         list-style: none;
//         padding: 0;
//         margin: 0;
//       }
//       .otp-item {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding: 0.75rem;
//         background: white;
//         border-radius: 4px;
//         margin-bottom: 0.5rem;
//         border: 1px solid #eee;
//       }
//       .otp-code {
//         font-family: monospace;
//         font-size: 1.1rem;
//         color: #2c3e50;
//         font-weight: bold;
//       }
//       .otp-expiry {
//         color: #666;
//         font-size: 0.9rem;
//       }
//     `,
//   ],
// })
// export class OtpAccessComponent {
//   target = "";
//   otps: any[] = [];
//   generate() {
//     const id = Math.random().toString(36).slice(2, 9);
//     this.otps.push({
//       id,
//       expiresAt: new Date(Date.now() + 15 * 60 * 1000).toLocaleString(),
//     });
//     alert("OTP:" + id);
//   }
// }
