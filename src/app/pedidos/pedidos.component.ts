import { Component, OnInit, Input } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  stock1 = [
    {id: 0, prod: 'Pulsera personalizable', cost: 25},
    {id: 1, prod: 'Bufanda a cuadros', cost: 30},
    {id: 2, prod: 'Aretes y collar alpaquitas', cost: 220},
    {id: 3, prod: 'Juego de 3 aretes', cost: 50},
    {id: 4, prod: 'Bufanda infinita', cost: 45},
  ]
  stock2 = [
    {id: 0, prod: 'Libreta turquesa', cost: 70},
    {id: 1, prod: 'Libreta gris oscuro', cost: 70},
    {id: 2, prod: 'Libreta amarilla', cost: 75},
    {id: 3, prod: 'Libreta negra', cost: 125},
    {id: 4, prod: 'Libreta naranja', cost: 85},
  ]

  stock3 = [
    {id: 0, prod: 'Vela de hierbas', cost: 50},
    {id: 1, prod: 'Vela de vainilla', cost: 50},
    {id: 2, prod: 'Vela de lavanda', cost: 50},
    {id: 3, prod: 'Cuarzo rosa', cost: 25},
    {id: 4, prod: 'Fragancia', cost: 20}
  ];

  selected: string='';
  total: number=0;

  pedidos=[{prod: '', cost:0}];



  addProducto(){
    var ped,index=-1;
    index = this.stock1.findIndex(x => x.prod === this.selected);
    if(index!= -1){
      ped = findObj(this.stock1,index);
    }else{
      index = this.stock2.findIndex(x => x.prod === this.selected);
      console.log(index);
      if(index!=-1){
        ped = findObj(this.stock2,index);
      }else{
        index = this.stock3.findIndex(x => x.prod === this.selected);
        if(index!=-1){
          ped = findObj(this.stock3,index);
        }
      }
    }
    
    if(ped!=undefined){
      this.pedidos.push (ped);
    }
  }

  deleteProducto (index: number){
    this.pedidos.splice(index,1);
  }

  calcular(){
    var s=0;
    this.pedidos.forEach((e) => {
      s = s + e.cost;
    });

    this.total =s;

  }

  factura = {
    nombre: '',
    nit: ''
  }

  displayPay(){
    var x = document.getElementById('pay');
    var y = document.getElementById('infopay');
    if(x!=null && y!=null){
      if (x.style.display === 'none' &&  y.style.display === 'none' ) {
          x.style.display = 'block';
          y.style.display = 'block';
        
      } else {
        x.style.display = 'none';
        y.style.display = 'none';
      }
    }
  }
  
}

function findObj(stock: { id: number; prod: string; cost: number; }[], index: number) {
  var s;
  stock.forEach((e) => {
      if (e.id === index) {
        s=e;
      }
    });
  return s;

}


