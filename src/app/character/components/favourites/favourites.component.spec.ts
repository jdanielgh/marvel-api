import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicServiceMock } from 'src/app/shared/mocks/services-mock/comic-service.mock';
import { ComicService } from 'src/app/shared/services/comic-service/comic.service';

import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;
  const comicServiceMock = new ComicServiceMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesComponent ],
      providers: [
        { provide: ComicService, useValue: comicServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
