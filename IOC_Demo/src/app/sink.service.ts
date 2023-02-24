import { Injectable, Injector } from '@angular/core';
import { SourceService } from './source.service';

@Injectable({
  providedIn: 'root'
})
export class SinkService {
  sink: any;
  sinkMessage:string ="Hi I'm Sink"

 // constructor(private source: SourceService){}


 //This Injector is used to resolve the circular dependency
   constructor(private injector : Injector) { }

  callSource(){
      this.sink = this.injector.get(SourceService)
    //this.sink = this.source.sourceMessage;
    console.log(this.sink);
  }


}
