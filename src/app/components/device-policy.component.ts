// import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";

// @Component({
//   selector: "device-policy",
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   template: `<div class="security-card">
//     <h3 class="card-title">Device Policy</h3>
//     <div class="form-group">
//       <label>Approval Mode</label>
//       <div class="select-wrapper">
//         <select
//           class="form-control"
//           [ngModel]="policy.approvalMode"
//           (ngModelChange)="policy.approvalMode = $event"
//         >
//           <option value="Auto">Automatic Approval</option>
//           <option value="Manual">Manual Review</option>
//           <option value="OTP">OTP Verification</option>
//         </select>
//       </div>
//       <small class="help-text"
//         >Choose how new devices are approved for access</small
//       >
//     </div>
//     <div class="form-group">
//       <label>Maximum Allowed Devices</label>
//       <input
//         type="number"
//         class="form-control"
//         [ngModel]="policy.maxDevices"
//         (ngModelChange)="policy.maxDevices = $event"
//         min="1"
//         max="10"
//       />
//       <small class="help-text"
//         >Limit the number of devices that can be registered (1-10)</small
//       >
//     </div>
//     <button class="btn primary" (click)="save()">Save Changes</button>
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
//       .select-wrapper {
//         position: relative;
//       }
//       .select-wrapper:after {
//         content: "▼";
//         font-size: 0.8rem;
//         position: absolute;
//         right: 0.8rem;
//         top: 50%;
//         transform: translateY(-50%);
//         color: #666;
//         pointer-events: none;
//       }
//       .help-text {
//         display: block;
//         margin-top: 0.25rem;
//         color: #666;
//         font-size: 0.875rem;
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
//     `,
//   ],
// })
// export class DevicePolicyComponent {
//   policy: any = { approvalMode: "Manual", maxDevices: 2 };
//   save() {
//     alert("Saved");
//   }
// }
