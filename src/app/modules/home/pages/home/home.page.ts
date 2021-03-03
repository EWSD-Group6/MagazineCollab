import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeViewModel } from '../../viewmodels/home-viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HomeViewModel]
})
export class HomePage implements OnInit {
  constructor(public viewmodel: HomeViewModel) {}

  ngOnInit(): void {}
}
