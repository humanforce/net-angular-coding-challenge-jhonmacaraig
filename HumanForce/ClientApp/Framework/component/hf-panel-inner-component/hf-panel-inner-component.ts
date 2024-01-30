import { Component,Input} from "@angular/core";


@Component({
  selector: 'hf-panel-inner-component',
  templateUrl: './hf-panel-inner-component.html',
  styleUrls: ['./hf-panel-inner-component.css']
})
export class HFPanelInnerComponent {

  @Input() isLoading: boolean = false;
  @Input() cardHeaderColor: string = '#137FBE';

}
