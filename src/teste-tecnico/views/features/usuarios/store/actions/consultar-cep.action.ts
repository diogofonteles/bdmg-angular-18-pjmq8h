import { EnderecoResponse } from '../../../../../shared/models/responses/endereco.response';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const consultarCepCriacaoUsuarioAction = createAction(ActionTypes.CONSULTAR_CEP_CRIACAO_USUARIO, props<{ cep: string }>());
export const consultarCepCriacaoUsuarioSucessoAction = createAction(
    ActionTypes.CONSULTAR_CEP_CRIACAO_USUARIO_SUCCESSO,
    props<{ endereco: EnderecoResponse }>()
);

export const consultarCepCriacaoUsuarioErroAction = createAction(ActionTypes.CONSULTAR_CEP_CRIACAO_USUARIO_ERRO, props<{ erro: string }>());
