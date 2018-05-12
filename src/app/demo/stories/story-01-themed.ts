import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitToggleComponentThemeDefault } from '../../../../projects/cloukit/toggle/src/public_api';

export class AwesomeToggleTheme extends CloukitToggleComponentThemeDefault {
  constructor() {
    super();
    const wrapperUntoggledBase = this.getElementTheme('wrapper', 'toggled', 'base');
    wrapperUntoggledBase.styleDef.style.backgroundColor = 'blue';
  }
}

@Component({
  selector: 'cloukit-story-01-themed',
  templateUrl: './story-01-themed.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story01Component {

  public form = new FormGroup({
    myBool: new FormControl(false),
    myBoolTwo: new FormControl(true),
  });

  constructor(private cloukitThemeService: CloukitThemeService) {
    this.cloukitThemeService.registerComponentTheme('toggle--awesome', new AwesomeToggleTheme());
  }

}
