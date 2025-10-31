// import { Component } from "@angular/core";

// @Component({
//   selector: "registered-devices",
//   template: `
//     <div class="devices-card">
//       <header class="devices-header">
//         <h3>Registered Devices</h3>
//         <div class="devices-info">
//           <span class="device-count"
//             >{{ devices.length }}
//             {{ devices.length === 1 ? "device" : "devices" }}</span
//           >
//         </div>
//       </header>

//       <div class="devices-body">
//         <div class="table-container">
//           <table class="devices-table">
//             <thead>
//               <tr>
//                 <th>Device</th>
//                 <th>User</th>
//                 <th>Type</th>
//                 <th>Last Seen</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr
//                 *ngFor="let d of devices; let i = index"
//                 class="device-row"
//                 [class.online]="isOnline(d.lastSeen)"
//               >
//                 <td class="device-name-cell">
//                   <div
//                     class="device-icon"
//                     [class.web]="d.deviceType === 'WEB'"
//                     [class.mobile]="d.deviceType === 'MOBILE'"
//                   >
//                     <svg
//                       *ngIf="d.deviceType === 'WEB'"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 1v7h14V6H3z"
//                       />
//                       <path d="M5 8h1v1H5V8zm0 2h1v1H5v-1zm0 2h1v1H5v-1z" />
//                     </svg>
//                     <svg
//                       *ngIf="d.deviceType === 'MOBILE'"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         d="M7 2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 1v14h6V3H7z"
//                       />
//                       <path d="M10 15h0" />
//                     </svg>
//                   </div>
//                   <span class="device-label">{{ d.deviceName }}</span>
//                   <span
//                     class="online-dot"
//                     [class.online]="isOnline(d.lastSeen)"
//                   ></span>
//                 </td>
//                 <td class="user-cell">
//                   <div class="user-avatar">{{ getInitials(d.user) }}</div>
//                   <span class="user-name">{{ d.user }}</span>
//                 </td>
//                 <td class="type-cell">
//                   <span
//                     class="type-badge"
//                     [class.web]="d.deviceType === 'WEB'"
//                     [class.mobile]="d.deviceType === 'MOBILE'"
//                   >
//                     {{ d.deviceType }}
//                   </span>
//                 </td>
//                 <td class="last-seen-cell">
//                   <div class="time">{{ formatTime(d.lastSeen) }}</div>
//                   <div class="date">{{ formatDate(d.lastSeen) }}</div>
//                   <div class="status" [class.online]="isOnline(d.lastSeen)">
//                     {{ isOnline(d.lastSeen) ? "Online now" : "Offline" }}
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div *ngIf="devices.length === 0" class="empty-state">
//             <p class="empty-title">No devices registered yet.</p>
//             <p class="empty-subtitle">
//               Devices will appear here after first login.
//             </p>
//           </div>
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

//       /* Card */
//       .devices-card {
//         max-width: 1000px;
//         margin: 2rem auto;
//         background: white;
//         border-radius: 16px;
//         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//         overflow: hidden;
//       }

//       /* Header */
//       .devices-header {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         background: linear-gradient(135deg, #0891b2, #0e7490);
//         padding: 1.25rem 1.5rem;
//         color: white;
//       }
//       .devices-header h3 {
//         margin: 0;
//         font-size: 1.25rem;
//         font-weight: 600;
//       }
//       .devices-info {
//         font-size: 0.875rem;
//         opacity: 0.9;
//       }
//       .device-count {
//         background: rgba(255, 255, 255, 0.2);
//         padding: 0.25rem 0.75rem;
//         border-radius: 999px;
//         font-weight: 500;
//       }

//       /* Body */
//       .devices-body {
//         padding: 1.5rem;
//       }

//       /* Table */
//       .table-container {
//         border: 1px solid #e2e8f0;
//         border-radius: 12px;
//         overflow: hidden;
//       }
//       .devices-table {
//         width: 100%;
//         border-collapse: collapse;
//         background: #f8fafc;
//       }
//       .devices-table th {
//         background: #f0f9ff;
//         padding: 0.875rem 1rem;
//         text-align: left;
//         font-size: 0.75rem;
//         font-weight: 600;
//         color: #0369a1;
//         text-transform: uppercase;
//         letter-spacing: 0.05em;
//       }
//       .devices-table td {
//         padding: 1rem;
//         border-top: 1px solid #e2e8f0;
//         font-size: 0.875rem;
//       }
//       .device-row {
//         transition: background 0.2s;
//       }
//       .device-row:hover {
//         background: #ecfeff;
//       }
//       .device-row.online:hover {
//         background: #f0fdf4;
//       }

//       /* Device Name */
//       .device-name-cell {
//         display: flex;
//         align-items: center;
//         gap: 0.75rem;
//         font-weight: 500;
//       }
//       .device-icon {
//         width: 36px;
//         height: 36px;
//         background: #e0f2fe;
//         color: #0369a1;
//         border-radius: 8px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex-shrink: 0;
//       }
//       .device-icon svg {
//         width: 20px;
//         height: 20px;
//       }
//       .device-icon.web {
//         background: #dbeafe;
//         color: #4338ca;
//       }
//       .device-icon.mobile {
//         background: #d1fae5;
//         color: #047857;
//       }
//       .device-label {
//         color: #1e293b;
//       }
//       .online-dot {
//         width: 10px;
//         height: 10px;
//         background: #94a3b8;
//         border-radius: 50%;
//         margin-left: 0.5rem;
//       }
//       .online-dot.online {
//         background: #10b981;
//         box-shadow: 0 0 0 0 rgba(16, 185, 129, 1);
//         animation: pulse 2s infinite;
//       }
//       @keyframes pulse {
//         0% {
//           box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
//         }
//         70% {
//           box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
//         }
//         100% {
//           box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
//         }
//       }

//       /* User */
//       .user-cell {
//         display: flex;
//         align-items: center;
//         gap: 0.75rem;
//       }
//       .user-avatar {
//         width: 32px;
//         height: 32px;
//         background: #6366f1;
//         color: white;
//         font-weight: 600;
//         font-size: 0.75rem;
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .user-name {
//         font-weight: 500;
//         color: #1e293b;
//       }

//       /* Type Badge */
//       .type-cell {
//         font-weight: 500;
//       }
//       .type-badge {
//         display: inline-block;
//         padding: 0.25rem 0.75rem;
//         border-radius: 9999px;
//         font-size: 0.75rem;
//         font-weight: 600;
//       }
//       .type-badge.web {
//         background: #e0e7ff;
//         color: #4338ca;
//       }
//       .type-badge.mobile {
//         background: #d1fae5;
//         color: #047857;
//       }

//       /* Last Seen */
//       .last-seen-cell {
//         color: #64748b;
//         line-height: 1.4;
//       }
//       .time {
//         font-weight: 500;
//         color: #1e293b;
//       }
//       .date {
//         font-size: 0.75rem;
//       }
//       .status {
//         font-size: 0.75rem;
//         font-weight: 500;
//         margin-top: 0.25rem;
//       }
//       .status.online {
//         color: #10b981;
//       }

//       /* Empty State */
//       .empty-state {
//         text-align: center;
//         padding: 3rem 1rem;
//         color: #94a3b8;
//       }
//       .empty-title {
//         font-size: 1.125rem;
//         margin: 0 0 0.25rem 0;
//         color: #475569;
//       }
//       .empty-subtitle {
//         font-size: 0.875rem;
//         margin: 0;
//       }
//     `,
//   ],
// })
// export class RegisteredDevicesComponent {
//   devices = [
//     {
//       deviceName: "Store-PC",
//       user: "retailuser",
//       deviceType: "WEB",
//       lastSeen: new Date().toLocaleString(),
//     },
//     {
//       deviceName: "Manager-Laptop",
//       user: "admin",
//       deviceType: "WEB",
//       lastSeen: new Date(Date.now() - 5 * 60 * 1000).toLocaleString(), // 5 min ago
//     },
//     {
//       deviceName: "Cashier-Phone",
//       user: "cashier1",
//       deviceType: "MOBILE",
//       lastSeen: new Date(Date.now() - 3600000).toLocaleString(), // 1 hour ago
//     },
//   ];

//   getInitials(name: string): string {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .substring(0, 2);
//   }

//   formatTime(dateStr: string): string {
//     const date = new Date(dateStr);
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   }

//   formatDate(dateStr: string): string {
//     const date = new Date(dateStr);
//     const now = new Date();
//     const diff = now.getTime() - date.getTime();

//     if (diff < 24 * 60 * 60 * 1000) {
//       return "Today";
//     } else if (diff < 48 * 60 * 60 * 1000) {
//       return "Yesterday";
//     } else {
//       return date.toLocaleDateString([], { month: "short", day: "numeric" });
//     }
//   }

//   isOnline(dateStr: string): boolean {
//     const date = new Date(dateStr);
//     const diff = Date.now() - date.getTime();
//     return diff < 5 * 60 * 1000; // Online if seen in last 5 minutes
//   }
// }
