import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicModelsComponent } from './clinic-models.component';

describe('ClinicModelsComponent', () => {
  let component: ClinicModelsComponent;
  let fixture: ComponentFixture<ClinicModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicModelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
