
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthUppercase(): ValidatorFn {
  return (formControl: AbstractControl): { [key: string]: boolean } | null => {
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(formControl.value)) {
      return { uppercase: true };
    }

    return null;
  };
}
