
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthNumeric(): ValidatorFn {
  return (formControl: AbstractControl): { [key: string]: boolean } | null => {
    const numericRegex = /[0-9]/;
    if (!numericRegex.test(formControl.value)) {
      return { numeric: true };
    }

    return null;
  };
}
