import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Danial';

  date = new Date()

  obj = {
    name: 'danial', des: 'DE'
  }



  abdullahArray = [
    { lastName: 'Abc', firstName: 'Danial', des: 'Developer' },
    { lastName: 'Abc', firstName: 'Sameer', des: 'Junior' },
    { lastName: 'Abc', firstName: 'Abdullah', des: 'Developer' },
    { lastName: 'Abc', firstName: 'Saif', des: 'Junior' },
    { lastName: 'Abc', firstName: 'Ismail', des: 'Developer' },
  ]

}
