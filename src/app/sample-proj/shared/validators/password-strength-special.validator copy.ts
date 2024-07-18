

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthSpecial(): ValidatorFn {
  return (formControl: AbstractControl): { [key: string]: boolean } | null => {
    const specialRegex = /[\W_]/;
    if (!specialRegex.test(formControl.value)) {
      return { special: true };
    }

    return null;
  };
}
