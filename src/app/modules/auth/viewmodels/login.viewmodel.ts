import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { makeAutoObservable, runInAction } from 'mobx';
import { ApiService } from 'src/app/core/services/api.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { AuthService } from 'src/app/core/stores/auth.service';
import { promiseHelper } from 'src/app/helpers/promise.helper';
import { appValidators, errorMessageValidators } from 'src/app/shared/validators/validators';

@Injectable()
export class LoginViewModel {
  form: FormGroup = null;
  errorMessages: { [key: string]: string } = {};
  loading = false;

  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _authService: AuthService,
    private _router: Router,
    private _theme: ThemeService
  ) {
    // purposes: https://mobx.js.org/observable-state.html#makeautoobservable
    // 1. all public properties => observable
    // 2. all public function => action
    // 3. all generator function => flow action (replace for async await)
    makeAutoObservable(this);

    this.form = this._fb.group({
      user: ['', appValidators.username],
      password: ['', appValidators.password]
    });
    this._setupFormErrorMessages();
  }

  private _setupFormErrorMessages() {
    this.form.statusChanges.subscribe((arg) => {
      const errors = {
        user: errorMessageValidators.username(this.form.get('user')),
        password: errorMessageValidators.password(this.form.get('password'))
      };
      // dirty way to execute in action
      runInAction(() => (this.errorMessages = errors));
    });
  }

  /**
   * Generator replace for async await
   * https://mobx.js.org/actions.html#asynchronous-actions
   */
  *login() {
    this.loading = true;
    if (this.form.valid) {
      const { user, password } = this.form.value;
      yield this._apiService.login(user, password);
      this._authService.changeAuthenticated(true);
      this._router.navigate(['/preparing']);
    }
    this.loading = false;
  }
}
