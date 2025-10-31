import { Component } from "@angular/core";

@Component({
  selector: "allowed-ip",
  templateUrl: "./allowed-ip.component.html",
  styleUrls: ["./allowed-ip.component.css"],
})
export class AllowedIpComponent {
  rules = [
    { ipOrCidr: "203.0.113.0/28", description: "Store network", allow: true },
  ];

  showPopup = false;
  newRule = { ipOrCidr: "", description: "", allow: true };

  openPopup() {
    this.newRule = { ipOrCidr: "", description: "", allow: true };
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  saveRule() {
    if (!this.newRule.ipOrCidr.trim()) {
      alert("Please enter a valid IP/CIDR");
      return;
    }
    this.rules.push({ ...this.newRule });
    this.closePopup();
  }
}
