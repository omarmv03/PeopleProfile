import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpResponse } from '../interface/http-response';

@Injectable()
export class ServerService {
     // Resolve HTTP using the constructor
     constructor (private _http: Http) { }

    _get(url:string): any {
        const result$ = this._http.get(url).map((res:Response) => {
        var httpResponse = this.catchResponse(res,res.json());
            if(httpResponse.resultOk) {
                return httpResponse.data;
            }
            throw new Error('error controlado');}
        )
        .catch(this.handleError);

        return result$;
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    catchResponse(response,data) {
        var res = new HttpResponse();
        if (response.status === 202 ) {
            console.log('catchResponse');
            console.log(data);

            res.data = data;
            res.resultOk = false;
            return res;
        } else if (response.status !== 200) {
            console.error('catchResponse 2: '+ response.status);

            res.data = data;
            res.resultOk = false;
            return res;
        } else {

            res.data = data;
            res.resultOk = true;
            return res;
        }
     }
}
