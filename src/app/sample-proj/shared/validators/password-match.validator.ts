import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (control.value !== matchingControl.value) {
      return { passwordMismatch: true };
    } 

    return null;
  };
}
