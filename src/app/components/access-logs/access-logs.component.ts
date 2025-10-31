import { Component } from "@angular/core";

@Component({
  selector: "access-logs",
  templateUrl: "./access-logs.component.html",
  styleUrls: ["./access-logs.component.css"],
})
export class AccessLogsComponent {
  logs = [
    {
      user: "retailuser",
      device: "Store-PC",
      ip: "203.0.113.5",
      action: "Login",
      result: "Success",
      time: new Date().toLocaleString(),
    },
    {
      user: "admin",
      device: "Laptop-01",
      ip: "192.168.1.100",
      action: "Config Change",
      result: "Success",
      time: new Date(Date.now() - 3600000).toLocaleString(),
    },
    {
      user: "guest",
      device: "Mobile",
      ip: "203.0.113.99",
      action: "Login",
      result: "Failed",
      time: new Date(Date.now() - 7200000).toLocaleString(),
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
    return date.toLocaleDateString([], { month: "short", day: "numeric" });
  }
}
