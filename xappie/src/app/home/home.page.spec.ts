import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageModule } from './home.page';

describe('HomePage', () => {
  let component: HomePageModule;
  let fixture: ComponentFixture<HomePageModule>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
