import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICandidate } from 'src/app/models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';
// import { DataSource } from '@angular/cdk/collections';
// import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'cv_received_date',
    'availability_in',
  ];
  dataSource: any;
  // candidates: ICandidate[] = [];
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.loadCandidateList();
  }

  loadCandidateList() {
    this.candidateService.getAllCandidates().subscribe((res) => {
      console.log(res);
      // this.candidates = res.data;
      this.dataSource = new MatTableDataSource(res.data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

// class CandidateDataSource extends DataSource<ICandidate> {
//   private _dataStream = new ReplaySubject<ICandidate[]>();

//   constructor(initialData: ICandidate[]) {
//     super();
//     this.setData(initialData);
//   }

//   connect(): Observable<ICandidate[]> {
//     return this._dataStream;
//   }

//   disconnect() {}

//   setData(data: ICandidate[]) {
//     this._dataStream.next(data);
//   }
// }
