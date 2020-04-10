import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/service/dataset.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tweetData: any;
  fakeTweetData: any;
  sadSentimentData: any;
  botGenrated: any;
  loading: boolean = true;
  constructor(private datasetservice: DatasetService) { }

  ngOnInit(): void {

    this.datasetservice.getHeaders().subscribe(data => {
      this.tweetData = data[0];
      this.botGenrated = data[1];
      this.fakeTweetData = data[2];
      this.sadSentimentData = data[3];
      this.loading = false;
    },
      error => {
        console.log(error);
      });
  }
}
