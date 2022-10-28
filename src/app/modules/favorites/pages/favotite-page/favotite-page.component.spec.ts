import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavotitePageComponent } from './favotite-page.component';

describe('FavotitePageComponent', () => {
  let component: FavotitePageComponent;
  let fixture: ComponentFixture<FavotitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavotitePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavotitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
