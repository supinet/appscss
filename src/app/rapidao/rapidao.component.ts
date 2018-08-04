import { Component, OnInit } from '@angular/core';
import { RapidaoService } from './rapidao.service';
import { Post } from './post';

@Component({
  selector: 'app-rapidao',
  templateUrl: './rapidao.component.html',
  styleUrls: ['./rapidao.component.scss']
})
export class RapidaoComponent implements OnInit {

  public posts: Post[];
  public loading: boolean;

  constructor(private service: RapidaoService) { }

  ngOnInit() {
    this.posts = new Array<Post>(); // evita undefined
    this.obterPosts();
  }

  public async obterPosts() {
    this.loading = true;
    try {
      this.posts = await this.service.getList();
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
