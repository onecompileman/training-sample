import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthLowercase(): ValidatorFn {
  return (formControl: AbstractControl): { [key: string]: boolean } | null => {
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(formControl.value)) {
      return { lowercase: true };
    }

    return null;
  };
}
