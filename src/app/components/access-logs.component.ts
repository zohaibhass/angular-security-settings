// import { Component } from "@angular/core";

// @Component({
//   selector: "access-logs",
//   template: `
//     <div class="logs-card">
//       <header class="logs-header">
//         <h3>Access Logs</h3>
//         <div class="logs-info">
//           <span class="log-count"
//             >{{ logs.length }}
//             {{ logs.length === 1 ? "entry" : "entries" }}</span
//           >
//         </div>
//       </header>

//       <div class="logs-body">
//         <div class="table-container">
//           <table class="logs-table">
//             <thead>
//               <tr>
//                 <th>User</th>
//                 <th>Device</th>
//                 <th>IP</th>
//                 <th>Action</th>
//                 <th>Result</th>
//                 <th>Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr
//                 *ngFor="let l of logs; let i = index"
//                 class="log-row"
//                 [class.success]="l.result === 'Success'"
//                 [class.failed]="l.result === 'Failed'"
//               >
//                 <td class="user-cell">
//                   <div class="user-avatar">{{ getInitials(l.user) }}</div>
//                   <span class="user-name">{{ l.user }}</span>
//                 </td>
//                 <td class="device-cell">
//                   <span class="device-icon">PC</span> {{ l.device }}
//                 </td>
//                 <td class="ip-cell">{{ l.ip }}</td>
//                 <td class="action-cell">{{ l.action }}</td>
//                 <td class="result-cell">
//                   <span
//                     class="result-badge"
//                     [class.success]="l.result === 'Success'"
//                     [class.failed]="l.result === 'Failed'"
//                   >
//                     <svg
//                       *ngIf="l.result === 'Success'"
//                       class="icon-check"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     <svg
//                       *ngIf="l.result === 'Failed'"
//                       class="icon-block"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     {{ l.result }}
//                   </span>
//                 </td>
//                 <td class="time-cell">
//                   <div class="time">{{ formatTime(l.time) }}</div>
//                   <div class="date">{{ formatDate(l.time) }}</div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div *ngIf="logs.length === 0" class="empty-state">
//             <p class="empty-title">No access logs yet.</p>
//             <p class="empty-subtitle">
//               Activity will appear here when users log in.
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
//       .logs-card {
//         max-width: 1000px;
//         margin: 2rem auto;
//         background: white;
//         border-radius: 16px;
//         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//         overflow: hidden;
//       }

//       /* Header */
//       .logs-header {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         background: linear-gradient(135deg, #1e293b, #334155);
//         padding: 1.25rem 1.5rem;
//         color: white;
//       }
//       .logs-header h3 {
//         margin: 0;
//         font-size: 1.25rem;
//         font-weight: 600;
//       }
//       .logs-info {
//         font-size: 0.875rem;
//         opacity: 0.9;
//       }
//       .log-count {
//         background: rgba(255, 255, 255, 0.2);
//         padding: 0.25rem 0.75rem;
//         border-radius: 999px;
//         font-weight: 500;
//       }

//       /* Body */
//       .logs-body {
//         padding: 1.5rem;
//       }

//       /* Table */
//       .table-container {
//         border: 1px solid #e2e8f0;
//         border-radius: 12px;
//         overflow: hidden;
//       }
//       .logs-table {
//         width: 100%;
//         border-collapse: collapse;
//         background: #f8fafc;
//       }
//       .logs-table th {
//         background: #f1f5f9;
//         padding: 0.875rem 1rem;
//         text-align: left;
//         font-size: 0.75rem;
//         font-weight: 600;
//         color: #475569;
//         text-transform: uppercase;
//         letter-spacing: 0.05em;
//       }
//       .logs-table td {
//         padding: 1rem;
//         border-top: 1px solid #e2e8f0;
//         font-size: 0.875rem;
//       }
//       .log-row {
//         transition: background 0.2s;
//       }
//       .log-row:hover {
//         background: #f1f5f9;
//       }
//       .log-row.success:hover {
//         background: #ecfdf5;
//       }
//       .log-row.failed:hover {
//         background: #fef2f2;
//       }

//       /* User Cell */
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

//       /* Device */
//       .device-cell {
//         color: #64748b;
//       }
//       .device-icon {
//         display: inline-block;
//         margin-right: 0.25rem;
//         font-size: 0.75rem;
//       }

//       /* IP */
//       .ip-cell {
//         font-family: "Courier New", monospace;
//         color: #1e40af;
//         font-weight: 500;
//       }

//       /* Action */
//       .action-cell {
//         color: #334155;
//         font-weight: 500;
//       }

//       /* Result Badge */
//       .result-cell {
//         font-weight: 500;
//       }
//       .result-badge {
//         display: inline-flex;
//         align-items: center;
//         gap: 0.25rem;
//         padding: 0.25rem 0.75rem;
//         border-radius: 9999px;
//         font-size: 0.75rem;
//         font-weight: 600;
//       }
//       .result-badge.success {
//         background: #d1fae5;
//         color: #065f46;
//       }
//       .result-badge.failed {
//         background: #fee2e2;
//         color: #991b1b;
//       }
//       .icon-check,
//       .icon-block {
//         width: 14px;
//         height: 14px;
//       }

//       /* Time */
//       .time-cell {
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
// export class AccessLogsComponent {
//   logs = [
//     {
//       user: "retailuser",
//       device: "Store-PC",
//       ip: "203.0.113.5",
//       action: "Login",
//       result: "Success",
//       time: new Date().toLocaleString(),
//     },
//     {
//       user: "admin",
//       device: "Laptop-01",
//       ip: "192.168.1.100",
//       action: "Config Change",
//       result: "Success",
//       time: new Date(Date.now() - 3600000).toLocaleString(),
//     },
//     {
//       user: "guest",
//       device: "Mobile",
//       ip: "203.0.113.99",
//       action: "Login",
//       result: "Failed",
//       time: new Date(Date.now() - 7200000).toLocaleString(),
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
//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   }
// }
