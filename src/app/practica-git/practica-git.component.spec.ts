import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaGitComponent } from './practica-git.component';

describe('PracticaGitComponent', () => {
  let component: PracticaGitComponent;
  let fixture: ComponentFixture<PracticaGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticaGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
