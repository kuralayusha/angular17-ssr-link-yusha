import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/data.json';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data!: any;
  homePageData!: any;
  footerData!: any;

  ngOnInit(): void {
    this.data = (data as any).default;

    this.homePageData = this.data.linkPage;

    this.footerData = this.data.footer;
  }
}
