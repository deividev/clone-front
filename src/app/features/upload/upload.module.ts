
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadComponent } from './components/upload/upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { FormsModule } from '@angular/forms';
import { ImageCardComponent } from './components/image-card/image-card.component';

import { DragDropDirective } from '../../directives/drag-drop.directive';
import { FormUploadComponent } from './components/form-upload/form-upload.component';
import { TagComponent } from './components/tag/tag.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UploadComponent,
    ImagesListComponent,
    ImageCardComponent,
    DragDropDirective,
    FormUploadComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UploadRoutingModule,
    FormsModule
  ],
  exports: [
    UploadComponent,
    DragDropDirective,
  ]
})
export class UploadModule { }
