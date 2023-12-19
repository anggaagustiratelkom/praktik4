import { Component, OnInit } from '@angular/core';
import { PraktikService } from '../service/praktik.service';
import { praktik } from '../model/praktik-model';
@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboar.component.html',
  styleUrls: ['./dashboar.component.scss'],
})
export class DashboarComponent implements OnInit {
  praktiks: praktik[] = [];
  constructor(private praktikService: PraktikService) {}

  ngOnInit(): void {
    this.getDataPraktik();
  }
  getDataPraktik() {
    this.praktikService.getAll().subscribe((item) => {
      this.praktiks = item;
      console.log('success data', item);
    });
  }
  getDataTutorialId(id: any) {
    this.praktikService.get(id).subscribe((item) => {
      console.log('success get data', item);
    });
  }
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
