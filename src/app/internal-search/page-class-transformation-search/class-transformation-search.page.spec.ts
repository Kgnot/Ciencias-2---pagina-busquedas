import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTransformationSearchPage } from './class-transformation-search.page';

describe('ClassTransformationSearchPage', () => {
  let component: ClassTransformationSearchPage;
  let fixture: ComponentFixture<ClassTransformationSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTransformationSearchPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassTransformationSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
