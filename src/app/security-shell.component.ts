import { Component } from "@angular/core";

@Component({
  selector: "security-shell",
  template: `
    <div class="shell-container">
      <!-- Sidebar -->
      <nav class="sidebar">
        <div class="sidebar-header">
          <h2 class="sidebar-title">
            <svg class="shield-icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 2a6 6 0 00-5.657 4.04A7.978 7.978 0 003 10c0 1.657.507 3.195 1.343 4.46A6 6 0 0010 18a6 6 0 005.657-3.54A7.978 7.978 0 0017 10a7.978 7.978 0 00-1.343-4.46A6 6 0 0010 2zm0 2a4 4 0 110 8 4 4 0 010-8z"
                clip-rule="evenodd"
              />
            </svg>
            Security
          </h2>
        </div>

        <ul class="nav-list">
          <li class="nav-item">
            <a routerLink="/ip" routerLinkActive="active" class="nav-link">
              <svg class="nav-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
                />
                <path
                  d="M3 8a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"
                />
              </svg>
              Allowed IPs
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/devices" routerLinkActive="active" class="nav-link">
              <svg class="nav-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                />
              </svg>
              Registered Devices
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/policy" routerLinkActive="active" class="nav-link">
              <svg class="nav-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                  clip-rule="evenodd"
                />
              </svg>
              Device Policy
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/otp" routerLinkActive="active" class="nav-link">
              <svg class="nav-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              OTP Access
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/logs" routerLinkActive="active" class="nav-link">
              <svg class="nav-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 000 2h14a1 1 0 100-2H3zm0 4a1 1 0 000 2h14a1 1 0 100-2H3zm0 4a1 1 0 000 2h14a1 1 0 100-2H3z"
                  clip-rule="evenodd"
                />
              </svg>
              Access Logs
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/session" routerLinkActive="active" class="nav-link">
              <svg class="nav-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>
              Session Policy
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/alerts" routerLinkActive="active" class="nav-link">
              <svg class="nav-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                />
              </svg>
              Security Alerts
            </a>
          </li>

          <li class="nav-item">
            <a routerLink="/kanban" routerLinkActive="active" class="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-kanban"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                />
                <path
                  d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"
                />
              </svg>
              Kanban Board
            </a>
          </li>
        </ul>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: #f1f5f9;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      /* Layout */
      .shell-container {
        display: flex;
        gap: 1.5rem;
        padding: 1.5rem;
        min-height: 100vh;
      }

      /* Sidebar */
      .sidebar {
        width: 240px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .sidebar-header {
        background: linear-gradient(135deg, #1e293b, #334155);
        padding: 1.5rem;
        color: white;
      }

      .sidebar-title {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .shield-icon {
        width: 28px;
        height: 28px;
        color: #60a5fa;
      }

      .nav-list {
        padding: 1rem 0;
        list-style: none;
        margin: 0;
      }

      .nav-item {
        margin: 0.25rem 0;
      }

      .nav-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        color: #475569;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
        border-left: 3px solid transparent;
      }

      .nav-link:hover {
        background: #f8fafc;
        color: #1e293b;
        border-left-color: #e2e8f0;
      }

      .nav-link.active {
        background: linear-gradient(90deg, #dbeafe 0%, transparent 100%);
        color: #4338ca;
        border-left-color: #4338ca;
        font-weight: 600;
      }

      .nav-link.active .nav-icon {
        color: #4338ca;
      }

      .nav-icon {
        width: 20px;
        height: 20px;
        color: #94a3b8;
        transition: color 0.2s;
      }

      /* Main Content */
      .main-content {
        flex: 1;
        min-width: 0; /* Allows flex child to shrink below content size */
      }

      /* Responsive */
      @media (max-width: 768px) {
        .shell-container {
          flex-direction: column;
          padding: 1rem;
        }
        .sidebar {
          width: 100%;
        }
        .nav-list {
          display: flex;
          overflow-x: auto;
          padding: 0.5rem 1rem;
        }
        .nav-item {
          flex-shrink: 0;
        }
        .nav-link {
          white-space: nowrap;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
      }
    `,
  ],
})
export class SecurityShellComponent {}
