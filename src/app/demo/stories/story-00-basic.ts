import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DemoComponent } from '../demo.component';

@Component({
  selector: 'cloukit-story-00-basic',
  templateUrl: './story-00-basic.html',
  styles: [ ].concat(DemoComponent.sharedStyles),
})
export class Story00Component {

  public isFormDisabled = false;

  public form = new FormGroup({
    isCatDead: new FormControl(false)
  });

  public toggleFormDisabled() {
    if (this.isFormDisabled) {
      this.form.enable();
      this.isFormDisabled = false;
    } else {
      this.form.disable();
      this.isFormDisabled = true;
    }
  }
}
