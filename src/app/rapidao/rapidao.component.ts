import { Component, OnInit } from '@angular/core';
import { RapidaoService } from './rapidao.service';

@Component({
  selector: 'app-rapidao',
  templateUrl: './rapidao.component.html',
  styleUrls: ['./rapidao.component.scss']
})
export class RapidaoComponent implements OnInit {

  constructor(private service: RapidaoService) {}

  ngOnInit() {
    this.obterPosts();
  }

  public obterPosts() {
    this.service.getList().then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
}
