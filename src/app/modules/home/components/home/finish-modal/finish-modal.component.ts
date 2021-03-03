import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { HomeViewModel } from '../../../viewmodels/home-viewmodel';

@Component({
  selector: 'app-finish-modal',
  templateUrl: './finish-modal.component.html',
  styleUrls: ['./finish-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinishModalComponent implements OnInit {
  constructor(public viewmodel: HomeViewModel) {}

  ngOnInit(): void {}
}
