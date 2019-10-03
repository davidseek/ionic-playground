import {
  Component
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private httpClient: HttpClient) {}

  public didClick() {

    const url = "https://firebasestorage.googleapis.com/v0/b/firenspec.appspot.com/o/web_uploads%2F1517854935338TiZi1tdjBMOOrGoLcv5T00irlWO2%2F1557766447691.pdf?alt=media&token=68a35935-8b3a-41dc-88f7-01ea08af71fb"

    this.httpClient.get(url, {
      responseType: 'blob'
    }).subscribe((data) => {
      console.log('Data', data);
    });
  }
}