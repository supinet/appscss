import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaDirective } from './pessoa/pessoa.directive';
import { RapidaoComponent } from './rapidao/rapidao.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaDirective,
    RapidaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
