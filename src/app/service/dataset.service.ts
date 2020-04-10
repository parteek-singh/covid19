import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, TweetDetails } from '../models/country'
import { Emotion } from '../models/emotion';


@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private countriesData: Array<Country> = [];
  private emotionsData: Array<Emotion> = [];

  private _countryJsonURL = 'assets/countryData.json';
  private _emotionTrendJsonURL = 'assets/emotionTrend.json';
  private _emotionjsonURL = 'assets/emotion.json';
  private _headerJsonURL = 'assets/headerData.json';

  constructor(private http: HttpClient) { }

  getCounteriesData() {
    return this.countriesData;
  }

  getEmotionData() {
    return this.emotionsData;
  }

  readCountryDataSet() {
    this.http.get('assets/country.csv', { responseType: 'text' })
      .subscribe(
        data => {
          if (data != undefined) {
            let lines = data.split("\n");
            for (let index = 1; index < lines.length; index++) {
              const headers = lines[0].split(",");
              const cols = lines[index].split(",");
              let seriesArray: Array<TweetDetails> = [];
              for (let i = 1; i < cols.length; i++) {
                const series = cols[i];
                seriesArray.push({
                  name: headers[i],
                  value: series[i],
                });
              }

              let country: Country = {
                name: cols[0],
                series: seriesArray
              }
              if (country.name !== "")
                this.countriesData.push(country);

            }
          }
          console.log(this.countriesData);
        },
        error => {
          console.log(error);
        }
      );
  }


  readEmotionDataSet() {
    this.http.get('assets/emotions.csv', { responseType: 'text' })
      .subscribe(
        data => {
          if (data != undefined) {
            let lines = data.split("\n");
            for (let index = 1; index < lines.length; index++) {
              const dates = lines[0].split(",");
              const cols = lines[index].split(",");
              let emotion: Emotion = {
                name: cols[0],
                emotionTrends: [{
                  name: dates[1],
                  value: cols[1]
                },
                {
                  name: dates[2],
                  value: cols[2]
                }, {
                  name: dates[3],
                  value: cols[3]
                }, {
                  name: dates[4],
                  value: cols[4]
                }, {
                  name: dates[5],
                  value: cols[5]
                }, {
                  name: dates[6],
                  value: cols[6]
                }, {
                  name: dates[7],
                  value: cols[7]
                }, {
                  name: dates[8],
                  value: cols[8]
                },
                ],
              }
              this.emotionsData.push(emotion);

            }
          }
          console.log(this.emotionsData);
        },
        error => {
          console.log(error);
        }
      );
  }

  getDataSet() {
    this.http.get('assets/dataset.csv', { responseType: 'text' })
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }



  getHeaders(): Observable<any> {
    return this.http.get(this._headerJsonURL);
  }

  getCountryDetails(): Observable<any> {
    return this.http.get(this._countryJsonURL);
  }

  getEmotionTrendDetails(): Observable<any> {
    return this.http.get(this._emotionTrendJsonURL);
  }

  getEmotionDetails(): Observable<any> {
    return this.http.get(this._emotionjsonURL);
  }
}
