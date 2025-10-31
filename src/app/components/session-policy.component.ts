// import { Component } from "@angular/core";
// @Component({
//   selector: "session-policy",
//   template: `<div class="security-card">
//     <h3 class="card-title">Session Policy</h3>
//     <div class="form-group">
//       <label>Access Token Expiry (min):</label>
//       <input
//         type="number"
//         [ngModel]="session.accessExpiry"
//         (ngModelChange)="session.accessExpiry = $event"
//         class="form-control"
//         min="1"
//       />
//     </div>
//     <div class="form-group">
//       <label>Idle Timeout (min):</label>
//       <input
//         type="number"
//         [ngModel]="session.idleTimeout"
//         (ngModelChange)="session.idleTimeout = $event"
//         class="form-control"
//         min="1"
//       />
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
// export class SessionPolicyComponent {
//   session: any = { accessExpiry: 15, idleTimeout: 10 };
//   save() {
//     alert("Saved");
//   }
// }
