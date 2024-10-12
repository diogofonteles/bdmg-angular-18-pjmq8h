import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, exhaustMap, map, of, tap } from "rxjs";

import {
  criarUsuarioAction,
  criarUsuarioErroAction,
  criarUsuarioSucessoAction,
} from "../actions/criar-usuario.action";
import { UsuariosService } from "../../services/usuarios.service";
import { CriarUsuarioResponse } from "../../models/responses/criar-usuario.response";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

export const criarUsuarioEffect = createEffect(() => criarUsuario(), {
  functional: true,
});

const criarUsuario = (
  actions$ = inject(Actions),
  usuarioService = inject(UsuariosService)
) => {
  return actions$.pipe(
    ofType(criarUsuarioAction),
    exhaustMap(({ usuario }) =>
      usuarioService.criarUsuario(usuario).pipe(
        map((usuarioResponse: CriarUsuarioResponse) => {
          console.log("usuarioResponse", usuarioResponse);
          return criarUsuarioSucessoAction({
            usuarioResponse: usuarioResponse,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          console.log("error", error);

          return of(criarUsuarioErroAction({ error: error.error.detail }));
        })
      )
    )
  );
};

export const redirecionaAposCriarUsuarioEffect = createEffect(
  () => redirecionaAposCriarUsuario(),
  {
    functional: true,
    dispatch: false,
    useEffectsErrorHandler: true,
  }
);

const redirecionaAposCriarUsuario = (
  actions$ = inject(Actions),
  router = inject(Router)
) => {
  return actions$.pipe(
    ofType(criarUsuarioSucessoAction),
    tap(() => {
      router.navigate(["interno/usuarios/novo-usuario-identidade-visual"]);
    })
  );
};
