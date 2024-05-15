import { FormGroup } from "@angular/forms";


export function hasError(controlName: string, errorName: string, form: FormGroup) {
  return form.controls[controlName].hasError(errorName);
}
