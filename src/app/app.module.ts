import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './shared/components/tables/tables.component';
import { ListsComponent } from './shared/components/lists/lists.component';
import { PropertyBindingComponent } from './shared/components/property-binding/property-binding.component';
import { StringInterpolationComponent } from './shared/components/string-interpolation/string-interpolation.component';
import { EventDataBaindingComponent } from './shared/components/event-data-bainding/event-data-bainding.component';
import { TwoWaysDataBaindingComponent } from './shared/components/two-ways-data-bainding/two-ways-data-bainding.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    ListsComponent,
    PropertyBindingComponent,
    StringInterpolationComponent,
    EventDataBaindingComponent,
    TwoWaysDataBaindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
