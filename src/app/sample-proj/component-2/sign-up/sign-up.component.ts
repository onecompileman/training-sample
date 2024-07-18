import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/validators/password-match.validator';
import { passwordStrengthLowercase } from '../../shared/validators/password-strength-lowercase.validator copy';
import { passwordStrengthNumeric } from '../../shared/validators/password-strength-numeric.validator';
import { passwordStrengthSpecial } from '../../shared/validators/password-strength-special.validator copy';
import { passwordStrengthUppercase } from '../../shared/validators/password-strength-uppercase.validator copy 2';

@Component({
  selector: 'rk-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  acceptTerms: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.listenToFormChanges();
  }

  get skills(): FormArray {
    return this.signUpForm.get('skills') as FormArray;
  }

  get skillsControls(): FormGroup[] {
    return (this.signUpForm.get('skills') as FormArray).controls as FormGroup[];
  }


  signUp() {
    console.log(this.signUpForm.value);
  }

  changeType(type: string) {
    this.signUpForm.get('type').patchValue(type);
  }


  addSkill() {
    this.skills.push(
      this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        mastery: ['', [Validators.required]],
      })
    );
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  private initForm() {
    this.signUpForm = this.formBuilder.group(
      {
        skills: this.formBuilder.array([]),
        firstName: [
          null,
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(200),
          ],
        ],
        type: [null, [Validators.required]],
        lastName: [
          null,
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(200),
          ],
        ],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            passwordStrengthLowercase(),
            passwordStrengthNumeric(),
            passwordStrengthSpecial(),
            passwordStrengthUppercase(),
          ],
        ],
        confirmPassword: [null, [Validators.required]],
      },
      { validators: [passwordMatchValidator('password', 'confirmPassword')] }
    );
  }

  private listenToFormChanges() {
    this.signUpForm.get('type').valueChanges.subscribe((type: string) => {
      if (type === 'professional') {
        Array(3).fill(1).forEach(() => this.addSkill());
      } else {
        this.skills.clear();
      }
    })
  }
}
