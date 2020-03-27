import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about-page.component';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AboutPageComponent,
        AboutExtraPageComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AboutPageComponent, children: [
                {path: 'extra', component: AboutExtraPageComponent}
            ]},
        ])
    ],
})
export class AboutPageModule {

}
