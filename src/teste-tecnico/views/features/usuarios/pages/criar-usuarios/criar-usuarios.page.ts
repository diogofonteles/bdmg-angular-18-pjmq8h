import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HelloComponent} from "../../../../../../app/hello.component";
import {DadosUsuarioFormComponent} from "../../components/dados-usuario-form.component";
import {Store} from "@ngrx/store";
import {CriarUsuarioRequest} from "../../models/requests/criar-usuario.request";
import {DadosUsuarioFormValues} from "../../models/form-types/dados-usuario-form-values.type";
import {selectUsuario, selectErroCriarUsuario, selectIsCriandoUsuario} from "../../store/selectors";
import {consultarCepCriacaoUsuarioAction} from "../../store/actions/consultar-cep.action";
import {criarUsuarioAction, fecharAlertaCriacaoUsuarioAction} from "../../store/actions/criar-usuario.action";
import {EnderecoResponse} from "../../../../../shared/models/responses/endereco.response";
import {map, Observable, of} from "rxjs";

@Component({
    standalone: true,
    selector: 'app-criar-usuarios',
    templateUrl: './criar-usuarios.page.html',
    styleUrls: ['./criar-usuarios.page.scss'],
    imports: [CommonModule, DadosUsuarioFormComponent, HelloComponent]
})
export class CriarUsuariosComponent {
    private store = inject(Store);

    public usuarioSelect = this.store.select(selectUsuario);

    public enderecoResponse: Observable<EnderecoResponse> = this.usuarioSelect.pipe(
        map((usuario) => {
            return {
                cep: usuario.cep || '',
                logradouro: usuario.logradouro || '',
                complemento: usuario.complemento || '',
                unidade: usuario.unidade || '',
                bairro: usuario.bairro || '',
                localidade: usuario.localidade || '',
                uf: usuario.uf || '',
                estado: usuario.estado || '',
                regiao: usuario.regiao || '',
                ibge: usuario.ibge || '',
                gia: usuario.gia || '',
                ddd: usuario.ddd || '',
                siafi: usuario.siafi || ''
            };
        })
    );

    public erroMsg = this.store.selectSignal(selectErroCriarUsuario);

    public isSalvando$ = this.store.select(selectIsCriandoUsuario);

    constructor() {
    }

    public aoConsultarCep(cep: string) {
        this.store.dispatch(consultarCepCriacaoUsuarioAction({cep}));
    }

    public aoSalvar(dadosUsuarioFormValues: DadosUsuarioFormValues) {
        const criarUsuarioRequest = CriarUsuarioRequest.of(dadosUsuarioFormValues);
        this.store.dispatch(criarUsuarioAction({ usuario: criarUsuarioRequest}));
    }

    public fecharAlertaMsgErro() {
        this.store.dispatch(fecharAlertaCriacaoUsuarioAction());
    }
}