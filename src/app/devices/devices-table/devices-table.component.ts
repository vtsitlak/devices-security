import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from '../models/device';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss']
})
export class DevicesTableComponent implements OnInit {

  @Input() devices: Device[];
  displayedColumns: string[] = ['id', 'type', 'riskLevel', 'lastSeen', 'details'];
  label = {
    id: '#',
    type: 'Type',
    riskLevel: 'Risk level/score',
    lastSeen: 'Last seen',
    details: 'Details',
  };
  dataSource: MatTableDataSource<Device>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit() {

    this.dataSource = new MatTableDataSource<Device>(this.devices);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

