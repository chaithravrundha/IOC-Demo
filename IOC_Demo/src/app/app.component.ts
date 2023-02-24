import { Component } from '@angular/core';
import { SignalsService } from './signals.service';
import { SinkService } from './sink.service';
import { SourceService } from './source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IOC_Demo';

  audioMessage: string ="";
  videoMessage: string ="";


  constructor(private signal: SignalsService, private sink: SinkService, private source: SourceService){}

  ngOnInit(){
    this.audioMessage = this.signal.getAudioSignal();
    this.videoMessage = this.signal.getVideoSignal();
    this.sink.callSource();
    this.source.callSink();

  }

}
