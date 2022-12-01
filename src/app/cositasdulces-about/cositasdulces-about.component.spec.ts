import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CositasdulcesAboutComponent } from './cositasdulces-about.component';

describe('CositasdulcesAboutComponent', () => {
  let component: CositasdulcesAboutComponent;
  let fixture: ComponentFixture<CositasdulcesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CositasdulcesAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CositasdulcesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
