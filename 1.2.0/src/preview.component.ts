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

    Name of the cat: <br>
    <input
      type="text"
      formControlName="cat"
      [ngStyle]="styles.base"
    />
    <br><br>

    Is the cat dead? <br><br>
    <cloukit-toggle
      formControlName="isCatDead"
    ></cloukit-toggle>

    <br><br><hr><br><br>

    Reactive Form Result:
    <pre>{{getFormResult()}}</pre>

  </div>`,
  styles: [ '.preview { font-family:sans-serif' ],
})
export class PreviewComponent {
  styles = { };
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      cat: 'Schrödingers',
      isCatDead: false
    });

    this.styles.base = {
      color: '#000',
      borderWidth: '3px',
      borderStyle: 'solid',
      width: '300px',
      padding: '8px',
    };
  }

  getFormResult() {
    return JSON.stringify(this.form.value, null, 2);
  }
}
