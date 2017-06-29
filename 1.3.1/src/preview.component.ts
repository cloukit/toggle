import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'preview',
  template: `
  <div
    class="preview"
    [formGroup]="form"
  >
    <h3>Toggle</h3>
    <table class="demotable">
      <tr>
        <td>Is Schrödingers cat dead?</td>
        <td>
          <cloukit-toggle
            formControlName="isCatDead"
          ></cloukit-toggle>
        </td>
      </tr>
      <tr>
        <td>Are you sure? (different theme)</td>
        <td>
          <cloukit-toggle
            formControlName="areYouSure"
            theme="toggle--cornered"
          ></cloukit-toggle>
        </td>
      </tr>
      <tr>
        <td>Disabled states:</td>
        <td>
          <cloukit-toggle
            formControlName="youCantTouchThisOff"
          ></cloukit-toggle>

          <cloukit-toggle
            formControlName="youCantTouchThisOn"
          ></cloukit-toggle>

          <br><br>

          <cloukit-toggle
            formControlName="youCantTouchThisOffAlt"
            theme="toggle--cornered"
          ></cloukit-toggle>

          <cloukit-toggle
            formControlName="youCantTouchThisOnAlt"
            theme="toggle--cornered"
          ></cloukit-toggle>
        </td>
      </tr>
    </table>

    <hr><br>

    Reactive Form Result:
    <pre>{{getFormResult()}}</pre>

  </div>`,
  styles: [
    '.preview { font-family:sans-serif' ,
    '.demotable td { vertical-align:top; padding-bottom:15px; padding-right:10px; }',
  ],
})
export class PreviewComponent {
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
