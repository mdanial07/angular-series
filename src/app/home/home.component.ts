import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: Router,
    private data: DataService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    let obj = {
      min: 0,
      max: 5,
    }
    this.data.getTourGuiders(obj).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  Submit(data: any) {
    console.log(data)
    this.route.navigate(['/contact-us'], { queryParams: data })
  }

  arr = [
    {
      name: 'Danial',
      designation: 'Developer',
      bank: [
        { name: 'UBL', },
      ]
    }, {
      name: 'Sameer',
      designation: 'Developer',
      bank: [
        { name: 'UBL', },
      ]
    }, {
      name: 'Qasim',
      designation: 'Developer',
      bank: [
        { name: 'Meezan', },
      ]
    }, {
      name: 'Zia',
      designation: 'Developer',
      bank: [
        { name: 'UBL', },
        { name: 'Meezan', },
        { name: 'HBL', },
      ]
    }, {
      name: 'Saif',
      designation: 'Developer',
      bank: []
    }
  ]

}
