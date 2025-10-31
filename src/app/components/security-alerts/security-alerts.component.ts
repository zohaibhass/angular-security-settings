import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "security-alerts",
  standalone: true,
  templateUrl: "./security-alerts.component.html",
  styleUrls: ["./security-alerts.component.css"],
  imports: [FormsModule],
})
export class SecurityAlertsComponent {
  alerts: any = { newDevice: true, ipViolation: true };
  showPopup = false;
  ipRange = "";

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  save() {
    this.showPopup = false;
    alert(`Saved with IP Range: ${this.ipRange || "none"}`);
  }
}
