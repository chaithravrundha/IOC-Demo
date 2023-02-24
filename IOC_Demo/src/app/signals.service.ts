import { Injectable } from '@angular/core';

//DI is used to tell this provide the service in the root injector
@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  constructor(

  ) { }

  getAudioSignal(){
    return "Recieved Audio Signal"
  }

  getVideoSignal(){
    return "Recieved Video Signal"
  }

}
