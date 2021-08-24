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
  url: string = 'https://0d0c-153-181-156-73.ngrok.io'
  api: string = '/bootup'

  postApi = () => {
    this.postObject['title'] = "ionic_test"
    this.postObject['text'] = "ionic_text"
    this.postObject["owner_id"] = "yu1"
    const body = this.postObject

    this.gs.http(this.url + this.api, body).subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
