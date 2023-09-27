import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonList} from "../entities/pokemon-list";
import {firstValueFrom, lastValueFrom} from "rxjs";

@Injectable()
export class PokemonService {
  constructor(private httpClient: HttpClient) {
  }

  private readonly endPoint = "https://pokeapi.co/api/v2/pokemon";


  async getPokemons() {
    const {count} = await firstValueFrom(this.httpClient.get<PokemonList>(this.endPoint));
    return this.httpClient.get<PokemonList>(`${this.endPoint}?limit=${count}`);
  }
}
