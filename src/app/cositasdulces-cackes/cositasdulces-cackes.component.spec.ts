import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CositasdulcesCackesComponent } from './cositasdulces-cackes.component';

describe('CositasdulcesCackesComponent', () => {
  let component: CositasdulcesCackesComponent;
  let fixture: ComponentFixture<CositasdulcesCackesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CositasdulcesCackesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CositasdulcesCackesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
