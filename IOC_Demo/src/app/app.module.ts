import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsService } from './signals.service';
import { SinkService } from './sink.service';
import { SourceService } from './source.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SignalsService,SourceService,SinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
