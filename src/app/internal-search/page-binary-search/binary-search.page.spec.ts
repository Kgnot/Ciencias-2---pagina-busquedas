import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarySearchPage } from './binary-search.page';

describe('BinarySearchPage', () => {
  let component: BinarySearchPage;
  let fixture: ComponentFixture<BinarySearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinarySearchPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinarySearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
