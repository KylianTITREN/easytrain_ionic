import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {exercicesDB, musclesDB, snapshotToArray} from "../tabs/tabs.page";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.page.html',
  styleUrls: ['./explorer.page.scss'],
})
export class ExplorerPage implements OnInit {

    muscles = [];
    exercices = [];
    selectedIndex: number = -1;

    constructor(public router: Router) {
        musclesDB.on('value', resp => {
            this.muscles = [];
            this.muscles = snapshotToArray(resp);
        });
    }

    showExercices(id){
        this.selectedIndex = id;
        exercicesDB.orderByChild('/idMuscles').equalTo(id).on('value', resp => {
            this.exercices = [];
            this.exercices = snapshotToArray(resp);
        });
        console.log(this.exercices);
    }

  ngOnInit() {
  }

}

