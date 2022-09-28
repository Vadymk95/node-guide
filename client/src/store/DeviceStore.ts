import { makeAutoObservable } from 'mobx';

type Type = { id: number; name: string };

export class DeviceStore {
  private _types: Type[];
  private _selectedType: Type;
  private _brands: {}[];
  private _devices: {}[];

  constructor() {
    this._types = [
      { id: 1, name: 'Refrigerators' },
      { id: 2, name: 'Smartphones' },
      { id: 3, name: 'Laptops' },
      { id: 4, name: 'TVs' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'POCO m4 pro 5g',
        price: 22000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
      {
        id: 2,
        name: 'Iphone 14 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
    ];
    this._selectedType = {} as Type;
    makeAutoObservable(this);
  }
  setTypes(types: Type[]) {
    this._types = types;
  }
  setBrands(brands: {}[]) {
    this._brands = brands;
  }
  setDevices(devices: {}[]) {
    this._devices = devices;
  }
  setSelectedType(type: Type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
}
