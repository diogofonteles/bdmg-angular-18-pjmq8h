import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ActionReducer, ActionReducerMap, INIT, provideState, provideStore, UPDATE} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideEnvironmentNgxMask} from "ngx-mask";
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import {UsuarioState} from "../teste-tecnico/views/features/usuarios/store/types/usuario-state";
import {usuarioReducer} from "../teste-tecnico/views/features/usuarios/store/reducers";
import { provideStoreDevtools } from '@ngrx/store-devtools';

registerLocaleData(localePt);
const reducers: ActionReducerMap<{ usuario: UsuarioState }> = {
  usuario: usuarioReducer,
};

export const sessionStorageReducer = (
    reducer: ActionReducer<{ usuario: UsuarioState }>
): ActionReducer<{ usuario: UsuarioState }> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = sessionStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          sessionStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    sessionStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideStore(reducers, { metaReducers: [sessionStorageReducer] }),
    provideState({
      name: 'usuario',
      reducer: usuarioReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule), provideAnimationsAsync(),
    provideEffects()
],
};
