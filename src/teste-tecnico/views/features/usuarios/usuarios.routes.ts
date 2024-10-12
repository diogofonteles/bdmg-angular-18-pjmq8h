import { Routes } from "@angular/router";
import { CriarUsuariosComponent } from "./pages/criar-usuarios/criar-usuarios.page";
import { usuarioFeatureKey, usuarioReducer } from "./store/reducers";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { UsuariosService } from "./services/usuarios.service";
import { EFFECTS } from ".";

export const USUARIOS_ROUTES: Routes = [
  {
    path: '',
    component: CriarUsuariosComponent,
    providers: [
      provideState({
        name: usuarioFeatureKey,
        reducer: usuarioReducer,
      }),
      provideEffects({
        consultaCepEffect: EFFECTS.consultaCepEffect,
        criarUsuarioEffect: EFFECTS.criarUsuarioEffect,
      }),
      UsuariosService,
    ],
  },
];
