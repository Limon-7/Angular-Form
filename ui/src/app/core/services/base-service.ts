import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, pipe, throwError } from "rxjs";
import { catchError, finalize, map, retry } from "rxjs/operators";

export class BaseService {
    /**
     *
     */
    protected ApiEndpoint: string;
    constructor(protected http: HttpClient, resource: string) {
        this.ApiEndpoint = `http://localhost:5000/api/${resource}`;
    }

    get<T>(filters?: Record<string, any>): Observable<T[]> {
        let params: HttpParams;
        if (filters != null) {
            params = this.toHttpParams(filters);
        }
        return this.http.get<T[]>(this.ApiEndpoint, { params }).pipe(
            this.handleErrorAndRetry<T[]>(false, 1, [])
        );
    }

    getById<T>(path: string = ""): Observable<T> {
        return this.http.get<T>(`${this.ApiEndpoint}/${path}`).pipe(
            this.handleErrorAndRetry<T>(false, 1, null)
        );
    }

    post<T>(model: T): Observable<any> {
        return this.http.post(`${this.ApiEndpoint}`, model).pipe(
            this.handleErrorAndRetry<T>(false, 1, null)
        );
    }

    update<T>(id: any, model: T): Observable<T> {
        return this.http.put<T>(`${this.ApiEndpoint}/${id}`, model).pipe(
            this.handleErrorAndRetry<T>(false, 1, null)
        );
    }

    protected toHttpParams(params: Record<string, any>): HttpParams {
        let httpParams = new HttpParams();

        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                httpParams = httpParams.set(key, value.toString());
            }
        });

        return httpParams;
    }

    protected handleErrorAndRetry<T>(isThrowError: boolean = false, retryCount: number = 3, fallbackValue: T = null): (source: Observable<T>) => Observable<T> {
        return ((source: Observable<T>) => source.pipe(
            retry(retryCount),
            map(data => data),
            catchError(error => {
                console.error('Error occurred:', error);
                return isThrowError ? throwError(error) : of(fallbackValue);
            }),
            finalize(() => {
                console.log('Complete');
            })
        ));
    }
}