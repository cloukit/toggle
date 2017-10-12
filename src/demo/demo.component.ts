import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [ '.demo { font-family: sans-serif; }', '.demotable td { vertical-align:top; padding:10px; }', ],
})
export class DemoComponent {
  styles = { };
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      isCatDead: false,
      areYouSure: true,
      youCantTouchThisOn: { value: true, disabled: true },
      youCantTouchThisOff: { value: false, disabled: true },
      youCantTouchThisOnAlt: { value: true, disabled: true },
      youCantTouchThisOffAlt: { value: false, disabled: true },
    });

  }

  getFormResult() {
    return JSON.stringify(this.form.value, null, 2);
  }
}
