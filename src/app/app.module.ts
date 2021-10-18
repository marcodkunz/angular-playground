import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/root/app.component';
import {TodoInputComponent} from './components/todo-input/todo-input.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ParentComponentComponent} from './components/parent-component/parent-component.component';
import {ChildComponentComponent} from './components/child-component/child-component.component';
import {AnimalsComponent} from './components/animals/animals.component';
import {AnimalsPipe} from './pipes/animals.pipe';
import {HttpClientModule} from "@angular/common/http";
import { JokeComponent } from './components/joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    AnimalsComponent,
    AnimalsPipe,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
