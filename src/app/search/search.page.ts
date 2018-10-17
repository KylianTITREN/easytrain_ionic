import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import {snapshotToArray} from "../explorer/explorer.page";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    muscles = [];
    ref = firebase.database().ref('muscles/');

    constructor() {

    }

    getItems(searchbar) {
        this.ref.on('value', resp => {
            this.muscles = [];
            this.muscles = snapshotToArray(resp);
        });

        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;


        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }

        this.muscles = this.muscles.filter((v) => {
            if(v.nom && q) {
                if (v.nom.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });

        console.log(q, this.muscles.length);

    }

    ngOnInit() {
    }

}
