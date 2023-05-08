import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProjetsService } from './projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  /**
   * Constructor
   *
   * @param {ProjetsService} _dataprojetssService
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private _dataprojetssService: ProjetsService) {
    this._unsubscribeAll = new Subject();
   }

   // Private
   private _unsubscribeAll: Subject<any>;
   private tempData = [];

   // public
   public contentHeader: object;
   public rows: any;
   public selected = [];
   public kitchenSinkRows: any;
   public basicSelectedOption: number = 10;
   public ColumnMode = ColumnMode;
   public expanded = {};
   public editingName = {};
   public editingStatus = {};
   public editingAge = {};
   public editingSalary = {};
   public chkBoxSelected = [];
   public SelectionType = SelectionType;
   public exportCSVData;

   @ViewChild(DatatableComponent) table: DatatableComponent;
   @ViewChild('tableRowDetails') tableRowDetails: any;

  /**
   * Method Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

/**
   * For ref only, log selected values
   *
   * @param selected
   */
onSelect({ selected }) {
  console.log('Select Event', selected, this.selected);

  this.selected.splice(0, this.selected.length);
  this.selected.push(...selected);
}

/**
 * For ref only, log activate events
 *
 * @param selected
 */
onActivate(event) {
  // console.log('Activate Event', event);
}

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Projets',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Tableau de bord',
            isLink: true,
            link: '/'
          }
        ]
      }
    }
    this._dataprojetssService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {

      this.rows = response;
      console.log('All Data',this.rows = response);
      this.tempData = this.rows;
      console.log('tempData',this.tempData = this.rows);

      this.kitchenSinkRows = this.rows;
      console.log('Kitchen',this.kitchenSinkRows = this.rows);
      this.exportCSVData = this.rows;
    });
  }

}
