import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-launch-program-content',
  templateUrl: './launch-program-content.component.html',
  styleUrls: ['./launch-program-content.component.scss']
})
export class LaunchProgramContentComponent {

  @Input('launchprogram') launchprogram;

}
