import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public gs: GlobalService
  ) {}

  postObject: any = {}
  url: string = 'https://b3ba-2400-4152-4282-b000-686e-86cd-d5cf-ee3e.ngrok.io'
  // url: string = 'http://efc3aceb-ffb9-4ff0-be95-c6965e0cf929.japaneast.azurecontainer.io'
  // url: string = 'http://localhost:8000'
  // api: string = '/todo'
  // api: string = '/score'
  // api: string = '/login'
  api: string = '/ml'

  postApi = () => {
    /*
    this.postObject['title'] = "ionic_test"
    this.postObject['text'] = "ionic_text"
    this.postObject["owner_id"] = "yu1"
    */
    /*
    this.postObject['email'] = "yu1"
    this.postObject['password'] = "pa"
    */
    this.postObject['data'] = [
      [1,1,2022,1,0,6,0,2,0.344167,0.363625,0.805833,0.160446],
      [1,1,2022,1,0,6,0,2,0.344167,0.363625,0.805833,0.260446]
    ]
    const body = this.postObject
    console.log(body)

    this.gs.http(this.url + this.api, body).subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
