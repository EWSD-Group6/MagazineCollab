import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../../viewmodels/login.viewmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [LoginViewModel],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage implements OnInit {
  constructor(public viewmodel: LoginViewModel) {
    //
  }

  ngOnInit(): void {
    //
  }
}
