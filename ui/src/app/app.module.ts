import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import * as FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import * as FilePondPluginImageResize from 'filepond-plugin-image-resize';
import * as FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import * as FilePondPluginImageCrop from 'filepond-plugin-image-crop';

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginImageCrop, FilePondPluginImageTransform);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    FilePondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
