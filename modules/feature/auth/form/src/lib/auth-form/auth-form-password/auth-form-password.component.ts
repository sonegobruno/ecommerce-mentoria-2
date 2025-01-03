import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'ecommerce-auth-form-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  protected control = inject(AuthFormComponent).form.controls.password;
}
