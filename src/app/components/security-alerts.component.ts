// import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";

// @Component({
//   selector: "security-alerts",
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   template: `<div class="security-card">
//     <h3 class="card-title">Security Alerts</h3>
//     <div class="alert-options">
//       <label class="checkbox-label">
//         <div class="checkbox-wrapper">
//           <input
//             type="checkbox"
//             [ngModel]="alerts.newDevice"
//             (ngModelChange)="alerts.newDevice = $event"
//           />
//           <span class="checkbox-text">
//             <strong>New Device Detection</strong>
//             <span class="description"
//               >Get notified when a new device accesses your account</span
//             >
//           </span>
//         </div>
//       </label>
//       <label class="checkbox-label">
//         <div class="checkbox-wrapper">
//           <input
//             type="checkbox"
//             [ngModel]="alerts.ipViolation"
//             (ngModelChange)="alerts.ipViolation = $event"
//           />
//           <span class="checkbox-text">
//             <strong>IP Violation Alert</strong>
//             <span class="description"
//               >Get notified of access attempts from unauthorized IP
//               addresses</span
//             >
//           </span>
//         </div>
//       </label>
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
//       .alert-options {
//         margin-bottom: 1.5rem;
//       }
//       .checkbox-label {
//         display: block;
//         margin-bottom: 1rem;
//         cursor: pointer;
//       }
//       .checkbox-wrapper {
//         display: flex;
//         align-items: flex-start;
//         gap: 0.75rem;
//       }
//       .checkbox-wrapper input[type="checkbox"] {
//         margin-top: 0.25rem;
//         width: 18px;
//         height: 18px;
//       }
//       .checkbox-text {
//         display: flex;
//         flex-direction: column;
//       }
//       .checkbox-text strong {
//         color: #2c3e50;
//         margin-bottom: 0.25rem;
//       }
//       .description {
//         color: #666;
//         font-size: 0.9rem;
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
// export class SecurityAlertsComponent {
//   alerts: any = { newDevice: true, ipViolation: true };
//   save() {
//     alert("Saved");
//   }
// }
