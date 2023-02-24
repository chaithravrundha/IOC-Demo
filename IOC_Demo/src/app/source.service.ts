import { Injectable } from '@angular/core';
import { SinkService } from './sink.service';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  source: any;
  sourceMessage: string = "Hi I'm Source"
  constructor(private sink: SinkService) { }

    callSink(){
      this.source = this.sink.sinkMessage;
      console.log(this.source);
    }
}
