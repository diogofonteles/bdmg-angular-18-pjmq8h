import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import {Observable, Subject, takeUntil} from "rxjs";
import {EnderecoResponse} from "../../../../shared/models/responses/endereco.response";
import {DadosUsuarioFormValues} from "../models/form-types/dados-usuario-form-values.type";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog} from "@angular/material/dialog";
import {DadosSalvosDialogComponent} from "./dados-salvos/dados-salvos-dialog.component";

@Component({
    standalone: true,
    selector: 'app-dados-usuario-form',
    templateUrl: './dados-usuario-form.component.html',
    styleUrls: ['./dados-usuario-form.component.scss'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatGridListModule],
    providers: [provideNgxMask({validation: true})]
})

export class DadosUsuarioFormComponent implements OnInit, OnDestroy {
    private fb = inject(FormBuilder);
    private dialog = inject(MatDialog);

    @Input()
    public isSalvando$: Observable<boolean> | undefined;

    @Output()
    public salvarEvent = new EventEmitter<DadosUsuarioFormValues>();

    @Output()
    public consultarCepEvent = new EventEmitter<string>();

    public dadosUsuarioForm = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', Validators.required],
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        complemento: [''],
        unidade: [''],
        bairro: ['', Validators.required],
        localidade: ['', Validators.required],
        uf: ['', Validators.required],
        estado: ['', Validators.required],
        regiao: ['', Validators.required],
        ibge: [{ value: '', disabled: true }],
        gia: [''],
        ddd: ['', Validators.required],
        siafi: [{ value: '', disabled: true }]
    });

    private destroySubject$ = new Subject();


    constructor() {
    }

    ngOnInit() {
        sessionStorage.removeItem('state');
        this.consultarCep();
    }

    ngOnDestroy() {
        this.destroySubject$.complete();
    }

    public salvar() {
        const dadosSalvos = this.dadosUsuarioForm.value as DadosUsuarioFormValues;
        this.salvarEvent.emit(dadosSalvos);
        this.dialog.open(DadosSalvosDialogComponent, {
            data: dadosSalvos
        })
    }

    public hasError(field: string, error: string): boolean {
        return !!(
            !this.dadosUsuarioForm.get(field)!.valid &&
            this.dadosUsuarioForm.get(field)!.touched &&
            this.dadosUsuarioForm.get(field)?.hasError(error)
        );
    }

    private consultarCep(): void {
        this.dadosUsuarioForm.get('cep')?.valueChanges.subscribe((cep) => {
            if (cep && cep.length === 8) {
                this.consultarCepEvent.emit(cep);
            }
        });
    }

    @Input()
    public set endereco(endereco: Observable<EnderecoResponse | null>) {
        endereco.pipe(takeUntil(this.destroySubject$)).subscribe((endereco) => {
            endereco &&
            this.dadosUsuarioForm.patchValue({
                logradouro: endereco.logradouro,
                complemento: endereco.complemento,
                unidade: endereco.unidade,
                bairro: endereco.bairro,
                localidade: endereco.localidade,
                uf: endereco.uf,
                estado: endereco.estado,
                regiao: endereco.regiao,
                ibge: endereco.ibge,
                gia: endereco.gia,
                ddd: endereco.ddd,
                siafi: endereco.siafi
            });
        });
    }
}