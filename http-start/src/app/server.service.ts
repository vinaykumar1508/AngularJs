import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/RX';

@Injectable()
export class ServerService {
    constructor(private http: Http){    
    }

    storeServers(servers: any[]){
        const headers = new Headers({'content-Type' : 'application/json'});
        return this.http.put('https://udemy-ng-http-58286.firebaseio.com/data.json', 
            servers,
            {headers: headers});
    }

    getServers(){
        return this.http.get('https://udemy-ng-http-58286.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    console.log('data'+data);
                    
                    for(let server of data){
                        console.log(server.name);                        
                        server.name = 'FECTHED_'+server.name;
                        console.log(server.name);
                    }
                    return data;
                }
            );
    }
}