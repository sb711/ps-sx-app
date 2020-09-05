// core modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// third-part modules
import { LazyLoadImageModule } from 'ng-lazyload-image';

// custom modules
import { LaunchProgramRoutingModule } from './launch-program-routing.module';

// components
import { LaunchProgramComponent } from './launch-program.component';
import { LaunchProgramPageComponent } from './pages/launch-program-page/launch-program-page.component';
import { LaunchProgramContentComponent } from './components/launch-program-content/launch-program-content.component';
import { LaunchProgramFiltersComponent } from './components/launch-program-filters/launch-program-filters.component';


@NgModule({
    declarations: [
        LaunchProgramComponent,
        LaunchProgramPageComponent,
        LaunchProgramContentComponent,
        LaunchProgramFiltersComponent
    ],
    imports: [
        CommonModule,
        LazyLoadImageModule,
        LaunchProgramRoutingModule
    ],
    exports: [
        LaunchProgramComponent
    ],
})
export class LaunchProgramModule { }
