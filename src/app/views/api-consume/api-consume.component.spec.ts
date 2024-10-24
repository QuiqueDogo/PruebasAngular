import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConsumeComponent } from './api-consume.component';

describe('ApiConsumeComponent', () => {
  let component: ApiConsumeComponent;
  let fixture: ComponentFixture<ApiConsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiConsumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
