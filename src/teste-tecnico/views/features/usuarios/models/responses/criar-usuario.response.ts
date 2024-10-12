export interface CriarUsuarioResponse {
    nome: string;
    email: string;
    endereco: {
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
}

export interface CriarUsuarioErrorResponse {
    detail: string
}