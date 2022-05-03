import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatesModule } from '../candidates/candidates.module';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../models/api-response.model';
import { ICandidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'any',
})
export class CandidateService {
  constructor(private http: HttpClient) {}

  getAllCandidates() {
    return this.http.get<IApiResponse>(environment.apiBaseUrl + '/candidate');
  }

  getCandidateDetails(id: string) {
    return this.http.get<ICandidate>(
      environment.apiBaseUrl + `/candidate/${id}`
    );
  }
}
