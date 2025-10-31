import { Component } from "@angular/core";

@Component({
  selector: "registered-devices",
  templateUrl: "./registered-devices.component.html",
  styleUrls: ["./registered-devices.component.css"],
})
export class RegisteredDevicesComponent {
  devices = [
    {
      deviceName: "Store-PC",
      user: "retailuser",
      deviceType: "WEB",
      lastSeen: new Date().toLocaleString(),
    },
    {
      deviceName: "Manager-Laptop",
      user: "admin",
      deviceType: "WEB",
      lastSeen: new Date(Date.now() - 5 * 60 * 1000).toLocaleString(), // 5 min ago
    },
    {
      deviceName: "Cashier-Phone",
      user: "cashier1",
      deviceType: "MOBILE",
      lastSeen: new Date(Date.now() - 3600000).toLocaleString(), // 1 hour ago
    },
  ];

  getInitials(name: string): string {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  }

  formatTime(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 24 * 60 * 60 * 1000) {
      return "Today";
    } else if (diff < 48 * 60 * 60 * 1000) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  }

  isOnline(dateStr: string): boolean {
    const date = new Date(dateStr);
    const diff = Date.now() - date.getTime();
    return diff < 5 * 60 * 1000; // Online if seen in last 5 minutes
  }
}
