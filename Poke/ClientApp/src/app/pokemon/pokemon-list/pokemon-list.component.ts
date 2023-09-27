import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {MatTableDataSource} from "@angular/material/table";
import {Pokemon} from "../entities/pokemon";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) readonly paginator!: MatPaginator;

  pokemons: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>();
  columns = ["name"];
  searchName = "";

  constructor(private pokemonService: PokemonService) {
  }

  async ngOnInit(): Promise<void> {
    this.pokemons.filterPredicate = (data, filter) => {
      return data.name.includes(filter);
    };
    this.pokemons.paginator = this.paginator;
    const observable = await this.pokemonService.getPokemons();
    observable.subscribe(value => this.pokemons.data = value.results);
  }

  search() {
    this.pokemons.filter = this.searchName;
  }
}
