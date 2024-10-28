import { Component, inject, Input } from '@angular/core';
import { ApiPokemonService } from '../../api-pokemon.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-pok',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-pok.component.html',
  styleUrl: './card-pok.component.css'
})
export class CardPokComponent {
  elements:any = [];
  hpokemon:number=0;
  HPP:any = '100%';;
  colorHP:string ='#15e765';
  borderHP:string ='#15e765';
  captureAnimation:string ='';
  pokeballAnimation:string ='pokeball';
  baseStat:string ='';
  pokemonPNG:string = '../../../img/pokeball.png';
  
  private apiService = inject(ApiPokemonService)
  @Input() valueNew:any = [];
  @Input() name:string = '';
  ngOnInit(): void {
    this.apiService.getUniquePokemon(this.valueNew)
    .then(({data}) => {
      this.elements = data
      this.hpokemon = data?.stats[0]?.base_stat;
      this.baseStat = data?.stats[0]?.base_stat;
   })
   .catch(error => console.log(error))
  }

  color(data:any) {
    return(
    (((data * 100)/this.elements?.stats[0]?.base_stat) <= 100 && 
    ((data * 100)/this.elements?.stats[0]?.base_stat) >= 60) ? "#15e765" : 
    (((data * 100)/this.elements?.stats[0]?.base_stat) <= 59 && ((data * 100)/this.elements?.stats[0]?.base_stat) >= 30) ? "#f7de76" : "#f45639");
  }

  calHP (data:number){
    return data -  Math.round(Math.random() * (15 - 1) + 1);
  }

  regla (data:any){
    return ((data * 100) / this.elements?.stats[0]?.base_stat);
  }

  attack() {
    let  subHP = this.calHP(this.hpokemon);
    if(subHP < 10){
      // props.setAlert(true, `Cuidado, puedes matar a ${props.name}`,'danger' )
    }else{
      this.hpokemon = subHP;
      this.HPP = `${this.regla(subHP)}%`;
      this.colorHP = this.color(subHP);
      this.borderHP = this.color(subHP)

    }
  }

  capturePok(){
    let  subHP = this.calHP(this.hpokemon);
    if(subHP < 26){
      this.captureAnimation = 'pokemon magic';
      setTimeout(() => {
        this.pokeballAnimation = 'pokeball pokeballshow'
        // showPok.current.style.animation = 'BouncesPokeball';
        // showPok.current.style.animationDuration = "0.5s";
        // showPok.current.style.animationFillMode = "forwards";
        // props.setAlert(true, `${props.name} atrapado`, 'primary')
        // setinfo([...info,infoPokemon])
        // btnAttack.current.setAttribute('disabled','')
      }, 800);
    }
  }

}
