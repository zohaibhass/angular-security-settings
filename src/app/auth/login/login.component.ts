import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { AuthService, LoginRequest } from "../../services/auth.service";
import { Router } from "@angular/router";
import { catchError, of } from "rxjs";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  errorMsg = "";
  loading = false;

  loginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
    deviceIdentifier: ["", [Validators.required]],
    deviceSecret: ["", [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.loading = true;
    this.errorMsg = "";

    const payload: LoginRequest = this.loginForm.value as LoginRequest;

    this.auth
      .login(payload)
      .pipe(
        catchError((err) => {
          this.errorMsg = err.error?.message || err.message || "Login failed. Please try again.";
          this.loading = false;
          return of(null);
        })
      )
      .subscribe((res) => {
        this.loading = false;

        if (res?.token) {
          this.auth.setToken(res.token); // Save JWT
          this.router.navigate(["/dashboard"]);
        }
      });
  }

  // Optional: Mark all fields as touched to show validation
  private markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      this.loginForm.get(key)?.markAsTouched();
    });
  }
}