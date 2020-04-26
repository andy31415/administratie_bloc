import {AfterViewInit, Component, ElementRef } from '@angular/core';
import {BlocReportInfo, BlocService} from "cheltuieli/app/bloc_service";
import {Subject} from "rxjs";

@Component({
  selector: 'generate-report-app',
  template: `      
    <ng-container *ngIf="blocInfo$ | async as info; else loading">
      <h3> 
        Genereaza cheltuieli pentru <span class="bloc-address">{{info.address}}</span>
      </h3>
      
      <p-card>
        <p-header>Costuri</p-header>
          
        <cheltuiala-input *ngFor="let c of info.cheltuieli" [cheltuiala]="c"></cheltuiala-input>
      </p-card>
      
      <div>
        FIXME: implement
      </div>
    </ng-container>
    <ng-template #loading>Loading...</ng-template>
  `,
  styles: [
   `.bloc-address {
      font-weight: bold;
    }`,
  ]
})
export class AppComponent implements AfterViewInit {
  readonly blocInfo$ = new Subject<BlocReportInfo>();

  constructor(private readonly element: ElementRef,
              private readonly blocService: BlocService) {
  }

  ngAfterViewInit() {
    const blocId = Number(this.element.nativeElement.getAttribute('data-bloc-id'));

    this.blocService.getGenerateReportData(blocId).subscribe(this.blocInfo$)
  }

  test() {
    console.log("Test is ok");
  }
}
