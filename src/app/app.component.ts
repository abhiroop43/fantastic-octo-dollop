import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean> | undefined;

  constructor(
    private themeService: ThemeService,
    private overlay: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
    if (checked) {
      this.overlay.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlay.getContainerElement().classList.remove('dark-theme');
    }
  }
}
