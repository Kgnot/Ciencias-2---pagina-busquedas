import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSearchPage } from './range-search.page';

describe('RangeSearchPage', () => {
  let component: RangeSearchPage;
  let fixture: ComponentFixture<RangeSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeSearchPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
