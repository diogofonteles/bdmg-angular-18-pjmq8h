import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {EnderecoResponse} from "../models/responses/endereco.response";

@Injectable({
    providedIn: 'root',
})
export class CepService {
    constructor(private httpClient: HttpClient) {}

    obtemEndereco(cep: string): Observable<EnderecoResponse> {
        return this.httpClient.get<EnderecoResponse>(
            `https://viacep.com.br/ws/${cep}/json/`
        );
    }
}
