import {validateLength} from '../../../../../shared/helpers/functions.helper';

export class CriarUsuarioRequest {
    constructor(
        private _nome: string,
        private _email: string,
        private _cep: string,
        private _logradouro: string,
        private _complemento: string,
        private _unidade: string,
        private _bairro: string,
        private _localidade: string,
        private _uf: string,
        private _estado: string,
        private _regiao: string,
        private _ibge: string,
        private _gia: string,
        private _ddd: string,
        private _siafi: string
    ) {
    }

    public get nome(): string {
        return this._nome;
    }

    public get email(): string {
        return this._email;
    }

    public get cep(): string {
        return this._cep;
    }

    public get logradouro(): string {
        return this._logradouro;
    }

    public get complemento(): string {
        return this._complemento;
    }

    public get unidade(): string {
        return this._unidade;
    }

    public get bairro(): string {
        return this._bairro;
    }

    public get localidade(): string {
        return this._localidade;
    }

    public get uf(): string {
        return this._uf;
    }

    public get estado(): string {
        return this._estado;
    }

    public get regiao(): string {
        return this._regiao;
    }

    public get ibge(): string {
        return this._ibge;
    }

    public get gia(): string {
        return this._gia;
    }

    public get ddd(): string {
        return this._ddd;
    }

    public get siafi(): string {
        return this._siafi;
    }

    public static of({ nome, email, cep, logradouro, complemento, unidade, bairro, localidade, uf, estado, regiao, ibge, gia, ddd, siafi }: CriarUsuario) {
        validateLength(nome, 3, 'nome deve ter no mínimo 3 caracteres');
        validateLength(cep, 8, 'CEP deve ter no mínimo 8 caracteres');

        return new CriarUsuarioRequest(nome, email, cep, logradouro, complemento, unidade, bairro, localidade, uf, estado, regiao, ibge, gia, ddd, siafi);
    }

}

type CriarUsuario = {
    nome: string;
    email: string;
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
};
