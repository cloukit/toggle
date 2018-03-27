import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [],
})
export class DemoComponent {
  public static sharedStyles = [
    '.row { display: flex; align-items:center; }',
    '.row span { margin-right:10px; }',
    '.row button { margin-left:50px; }',
    '.superButton, .superButtonSecondary { border:2px solid #710ECC; outline:0; background-color:#710ECC; color:#fff; border-radius:0px; padding:4px 8px 4px 8px; color:#fff; cursor:pointer; font-size:1rem; }',
    '.superButton:hover, .superButtonSecondary:hover { border:2px solid #710ECC; background-color:#fff; color:#710ECC;  }',
  ]
}
