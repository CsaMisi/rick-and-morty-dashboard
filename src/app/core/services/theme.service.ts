import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);

  IsDarkMode = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this._platformId)) {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode === 'true') {
        this.IsDarkMode.set(true);
        this._document.body.classList.add('dark-theme');
      }
    }
  }

  ToggleDarkMode() {
    this.IsDarkMode.update(mode => !mode);
    if (this.IsDarkMode()) {
      this._document.body.classList.add('dark-theme');
      if (isPlatformBrowser(this._platformId)) localStorage.setItem('darkMode', 'true');
    } else {
      this._document.body.classList.remove('dark-theme');
      if (isPlatformBrowser(this._platformId)) localStorage.setItem('darkMode', 'false');
    }
  }
}