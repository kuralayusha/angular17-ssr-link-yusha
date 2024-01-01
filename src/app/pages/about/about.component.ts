import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/data.json';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  data!: any;
  aboutPageData!: any;
  footerData!: any;

  ngOnInit(): void {
    this.data = (data as any).default;

    this.aboutPageData = this.data.aboutPage;

    this.footerData = this.data.footer;
  }
}
