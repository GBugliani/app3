import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  public nome: string;
  constructor(private activatedRouted: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.activatedRouted.snapshot.paramMap.get('info');
  }

}
