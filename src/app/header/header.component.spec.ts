import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterServiceMock } from '../shared/mocks/services-mock/character-service.mock';
import { CharacterService } from '../shared/services/character-service/character.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const characterServiceMock = new CharacterServiceMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{provide: CharacterService, useValue: characterServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
