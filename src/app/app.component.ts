import { Component } from '@angular/core';
import { DatasetService } from './service/dataset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';

  constructor(private datasetService: DatasetService) { }

  ngOnInit(): void {
    this.datasetService.readCountryDataSet();
    this.datasetService.readEmotionDataSet();
    // this.datasetService.getDataSet();
  }
}
