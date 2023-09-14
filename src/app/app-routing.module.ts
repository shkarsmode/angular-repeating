import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'pipes',
        loadChildren: () =>
            import('./pipes-flow/pipes.module').then((m) => m.PipesModule),
    },
    {
        path: '**',
        redirectTo: 'pipes',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
