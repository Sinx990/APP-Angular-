import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listadestino } from './listadestino';

describe('Listadestino', () => {
  let component: Listadestino;
  let fixture: ComponentFixture<Listadestino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listadestino],
    }).compileComponents();

    fixture = TestBed.createComponent(Listadestino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
