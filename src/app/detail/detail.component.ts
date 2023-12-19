import { Component, OnInit } from '@angular/core';
import { PraktikService } from '../service/praktik.service';
import { praktik } from '../model/praktik-model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  // name = 'Jane Doe';
  // location = 'Bandung, Indonesia';
  // balance = 20;
  praktiks: praktik[] = [];
  constructor(private praktikService: PraktikService) {}

  ngOnInit(): void {}

  getDataTutorialId(id: any) {
    this.praktikService.get(id).subscribe((item) => {
      console.log('success get data', item);
    });
  }
}
