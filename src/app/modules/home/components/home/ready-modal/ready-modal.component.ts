import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { HomeViewModel } from '../../../viewmodels/home-viewmodel';

@Component({
  selector: 'app-ready-modal',
  templateUrl: './ready-modal.component.html',
  styleUrls: ['./ready-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadyModalComponent implements OnInit {
  constructor(public viewmodel: HomeViewModel) {}

  ngOnInit(): void {}
}
