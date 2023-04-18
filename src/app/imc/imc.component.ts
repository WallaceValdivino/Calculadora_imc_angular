import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  altura: number = 0;
  peso: number = 0;
  resultado: number =0;
  situacao: string = "";
  sexo : string = "";


  calcularIMC() {

    this.resultado =  this.peso / ( this.altura *  this.altura);


    switch (this.sexo) {
        case "mulher":

            if (this.resultado < 19) {
              this.situacao = "Abaixo do peso";
            }

            else if (this.resultado >= 19 && this.resultado <= 23.9) {
              this.situacao = "Normal";
            }

            else if (this.resultado >= 24 && this.resultado <= 28.9) {
              this.situacao = "Obesidade leve";
            }

            else if (this.resultado >= 29 && this.resultado <= 38.9) {
              this.situacao = "Obesidade moderada";
            }
            else if (this.resultado >= 39) {
              this.situacao = "Obesidade morbida";
            }
            break;

        case "homem":

            if (this.resultado < 20) {
              this.situacao = "Abaixo do peso";
            }

            else if (this.resultado >= 20 && this.resultado <= 24.9) {
              this.situacao = "Normal";
            }

            else if (this.resultado >= 25 && this.resultado <= 29.9) {
              this.situacao = "Obesidade Leve";
            }

            else if (this.resultado >= 30 && this.resultado <= 39.9) {
              this.situacao = "Obesidade Moderada";
            }
            else if (this.resultado >= 40) {
              this.situacao = "Obesidade Morbida";
            }
            break;
    }

}
}
