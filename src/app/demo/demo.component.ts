import { Component } from '@angular/core';

@Component({
  selector: 'cloukit-demo',
  templateUrl: './demo.component.html',
  styles: [ '.demo { padding:10px; font-family:sans-serif; }'],
})
export class DemoComponent {
  public static sharedStyles = [
    '.row { display: flex; align-items:center; }',
    '.label { width:250px; margin-right:10px; }',
    '.superButton--ml { margin-left:50px; }',
    `.superButton { border:2px solid #710ECC; outline:0; background-color:#710ECC; color:#fff;
      border-radius:0px; padding:4px 8px 4px 8px; color:#fff; cursor:pointer; font-size:1rem; }`,
    '.superButton:hover, .superButtonSecondary:hover { border:2px solid #710ECC; background-color:#fff; color:#710ECC;  }',
  ];
}
