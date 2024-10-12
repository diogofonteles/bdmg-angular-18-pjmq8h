import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CepService } from "../../../../../shared/services/cep.service";
import {
  consultarCepCriacaoUsuarioAction,
  consultarCepCriacaoUsuarioErroAction,
  consultarCepCriacaoUsuarioSucessoAction,
} from "../actions/consultar-cep.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { EnderecoResponse } from "../../../../../shared/models/responses/endereco.response";
import { HttpErrorResponse } from "@angular/common/http";

export const consultaCepEffect = createEffect(() => consultaCep(), {
  functional: true,
});

const consultaCep = (
  actions$ = inject(Actions),
  cepService = inject(CepService)
) => {
  return actions$.pipe(
    ofType(consultarCepCriacaoUsuarioAction),
    exhaustMap(({ cep }) =>
      cepService.obtemEndereco(cep).pipe(
        map((enderecoResponse: EnderecoResponse) => {
          return consultarCepCriacaoUsuarioSucessoAction({
            endereco: enderecoResponse,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          return of(
            consultarCepCriacaoUsuarioErroAction({ erro: error.message })
          );
        })
      )
    )
  );
};
