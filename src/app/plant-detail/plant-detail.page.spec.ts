import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantDetailPage } from './plant-detail.page';

describe('PlantDetailPage', () => {
  let component: PlantDetailPage;
  let fixture: ComponentFixture<PlantDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlantDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
