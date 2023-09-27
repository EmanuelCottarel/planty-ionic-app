import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantListPage } from './plant-list.page';

describe('PlantListPage', () => {
  let component: PlantListPage;
  let fixture: ComponentFixture<PlantListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlantListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
