import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContatosService } from '../../services/contatos.service';
import { LayoutService } from '../../../shared/services/layout.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrl: './questionario.component.scss'
})
export class QuestionarioComponent implements OnInit {

  onMobile$!: Observable<boolean>;

  pergunta1!: FormGroup;
  pergunta2!: FormGroup;
  pergunta3!: FormGroup;
  pergunta4!: FormGroup;
  pergunta5!: FormGroup;
  pergunta6!: FormGroup;
  pergunta7!: FormGroup;
  pergunta8!: FormGroup;
  pergunta9!: FormGroup;
  pergunta10!: FormGroup;
  pergunta11!: FormGroup;
  pergunta12!: FormGroup;
  pergunta13!: FormGroup;
  pergunta14!: FormGroup;
  pergunta15!: FormGroup;
  pergunta16!: FormGroup;
  pergunta17!: FormGroup;
  pergunta18!: FormGroup;
  pergunta19!: FormGroup;
  pergunta20!: FormGroup;
  pergunta21!: FormGroup;
  pergunta22!: FormGroup;
  pergunta23!: FormGroup;
  pergunta24!: FormGroup;
  pergunta25!: FormGroup;

  resultado = 0
  respValor1 = 0;
  respValor2 = 0;
  respValor3 = 0;

  displayedColumns: string[] = ['pontos', 'classificacao'];

  listaResultado = [
    {pontos: 'Até 30', classificacao: 'Infantilizado'},
    {pontos: '31 a 40', classificacao: 'Em amadurecimento'},
    {pontos: '41 a 54', classificacao: 'Fase final de amadurecimento'},
    {pontos: '55 a 65', classificacao: 'Amadurecido'},
    {pontos: '66 a 75', classificacao: 'Sábio'},
  ]

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private layoutService: LayoutService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.onMobile$ = this.layoutService.onMobile();
  }

  initForm(): void {
    this.pergunta1 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta2 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta3 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta4 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta5 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta6 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta7 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta8 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta9 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta10 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta11 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta12 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta13 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta14 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta15 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta16 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta17 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta18 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta19 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta20 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta21 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta22 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta23 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta24 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

    this.pergunta25 = this.formBuilder.group({
      resposta: [null, Validators.required],
    });

  }


  calcular(stepper: MatStepper ): void {

    const respostas = [
      this.pergunta1.value,
      this.pergunta2.value,
      this.pergunta3.value,
      this.pergunta4.value,
      this.pergunta5.value,
      this.pergunta6.value,
      this.pergunta7.value,
      this.pergunta8.value,
      this.pergunta9.value,
      this.pergunta10.value,
      this.pergunta11.value,
      this.pergunta12.value,
      this.pergunta13.value,
      this.pergunta14.value,
      this.pergunta15.value,
      this.pergunta16.value,
      this.pergunta17.value,
      this.pergunta18.value,
      this.pergunta19.value,
      this.pergunta20.value,
      this.pergunta21.value,
      this.pergunta22.value,
      this.pergunta23.value,
      this.pergunta24.value,
      this.pergunta25.value,
    ];


    respostas.forEach((resp) => {
      if(resp.resposta == 1){
        this.respValor1 += 1;
      }
      if(resp.resposta == 2){
        this.respValor2 += 2;
      }
      if(resp.resposta == 3){
        this.respValor3 += 3;
      }
      this.resultado = this.respValor1 + this.respValor2  + this.respValor3 ;
    });




  }

}
