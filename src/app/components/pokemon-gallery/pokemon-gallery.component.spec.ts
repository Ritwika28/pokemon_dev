import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonGalleryComponent } from './pokemon-gallery.component';
import { PokemonService } from '../../services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {
  POKEMON_MOCKS_TOTAL,
  POKEMON_MOCKS_INDEX,
} from '../../shared/pokemon.mock';
describe('PokemonGalleryComponent', () => {
  let component: PokemonGalleryComponent;
  let fixture: ComponentFixture<PokemonGalleryComponent>;
  let service: PokemonService;
  let router: Router;
  let navigateSpy: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PokemonGalleryComponent],
    }).compileComponents();
    service = TestBed.inject(PokemonService);
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemonList', () => {
    fixture.detectChanges();
    service.getPokemonsTotal().subscribe((data) => {
      expect(data).toBe(POKEMON_MOCKS_TOTAL);
    });
  });

  it('should filter the dataSource', () => {
    fixture.detectChanges();
    component.nameFilter.setValue('Bulbasaur');
    expect(component.filteredValues).toEqual({
      name: component.nameFilter.value,
      abilities: '',
    });
  });

  it('redirect Detail', () => {
    navigateSpy('/detail/1');
  });
});
