import { Component } from '@angular/core';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  


  title = 'Gustavo Silverati';
  home = 'Home';
  obra = 'Obra';
  prensa = 'Prensa';
  acercaDe = 'Acerca de';
  contacto = 'Contacto';
  // 
 
  
  condition_default:boolean = false;
   

  playMusic(){

    
    
  // El casteo para que funcione la funcion play() y pause()
    const statusMusic= <HTMLAudioElement>document.getElementById('myAudio');

    if(this.condition_default == false){
      statusMusic.play();
        // Manejo del boolean para switchear el font awesome de los iconos en el front.
    this.condition_default = !(this.condition_default);
    }
    

    return this.condition_default; 
    
  }

  pauseMusic(){

  // El casteo para que funcione la funcion play() y pause()
    const statusMusic = <HTMLAudioElement>document.getElementById('myAudio');

    if(this.condition_default == true){
      statusMusic.pause();

  // Manejo del boolean para switchear el font awesome de los iconos en el front.
  this.condition_default = !(this.condition_default);
      }

      return this.condition_default; 
  }
  
}

