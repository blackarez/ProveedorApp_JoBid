//import { client} from "braintree-web/client";
//import { hostedFields} from "braintree-web/hosted-fields";

import { Injectable } from "@angular/core";
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrlBase = "https://us-central1-usuarioappjobid.cloudfunctions.net/api";

@Injectable()

export class CheckrService{

    constructor(public http: Http) {
        // console.log('Hello CheckrServiceProvider Provider');
    }
        
CrearCustomer(keyCustomer){
    return new Promise((resolve, reject) => {
        // console.log(apiUrlBase+'/customer/create/'+keyCustomer);
        let headers = new Headers();
        let getCrearCustom =this.http.get(apiUrlBase+'/customer/create/'+keyCustomer).subscribe(
        (result) => {
            console.log(result);
            console.log(JSON.stringify(result));
            resolve (result);
            getCrearCustom.unsubscribe();
        }, (err) => {
            reject(err);
            console.log('error CrearCustomer');
            console.log(err);
            //alert('error service'+err);
            getCrearCustom.unsubscribe();
        });
    });
}

}