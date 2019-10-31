import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/modules/navegation/components/graph/data/data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
  
})
export class GraphComponent  {

  public json: Observable<DataModel>;
  public url =  'https://my-json-server.typicode.com/diogoalmeidacunha/json-faker-directory/graph';

  constructor(private http: HttpClient) {
  }

  handleClick(message){
    this.json = this.http.get<DataModel>(this.url);
    console.log(message);
    this.getData();
  }

  handleGraph(message){
    console.log(message);
  }

  getData() {
    this.json.toPromise().then(data=>{
      console.log(JSON.stringify(data));
    })
  }
}
