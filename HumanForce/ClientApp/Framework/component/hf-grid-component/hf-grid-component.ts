import { AfterViewInit, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from "@swimlane/ngx-datatable";
import { Observable, ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { GridActionColumnConfig } from './model/grid-action-column-config';
import { GridColumnConfig } from './model/grid-column-config';
import { ColumnType } from './model/grid-column-type';
import { HFDateFormatterService } from '../../service/hf-date-formatter-service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'hf-grid-component',
  templateUrl: './hf-grid-component.html'
})

export class HFGridComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() onSearch: Subject<string>;
  @Input() selectedRow$: ReplaySubject<number>;
  @Input() isLoading: boolean = false;
  @Input() rows: any;
  @Input() items$: Observable<any[]>;
  @Input() allowSearch: boolean = false;
  @Input() columnDefs: GridColumnConfig[];
  @Input() componentName: string = '';
  @Input() actionColumnConfig: GridActionColumnConfig[] = [];
  @Input() rowDetailTemplate: TemplateRef<any> = null;
  @Output() onRowClick$ = new EventEmitter<any>();



  columnMode = ColumnMode;
  selectionType = SelectionType;
  selected = [];
  Temp: any;
  currentRows: any;
  columnType = ColumnType;
  isLoadingKeySearch: boolean = false;;

  protected unsubscribe = new Subject();
  protected searchTerm: FormControl

  formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD",
  });
  numberformatter = new Intl.NumberFormat('en-US');

  @ViewChild('table') table: DatatableComponent;

  parseToLocalTime = (value: Date): string => {
    return HFDateFormatterService.formatToLocalTime(value);
  }

  parseToLocalDate = (value: Date): string => {
    return HFDateFormatterService.formatToLocalDate(value);
  }

  parseToLocalDateTime = (value: Date): string => {
    return HFDateFormatterService.formatToLocalDateTime(value);
  }

  ngOnInit(): void {
    this.searchTerm = new FormControl();
  }

  ngAfterViewInit(): void {
    if (this.selectedRow$) {
      this.selectedRow$.pipe(delay(500), takeUntil(this.unsubscribe)).subscribe((id: number) => {
        const _selectedRow = this.rows.find(s => s["id"] === id);
        this.selected = [];
        if (_selectedRow) {
          this.selected = [_selectedRow];
          this.onRowClick$.next(_selectedRow);
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentRows = [];
    this.currentRows = this.rows;
  }
  onUpdateFilterKeyUp = (event) => {
    this.isLoadingKeySearch = true;
    this.Temp = this.rows;
    var headers = Object.keys(this.rows[0]);
    var propList = [...headers];

    const val = event.target.value.toLowerCase();

    if (!val) {
      this.currentRows = [...this.rows];
    } else {
      if (typeof this.Temp !== 'undefined') {
        const temp = this.Temp.filter(item =>
          JSON.stringify(this.getProperties(item, propList))
            .toLowerCase()
            .includes(val));
        this.currentRows = [...temp];
      }
    }
    this.isLoadingKeySearch = false;
  }


  private getProperties = (obj: object, propList: any[]) => {

    var newObj = {};
    propList.forEach(prop => {
      newObj[prop] = obj[prop];
    });
    return newObj;
  }

  onRowClick = (selectedRow: any) => {
    this.onRowClick$.next(selectedRow.selected[0]);
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onSearchKeyUp = ($event: any) => {
    this.onSearch.next($event.target.value.toLowerCase());
  }
}
