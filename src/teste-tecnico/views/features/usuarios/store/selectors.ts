import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UsuarioState} from "./types/usuario-state";
import {usuarioFeatureKey} from "./reducers";

export const usuarioFeatureSelector =
    createFeatureSelector<UsuarioState>(usuarioFeatureKey)

export const selectUsuario = createSelector(
    usuarioFeatureSelector,
    (state) => state)

export const selectErroCriarUsuario = createSelector(
    usuarioFeatureSelector,
    (state) => state.error)

export const selectIsCriandoUsuario = createSelector(
    usuarioFeatureSelector,
    (state) => state.loading)

