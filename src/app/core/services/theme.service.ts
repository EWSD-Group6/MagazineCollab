import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { makeAutoObservable, observable, reaction } from 'mobx';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  @observable theme = 'light-theme';

  constructor(private overlayContainer: OverlayContainer) {
    makeAutoObservable(this);
    reaction(
      () => this.theme,
      (theme) => {
        const classList = this.overlayContainer.getContainerElement().classList;
        const toRemove = Array.from(classList).filter((item) => item.includes('-theme'));
        if (toRemove.length) {
          classList.remove(...toRemove);
        }
        classList.add(theme);
      },
      { fireImmediately: true }
    );
  }

  changeToLightTheme() {
    this.theme = 'light-theme';
  }

  changeToDarkTheme() {
    this.theme = 'dark-theme';
  }
}
