import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "session-policy",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./session-policy.component.html",
  styleUrls: ["./session-policy.component.css"],
})
export class SessionPolicyComponent {
  session: any = { accessExpiry: 15, idleTimeout: 10 };

  save() {
    alert("Session Policy Saved");
  }
}
