import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SecurityShellComponent } from "./security-shell.component";
import { AllowedIpComponent } from "./components/allowed-ip/allowed-ip.component";
import { RegisteredDevicesComponent } from "./components/registered-device/registered-devices.component";
import { DevicePolicyComponent } from "./components/device-policy/device-policy.component";
import { OtpAccessComponent } from "./components/otp-access/otp-access.component";
import { AccessLogsComponent } from "./components/access-logs/access-logs.component";
import { SessionPolicyComponent } from "./components/session-policy/session-policy.component";
import { SecurityAlertsComponent } from "./components/security-alerts/security-alerts.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { KanbanBoardComponent } from "./components/kanban-board/kanban-board.component";

@NgModule({
  declarations: [
    AppComponent,
    SecurityShellComponent,
    AllowedIpComponent,
    RegisteredDevicesComponent,
    AccessLogsComponent,
    KanbanBoardComponent,
  ],
  providers:[AuthService],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: SecurityShellComponent,
        children: [
          { path: "ip", component: AllowedIpComponent },
          { path: "devices", component: RegisteredDevicesComponent },
          { path: "policy", component: DevicePolicyComponent },
          { path: "otp", component: OtpAccessComponent },
          { path: "logs", component: AccessLogsComponent },
          { path: "session", component: SessionPolicyComponent },
          { path: "alerts", component: SecurityAlertsComponent },
           { path: "kanban", component: KanbanBoardComponent },
          { path: "", redirectTo: "ip", pathMatch: "full" },
        ],
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
