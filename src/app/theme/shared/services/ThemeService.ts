import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('light-theme');
  theme$ = this.currentThemeSubject.asObservable();

  toggleTheme() {
    const newTheme = this.currentThemeSubject.value === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.currentThemeSubject.next(newTheme);
  }
}
