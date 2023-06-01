import { TesteService } from './../teste.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cars : any;

  constructor(private TesteService: TesteService) {

  }

  ngOnInit() {
    this.TesteService.getCars().subscribe(
      (value) => this.cars = value,
      (E) => console.log(console.log(E))
    )
  }

}
