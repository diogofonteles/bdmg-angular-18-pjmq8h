import {Injectable} from "@angular/core";
import {CriarUsuarioRequest} from "../models/requests/criar-usuario.request";
import {CriarUsuarioResponse} from "../models/responses/criar-usuario.response";
import {Observable, of} from "rxjs";

@Injectable()
export class UsuariosService {
    constructor() {
    }

    public criarUsuario(
        usuarioRequest: CriarUsuarioRequest
    ): Observable<CriarUsuarioResponse> {
        const request = CriarUsuarioRequest.of(usuarioRequest);
        const response: CriarUsuarioResponse = {
            nome: request.nome,
            email: request.email,
            endereco: {
                cep: request.cep,
                logradouro: request.logradouro,
                complemento: request.complemento,
                unidade: request.unidade,
                bairro: request.bairro,
                localidade: request.localidade,
                uf: request.uf,
                estado: request.estado,
                regiao: request.regiao,
                ibge: request.ibge,
                gia: request.gia,
                ddd: request.ddd,
                siafi: request.siafi
            }
        };
        return of(response);
    }
}