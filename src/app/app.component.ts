import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'http://localhost:8080/extrato/main-es2015.js';
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script.src = 'http://localhost:8080/pagamento/main-es2015.js';
    document.body.appendChild(script2);
  }
}
