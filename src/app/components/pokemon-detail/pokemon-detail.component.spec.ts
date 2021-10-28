import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of } from 'rxjs';
describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  const mockRoute: any = {
    snapshot: {
      data: {
        id: 2,
      },
    },
  };

  let service: PokemonService;
  let mockData: any = {
    abilities: [],
    base_experience: 62,
    forms: [],
    game_indices: [],
    height: 1,
    held_items: [],
    id: 854,
    is_default: true,
    location_area_encounters:
      'https://pokeapi.co/api/v2/pokemon/854/encounters',
    moves: [],
    name: 'sinistea',
    order: -1,
    past_types: [],
    species: {
      name: 'sinistea',
      url: 'https://pokeapi.co/api/v2/pokemon-species/854/',
    },
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png',
        },
      },
    },
    stats: [],
    types: [],
    weight: 2,
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [PokemonDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            provide: ActivatedRoute,
            useValue: {
              params: of({ id: 123 }),
            },
          },
        },
      ],
    }).compileComponents();
    service = TestBed.inject(PokemonService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
