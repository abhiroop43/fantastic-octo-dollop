import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'recruitment-ui';

  @ViewChild('drawer', { read: ElementRef }) myTestDiv!: ElementRef<MatDrawer>;

  ngAfterViewInit(): void {
    console.log(this.myTestDiv.nativeElement);
  }
}
