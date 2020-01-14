import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTtemComponent } from './todo-ttem.component';

describe('TodoTtemComponent', () => {
  let component: TodoTtemComponent;
  let fixture: ComponentFixture<TodoTtemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTtemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTtemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
