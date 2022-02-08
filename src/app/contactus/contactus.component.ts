import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(
    private Aroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Aroute.queryParams.subscribe(res => {
      console.log(res)
    })
  }

}
