import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SizerComponent } from './sizer/sizer.component';
import {FormsModule} from '@angular/forms';
import { ItemDetailComponent } from './Input-Output/item-detail/item-detail.component';
import { ItemOutputComponent } from './Input-Output/item-output/item-output.component';
import { InputOutputComponent } from './Input-Output/input-output/input-output.component';
import { InTheMetadataComponent } from './Input-Output/in-the-metadata/in-the-metadata.component';
import { AliasingComponent } from './Input-Output/aliasing/aliasing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SizerComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    AliasingComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
