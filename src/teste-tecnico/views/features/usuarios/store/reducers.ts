import {createFeature, createReducer, on} from "@ngrx/store";
import {UsuarioState} from "./types/usuario-state";
import {
    consultarCepCriacaoUsuarioAction, consultarCepCriacaoUsuarioErroAction,
    consultarCepCriacaoUsuarioSucessoAction
} from "./actions/consultar-cep.action";
import {
    criarUsuarioAction,
    criarUsuarioErroAction,
    criarUsuarioSucessoAction,
    fecharAlertaCriacaoUsuarioAction
} from "./actions/criar-usuario.action";

export const initialState: UsuarioState = {
    loading: false,
    isConsultandoCep: false,
    error: null,
    success: false,
    nome: null,
    email: null,
    cep: null,
    logradouro: null,
    complemento: null,
    unidade: null,
    bairro: null,
    localidade: null,
    uf: null,
    estado: null,
    regiao: null,
    ibge: null,
    gia: null,
    ddd: null,
    siafi: null,
}
const usuarioFeature = createFeature({
    name: 'usuarios',
    reducer: createReducer(initialState,
        on(consultarCepCriacaoUsuarioAction, (state, action) => ({
            ...state,
            cep: action.cep,
            isConsultandoCep: true,
            erroCriarUsuario: null,
        })),
        on(consultarCepCriacaoUsuarioSucessoAction, (state, action) => ({
            ...state,
            cep: action.endereco.cep,
            logradouro: action.endereco.logradouro,
            complemento: action.endereco.complemento,
            unidade: action.endereco.unidade,
            bairro: action.endereco.bairro,
            localidade: action.endereco.localidade,
            uf: action.endereco.uf,
            estado: action.endereco.estado,
            regiao: action.endereco.regiao,
            ibge: action.endereco.ibge,
            gia: action.endereco.gia,
            ddd: action.endereco.ddd,
            siafi: action.endereco.siafi,
            isConsultandoCep: false,
            erroCriarUsuario: null,
        })),
        on(consultarCepCriacaoUsuarioErroAction, (state, action) => ({
            ...state,
            isConsultandoCep: false,
            erroCriarUsuario: null,
        })),
        on(criarUsuarioAction, (state, action) => ({
            ...state,
            isCriandoUsuario: true,
            erroCriarUsuario: null,
        })),
        on(criarUsuarioSucessoAction, (state, action) => ({
            ...state,
            isCriandoUsuario: false,
            usuario: action.usuarioResponse,
            erroCriarUsuario: null,
        })),
        on(criarUsuarioErroAction, (state, action) => ({
            ...state,
            isCriandoUsuario: false,
            erroCriarUsuario: action.error,
        })),
        on(fecharAlertaCriacaoUsuarioAction, (state, action) => ({
            ...state,
            erroCriarUsuario: null,
        })),
    ),
});

export const {name: usuarioFeatureKey, reducer: usuarioReducer} =
    usuarioFeature;