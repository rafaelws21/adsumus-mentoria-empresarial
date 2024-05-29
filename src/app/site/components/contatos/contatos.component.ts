import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { hasError } from '../../../shared/utils/functions';
import { ContatosService } from '../../services/contatos.service';
import { EmailModel } from '../../models/email.model';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
  ) {}


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.required],
      email:[null, Validators.compose([Validators.required, Validators.email])],
      telefone: [null, Validators.required],
      mensagem: [null, Validators.required]
    });
  }


  hasError = (controlName: string, errorName: string, form: FormGroup) => {
    return hasError(controlName, errorName, form);
  }

  enviar(event: Event): void {
    event.preventDefault();
    console.log(event)
    if(this.formGroup.invalid){
      return;
    }

    const email: EmailModel = {
      from: { email: 'rafaelwillians21@gmail.com'},
      to: [{email: 'rafaelwillians21@gmail.com'}],
      subject: 'Teste de envio',
      html: JSON.stringify(this.formGroup.value),
      text: JSON.stringify(this.formGroup.value)

    }

    this.contatosService.enviarEmail(email).subscribe({
      next: (sucesso) => {
        console.log(sucesso);
      },
      error: (err) =>  console.error(err),
    });
  }



}
