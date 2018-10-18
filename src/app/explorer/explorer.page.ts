import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {musclesDB, snapshotToArray} from "../tabs/tabs.page";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.page.html',
  styleUrls: ['./explorer.page.scss'],
})
export class ExplorerPage implements OnInit {

    muscles = [];

    constructor(public router: Router) {
        musclesDB.on('value', resp => {
            this.muscles = [];
            this.muscles = snapshotToArray(resp);
        });
    }

  ngOnInit() {
  }

}

