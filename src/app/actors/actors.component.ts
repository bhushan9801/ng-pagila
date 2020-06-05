import {Component, OnInit} from '@angular/core';
import {IActor} from '../mappings/actors';
import {ACTORS_DATA} from './mock-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors: Array<IActor> = ACTORS_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
