import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app-component/app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideHttpClient, withFetch } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],

})
export class AppModule { }
