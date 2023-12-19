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
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  getDataPraktik() {
    this.praktikService.getAll().subscribe((item) => {
      this.praktiks = item;
      console.log('success data', item);
    });
  }
  getDataPraktikById(id: any) {
    this.praktikService.get(id).subscribe((item) => {
      console.log('success get data', item);
    });
  }
  postDataPraktik(
    name: string,
    country: string,
    city: string,
    balance: string,
    currency: string
  ) {
    this.praktikService
      .post(name, country, city, balance, currency)
      .subscribe((item) => {
        console.log('success post data', item);
      });
  }
}
