import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorslistComponent } from './autorslist.component';

describe('AutorslistComponent', () => {
  let component: AutorslistComponent;
  let fixture: ComponentFixture<AutorslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
