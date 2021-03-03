import { AbstractControl, Validators } from '@angular/forms';

export const appValidators = {
  username: [Validators.required, Validators.minLength(6)],
  password: [Validators.required, Validators.minLength(6)]
};

export const errorMessageValidators = {
  username: (control: AbstractControl) => {
    if (control.hasError('required')) {
      return 'This field is required';
    } else if (control.hasError('minlength')) {
      return 'Min length is 6';
    } else {
      return null;
    }
  },
  password: (control: AbstractControl) => {
    if (control.hasError('required')) {
      return 'This field is required';
    } else if (control.hasError('minlength')) {
      return 'Min length is 6';
    } else {
      return null;
    }
  }
};
