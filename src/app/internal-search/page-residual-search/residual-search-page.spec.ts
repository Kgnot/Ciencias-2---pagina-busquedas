import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidualSearchPage } from './residual-search-page';

describe('ResidualSearchPage', () => {
  let component: ResidualSearchPage;
  let fixture: ComponentFixture<ResidualSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidualSearchPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidualSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
