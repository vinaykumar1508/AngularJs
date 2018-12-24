import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/RX';
//import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 

@Injectable()
export class ServerService {
    constructor(private http: Http){    
    }

    storeServers(servers: any[]){
        const headers = new Headers({'content-Type' : 'application/json'});
        return this.http.put('https://udemy-ng-http-58286.firebaseio.com/data', 
            servers,
            {headers: headers});
    }

    getServers(){
        return this.http.get('https://udemy-ng-http-58286.firebaseio.com/data')
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
            )
            .pipe(catchError(
                (error: Response) => {
                    console.log(error);
                    return throwError('Something went wrong');
                }
            ));    

    }

    getAppName(){
        return this.http.get('https://udemy-ng-http-58286.firebaseio.com/data/appName.json')
            .map(
                (response: Response) =>{
                    return response.json();
                }
            );
    }
}