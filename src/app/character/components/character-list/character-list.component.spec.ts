import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { dataMock, marvelDataMock } from 'src/app/shared/mocks/data-mock/marvel.mock';
import { CharacterServiceMock } from 'src/app/shared/mocks/services-mock/character-service.mock';
import { ComicServiceMock } from 'src/app/shared/mocks/services-mock/comic-service.mock';
import { CharacterService } from 'src/app/shared/services/character-service/character.service';
import { ComicService } from 'src/app/shared/services/comic-service/comic.service';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  const characterServiceMock = new CharacterServiceMock();
  const comicServiceMock = new ComicServiceMock()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ],
      imports: [FormsModule],
      providers: [
        { provide: CharacterService, useValue: characterServiceMock },
        { provide: ComicService, useValue: comicServiceMock}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.suscriber$.unsubscribe();
  });

  describe('Method [getAllCharacters]', () => {
    it('Should be call getCharacters of character service and save request information in marvelData and Character List', fakeAsync(() => {
      const offfset = '10';
      const limit = '10';
      const orderBy = 'normal';
      const marvelMock = {...marvelDataMock};
      const spyGetCharacters = spyOn(characterServiceMock, 'getCharacters').and.returnValue(of(marvelMock))
      const spySetFilterIndex = spyOn(component, 'setFilterIndex');

      component.getAllCharacters(offfset, limit, orderBy).subscribe(
        () => {
          expect(component.marvelData).toEqual(marvelMock);
          expect(component.characterList).toEqual(marvelMock.data.results);
          expect(spyGetCharacters).toHaveBeenCalled();
          expect(spySetFilterIndex).toHaveBeenCalled();
        }
      );
    }))
  })

  describe('Method [listenerCharacterSearch]', () => {

    afterEach( () => {
      component.suscriber$.unsubscribe();
    })

    it('Should be call getCharacterSearch and skip the first resolve observable call', fakeAsync(() => {
      const marvelMock = {...marvelDataMock};
      component.characterName = undefined;
      const spyGetCharacterSearch = spyOn(characterServiceMock, 'getCharacterSearch').and.returnValue(of(''));
      const spyGetAllCharacters = spyOn(component, 'getAllCharacters').and.returnValue(of(marvelMock))

      component.listenerCharacterSearch();

      expect(spyGetCharacterSearch).toHaveBeenCalled();
      expect(spyGetAllCharacters).not.toHaveBeenCalled();
      expect(component.characterName).toBeUndefined();
    }));

    it('Should be call getCharacterSearch and call after getAllCharacters two observable calls, and set value to characterName variable', fakeAsync(() => {
      component.characterName = undefined;
      const marvelMock = {...marvelDataMock};
      const characterName = 'Name';
      const spyGetCharacterSearch = spyOn(characterServiceMock, 'getCharacterSearch').and.returnValues(of('', characterName));
      const spyGetAllCharacters = spyOn(component, 'getAllCharacters').and.returnValue(of(marvelMock))

      component.listenerCharacterSearch();

      expect(spyGetCharacterSearch).toHaveBeenCalled();
      expect(spyGetAllCharacters).toHaveBeenCalled();
      expect(component.characterName).toBe(characterName);
    }))
  })

  describe('Method [onChangeFilter]', () => {
    it('Should be call getAllCharacters when onChangeFilter called it.', () => {
      const marvelMock = {...marvelDataMock};
      const spyGetAllCharacters = spyOn(component, 'getAllCharacters').and.returnValue(of(marvelMock));

      component.onChangeFilter();

      expect(spyGetAllCharacters).toHaveBeenCalled();
    })
  })

  describe('Method [setFilterIndex]', () => {
    it('Should be make all calcs for index about filters and push data if total is greater than offset', () => {
      component.offset = '0';
      component.marvelData = {...marvelDataMock};
      component.filterIndex = [];
      const filterExpect = [1,2,3];

      component.setFilterIndex();

      expect(component.filterIndex).toEqual(filterExpect);
    })

    it('Should be make all calcs for index about filters and it doesn´t push data if total is lower than offset', () => {
      component.offset = '0';
      const dataMarve = {...dataMock, total: 5};
      const filterExpect = [1];
      component.marvelData = {...marvelDataMock, data: dataMarve};
      component.filterIndex = [];

      component.setFilterIndex();

      expect(component.filterIndex).toEqual(filterExpect);
    })
  })
});
