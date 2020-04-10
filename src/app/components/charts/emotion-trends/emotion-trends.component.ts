import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/service/dataset.service';

@Component({
  selector: 'app-emotion-trends',
  templateUrl: './emotion-trends.component.html',
  styleUrls: ['./emotion-trends.component.scss']
})
export class EmotionTrendsComponent implements OnInit {



  multi: any[];
  view: any[] = [800, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Days';
  yAxisLabel: string = 'Emotions';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5', '#283747', '#D4AC0D']
  };

  constructor(private datasetService: DatasetService) {

    //Object.assign(this, { multi });
  }

  ngOnInit(): void {
    this.datasetService.getEmotionTrendDetails().subscribe(data => {
      this.multi = data;
    },
      error => {
        console.log(error);
      });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
