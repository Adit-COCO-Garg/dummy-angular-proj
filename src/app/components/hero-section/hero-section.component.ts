import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/articles';
import {MatCardModule} from '@angular/material/card';

import {ArticlesService} from '../../services/articles.service';

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'hero-section',
  templateUrl: 'hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent{
  data: any;
  constructor(private articleService: ArticlesService){
    this.articleService.getArticles().subscribe(response => {
      this.data = response;
    });
  }

  // ngOnInit(){
    
  // }
}