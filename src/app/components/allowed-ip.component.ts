// import { Component } from "@angular/core";

// @Component({
//   selector: "allowed-ip",
//   template: `
//     <div class="ip-card">
//       <header class="ip-header">
//         <h3>Allowed IP Ranges</h3>
//       </header>

//       <div class="ip-body">
//         <button (click)="openPopup()" class="add-btn">
//           <svg class="icon-plus" viewBox="0 0 20 20" fill="currentColor">
//             <path
//               fill-rule="evenodd"
//               d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//               clip-rule="evenodd"
//             />
//           </svg>
//           Add IP Range
//         </button>

//         <div class="table-container">
//           <table class="ip-table">
//             <thead>
//               <tr>
//                 <th>IP/CIDR</th>
//                 <th>Description</th>
//                 <th>Allow</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr *ngFor="let r of rules" class="table-row">
//                 <td class="ip-cell">{{ r.ipOrCidr }}</td>
//                 <td class="desc-cell">{{ r.description || "—" }}</td>
//                 <td class="status-cell">
//                   <span
//                     class="status-badge"
//                     [class.allowed]="r.allow"
//                     [class.blocked]="!r.allow"
//                   >
//                     {{ r.allow ? "Allowed" : "Blocked" }}
//                   </span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div *ngIf="rules.length === 0" class="empty-state">
//             <p class="empty-title">No IP ranges configured yet.</p>
//             <p class="empty-subtitle">Click "Add IP Range" to get started.</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- Popup Overlay -->
//     <div *ngIf="showPopup" class="overlay">
//       <div class="popup-card">
//         <h3>Add IP Range</h3>

//         <div class="form-group">
//           <label>IP/CIDR</label>
//           <input
//             [(ngModel)]="newRule.ipOrCidr"
//             placeholder="e.g. 192.168.1.0/24"
//           />
//         </div>

//         <div class="form-group">
//           <label>Description</label>
//           <input [(ngModel)]="newRule.description" placeholder="Optional" />
//         </div>

//         <div class="">
//           <label>Allow Access:</label>
//           <input type="checkbox" [(ngModel)]="newRule.allow" />
//         </div>

//         <div class="actions">
//           <button class="btn-cancel" (click)="closePopup()">Cancel</button>
//           <button class="btn-save" (click)="saveRule()">Save</button>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [
//     `
//       :host {
//         display: block;
//         font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//       }

//       /* ===== Card ===== */
//       .ip-card {
//         max-width: 900px;
//         margin: 2rem auto;
//         background: white;
//         border-radius: 16px;
//         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//         overflow: hidden;
//       }
//       .ip-header {
//         background: linear-gradient(135deg, #4f46e5, #7c3aed);
//         padding: 1.25rem 1.5rem;
//       }
//       .ip-header h3 {
//         margin: 0;
//         color: white;
//         font-size: 1.25rem;
//         font-weight: 600;
//       }
//       .ip-body {
//         padding: 1.5rem;
//       }

//       /* ===== Add Button ===== */
//       .add-btn {
//         display: inline-flex;
//         align-items: center;
//         gap: 0.5rem;
//         padding: 0.625rem 1.25rem;
//         margin-bottom: 1rem;
//         background: linear-gradient(135deg, #10b981, #059669);
//         color: white;
//         border: none;
//         border-radius: 8px;
//         font-size: 0.875rem;
//         font-weight: 500;
//         cursor: pointer;
//         transition: all 0.2s ease;
//         box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
//       }
//       .add-btn:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
//       }
//       .icon-plus {
//         width: 18px;
//         height: 18px;
//       }

//       /* ===== Table ===== */
//       .table-container {
//         border: 1px solid #e5e7eb;
//         border-radius: 12px;
//         overflow: hidden;
//       }
//       .ip-table {
//         width: 100%;
//         border-collapse: collapse;
//         background: #f9fafb;
//       }
//       .ip-table th {
//         background: #f3f4f6;
//         padding: 0.875rem 1rem;
//         text-align: left;
//         font-size: 0.75rem;
//         font-weight: 600;
//         color: #374151;
//         text-transform: uppercase;
//         letter-spacing: 0.05em;
//       }
//       .ip-table td {
//         padding: 1rem;
//         border-top: 1px solid #e5e7eb;
//         font-size: 0.875rem;
//       }
//       .table-row:hover {
//         background: #f1f5f9;
//         transition: background 0.2s;
//       }

//       /* ===== Popup Overlay (Center Popup) ===== */
//       .overlay {
//         position: fixed;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: rgba(0, 0, 0, 0.5);
//         z-index: 999;
//         animation: fadeIn 0.25s ease;
//       }

//       /* ===== Popup Box ===== */
//       .popup-card {
//         background: white;
//         border-radius: 12px;
//         padding: 2rem;
//         width: 360px;
//         box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//         animation: slideIn 0.25s ease;
//       }
//       .popup-card h3 {
//         margin-top: 0;
//         color: #4f46e5;
//         font-weight: 600;
//         text-align: center;
//       }

//       /* ===== Form ===== */
//       .form-group {
//         margin-bottom: 1rem;
//       }
//       .form-group label {
//         display: block;
//         font-size: 0.875rem;
//         margin-bottom: 0.25rem;
//         color: #374151;
//       }
//       .form-group input {
//         width: 100%;
//         padding: 0.5rem;
//         border: 1px solid #d1d5db;
//         border-radius: 6px;
//         font-size: 0.875rem;
//       }
//       .form-group.inline {
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//       }

//       /* ===== Popup Buttons ===== */
//       .actions {
//         text-align: right;
//         margin-top: 1.5rem;
//       }
//       .btn-cancel,
//       .btn-save {
//         padding: 0.5rem 1rem;
//         border-radius: 6px;
//         border: none;
//         cursor: pointer;
//         font-size: 0.875rem;
//       }
//       .btn-cancel {
//         background: #e5e7eb;
//         margin-right: 0.5rem;
//       }
//       .btn-save {
//         background: #4f46e5;
//         color: white;
//       }

//       @keyframes fadeIn {
//         from {
//           opacity: 0;
//         }
//         to {
//           opacity: 1;
//         }
//       }

//       @keyframes slideIn {
//         from {
//           opacity: 0;
//           transform: translateY(-10px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
//     `,
//   ],
// })
// export class AllowedIpComponent {
//   rules = [
//     { ipOrCidr: "203.0.113.0/28", description: "Store network", allow: true },
//   ];

//   showPopup = false;
//   newRule = { ipOrCidr: "", description: "", allow: true };

//   openPopup() {
//     this.newRule = { ipOrCidr: "", description: "", allow: true };
//     this.showPopup = true;
//   }

//   closePopup() {
//     this.showPopup = false;
//   }

//   saveRule() {
//     if (!this.newRule.ipOrCidr.trim()) {
//       alert("Please enter a valid IP/CIDR");
//       return;
//     }
//     this.rules.push({ ...this.newRule });
//     this.closePopup();
//   }
// }
