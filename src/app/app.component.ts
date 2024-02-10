import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MaOverlayModule, maFadeAnimation, MaDirectivesModule, MaModalComponent, MaInputsModule, MaBasicObject
} from 'mis-aliados-library';
import {
  CdkConnectedOverlay, CdkOverlayOrigin, CdkScrollable, ConnectedPosition, Overlay, ScrollStrategyOptions
} from '@angular/cdk/overlay';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MaOverlayModule, CdkOverlayOrigin, CdkConnectedOverlay, MaDirectivesModule, MaInputsModule, ReactiveFormsModule, CdkScrollable],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [maFadeAnimation]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('modal') modal!: MaModalComponent;
  readonly connectedPositions: ConnectedPosition[] = [{
    originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -22
  }];
  canShowToolTip = false;
  control: FormControl<MaBasicObject<number> | null> = new FormControl<MaBasicObject<number> | null>(null);
  cities = [{
    id: 1, name: 'item-1'
  }, {
    id: 1, name: 'item-2'
  }]
  private _overlay: Overlay = inject(Overlay);

  get scrollStrategies(): ScrollStrategyOptions {
    return this._overlay.scrollStrategies;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.modal.open())
  }
}
