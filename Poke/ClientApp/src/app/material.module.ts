import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule,
  // ],
  exports:[
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
  ]
})
export class MaterialModule { }
