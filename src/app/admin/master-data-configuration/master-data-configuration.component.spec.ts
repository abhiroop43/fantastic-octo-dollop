import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataConfigurationComponent } from './master-data-configuration.component';

describe('MasterDataConfigurationComponent', () => {
  let component: MasterDataConfigurationComponent;
  let fixture: ComponentFixture<MasterDataConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDataConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
