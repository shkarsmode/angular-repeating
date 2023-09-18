import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'pipes', 
        loadChildren: () => 
            import('./pipes-flow/pipes.module').then(m => m.PipesModule)
    },
    {
        path: 'directives', 
        loadChildren: () => 
            import('./directives-flow/directives.module').then(m => m.DirectivesModule)
    },
    {
        path: 'typescipt', 
        loadChildren: () => 
            import('./typescript-flow/typescript.module').then(m => m.TypescriptModule)
    },
    {
        path: '**', redirectTo: 'typescipt'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
