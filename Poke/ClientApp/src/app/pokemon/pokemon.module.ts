import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {HttpClient} from "@angular/common/http";
import {PokemonService} from "./services/pokemon.service";
import {MaterialModule} from "../material.module";


@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MaterialModule,
  ],
  providers: [
    HttpClient,
    PokemonService,
  ]
})
export class PokemonModule {
}
