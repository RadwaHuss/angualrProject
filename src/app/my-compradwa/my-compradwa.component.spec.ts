import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompradwaComponent } from './my-compradwa.component';

describe('MyCompradwaComponentRRRRRRR', () => {
  let component: MyCompradwaComponent;
  let fixture: ComponentFixture<MyCompradwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCompradwaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCompradwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
