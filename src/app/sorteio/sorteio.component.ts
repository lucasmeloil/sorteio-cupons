import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cupom {
  numero: string;
  qrCodeUrl: string;
  cadastrado: boolean;
}

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {
  cupons: Cupom[] = [];
  novoCupom: { numero: string } = { numero: '' };
  numeroSorteado: string | null = null; // Variável para armazenar o número sorteado

  ngOnInit(): void {
    this.gerarCupons();
  }

  gerarCupons(): void {
    for (let i = 1; i <= 500; i++) {
      const numeroUnico = this.gerarNumeroUnico();
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(numeroUnico)}&size=200x200`;

      const cupom: Cupom = {
        numero: numeroUnico,
        qrCodeUrl: qrCodeUrl,
        cadastrado: false
      };
      this.cupons.push(cupom);
    }
  }

  gerarNumeroUnico(): string {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  cadastrarCupom(cupom: Cupom): void {
    cupom.cadastrado = true;
    console.log(`Cupom ${cupom.numero} cadastrado.`);
  }

  cadastrarNovoCupom(): void {
    this.cupons.push({
      numero: this.novoCupom.numero,
      qrCodeUrl: `URL_DO_QRCODE_NOVO`, // Substituir pela URL real do QR Code
      cadastrado: true
    });
    console.log(`Novo cupom ${this.novoCupom.numero} cadastrado.`);
    this.novoCupom.numero = '';
  }

  realizarSorteio(): void {
    const cuponsNaoSorteados = this.cupons.filter(cupom => !cupom.cadastrado);

    if (cuponsNaoSorteados.length > 0) {
      const indexSorteado = Math.floor(Math.random() * cuponsNaoSorteados.length);
      const cupomSorteado = cuponsNaoSorteados[indexSorteado];

      cupomSorteado.cadastrado = true;
      this.numeroSorteado = cupomSorteado.numero; // Definindo o número sorteado para exibição na tela
      console.log(`O cupom ${cupomSorteado.numero} foi sorteado.`);
    } else {
      console.log('Todos os cupons já foram sorteados e cadastrados.');
    }
  }
}

@NgModule({
  declarations: [SorteioComponent],
  imports: [CommonModule, FormsModule],
  exports: [SorteioComponent]
})
export class SorteioModule {}
