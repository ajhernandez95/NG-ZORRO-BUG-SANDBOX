import { NgModule } from '@angular/core';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@NgModule({
    imports: [
        NzTimePickerModule
    ],
    exports: [
        NzTimePickerModule
    ]
  })
  export class AntdModule { }