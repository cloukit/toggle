import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitToggleComponent } from './toggle.component';

describe('CloukitToggleComponent', () => {
  let component: CloukitToggleComponent;
  let fixture: ComponentFixture<CloukitToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitToggleComponent ],
      imports: [ CloukitThemeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
