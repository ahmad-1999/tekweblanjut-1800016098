import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-detail-alamat',
  templateUrl: './detail-alamat.component.html',
  styleUrls: ['./detail-alamat.component.css']
})
export class DetailAlamatComponent implements OnInit {

  constructor(public api:ApiService, 
    public dialogRef:MatDialogRef<DetailAlamatComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any) {}

  ngOnInit(): void {
  }

}
