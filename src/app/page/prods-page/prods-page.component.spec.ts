import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdsPageComponent } from './prods-page.component';

describe('ProdsPageComponent', () => {
  let component: ProdsPageComponent;
  let fixture: ComponentFixture<ProdsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
