import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RMTable } from './rm-table';

describe('RMTable', () => {
  let component: RMTable;
  let fixture: ComponentFixture<RMTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RMTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RMTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
