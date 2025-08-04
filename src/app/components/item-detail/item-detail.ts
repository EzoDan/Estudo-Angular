import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Coisa } from '../../Coisa'; // precisa p poder injetar
import { ActivatedRoute } from '@angular/router';
import { List } from '../../services/list-service';

@Component({
  selector: 'app-item-detail',
  imports: [CommonModule],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.scss'
})
export class ItemDetail {  // o ? diz que o objeto pode ou n vir
  coisa?:Coisa;

                    //precisa inicializar p rodar
  constructor(private listService: List, private route: ActivatedRoute){
    this.getAnimal();
  }

  //pegar info da url
  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((coisa) => (this.coisa = coisa));
  }

}
