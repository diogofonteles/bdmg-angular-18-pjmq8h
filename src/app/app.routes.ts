import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full',
    },
    {
        path: 'usuarios',
        loadChildren: () =>
            import('../teste-tecnico/views/features/usuarios/usuarios.routes').then((m) => m.USUARIOS_ROUTES),
    },
];
