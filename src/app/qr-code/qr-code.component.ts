import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {
  qrData = 'http://localhost:4200/menu'; // Menü sayfası linki
}
