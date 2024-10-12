import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {CriarUsuarioRequest} from "../../models/requests/criar-usuario.request";
import {CriarUsuarioResponse} from "../../models/responses/criar-usuario.response";

export const criarUsuarioAction = createAction(ActionTypes.CRIAR_USUARIO, props<{ usuario: CriarUsuarioRequest }>());

export const criarUsuarioSucessoAction = createAction(ActionTypes.CRIAR_USUARIO_SUCCESSO, props<{ usuarioResponse: CriarUsuarioResponse }>());

export const criarUsuarioErroAction = createAction(ActionTypes.CRIAR_USUARIO_ERRO, props<{ error: string }>());

export const fecharAlertaCriacaoUsuarioAction = createAction(ActionTypes.FECHAR_ALERTA_CRIACAO_USUARIO);