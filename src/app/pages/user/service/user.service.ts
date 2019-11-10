import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    // implement method to process data
    constructor(private http:HttpClient){}

    URL_API="http://localhost:20191/";

    getTransactions(){
        console.log(this.URL_API);
        return this.http.get(this.URL_API + "/bank/transaction");
    }

    getBankListDemo(){
        console.log(this.URL_API);
        return this.http.get(this.URL_API + "/bank/banklistdemo/all");
    }
}