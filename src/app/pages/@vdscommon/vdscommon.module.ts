import { NgModule, ModuleWithProviders } from '@angular/core';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe } from './pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BpmenuComponent } from './layout';
import { BpFooterComponent } from './layout/footer.component';

const PIPS = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe
]

const COMMON_COMPONENTS = [
  BpmenuComponent,
  BpFooterComponent
]

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [
    ...BASE_MODULES
  ],
  declarations: [
    ...PIPS, ...COMMON_COMPONENTS
  ],
  exports: [
    ...COMMON_COMPONENTS, ...PIPS, ...BASE_MODULES
  ]
})
export class VdsCommonModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: VdsCommonModule,
      providers: []
    };
  }
}
