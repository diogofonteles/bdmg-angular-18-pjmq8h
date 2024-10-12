import {EnderecoResponse} from "../../../../../shared/models/responses/endereco.response";

export type UsuarioState = {
    loading: boolean;
    isConsultandoCep: boolean;
    error: string | null;
    success: boolean;
    nome: string | null;
    email: string | null;
    cep: string | null;
    logradouro: string | null;
    complemento: string | null;
    unidade: string | null;
    bairro: string | null;
    localidade: string | null;
    uf: string | null;
    estado: string | null;
    regiao: string | null;
    ibge: string | null;
    gia: string | null;
    ddd: string | null;
    siafi: string | null;
}