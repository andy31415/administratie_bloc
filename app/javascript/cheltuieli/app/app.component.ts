import {AfterViewInit, Component, ElementRef } from '@angular/core';
import {BlocReportInfo, BlocService} from "cheltuieli/app/bloc_service";
import {Subject} from "rxjs";

@Component({
  selector: 'generate-report-app',
  template: `      
    <ng-container *ngIf="blocInfo$ | async as info; else loading">
      <p-toolbar class="toolbar">
        <h3>
          Genereaza cheltuieli pentru <span class="bloc-address">{{info.address}}</span>
        </h3>
      </p-toolbar>
      <div class="content">
        <p-card class="costuri-input">
          <div class="card-title">Costuri</div>
          <cheltuiala-input *ngFor="let c of info.cheltuieli" [cheltuiala]="c"></cheltuiala-input>
        </p-card>
      </div>
    </ng-container>
    <ng-template #loading>
      <p-toolbar>Loading...</p-toolbar>
    </ng-template>
  `,
  styles: [
   `
    :host {
        display: flex;
        position: relative;
        flex-direction: column;
    }
    
    .content {
      display: flex;
      flex-direction: column;
      margin: 16px;
    }
    
    .card-title {
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: bold;
    }
    
    .costuri-input {
      margin: 0 auto;
    }
    
    .bloc-address {
      font-weight: bold;
    }
    `,
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
