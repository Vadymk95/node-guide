import { makeAutoObservable } from 'mobx';

type Type = { id: number; name: string };
type Brand = { id: number; name: string };
export type Device = {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
  info?: string[];
};

export class DeviceStore {
  private _types: Type[];
  private _selectedType: Type;
  private _selectedBrand: Brand;
  private _brands: Brand[];
  private _devices: Device[];

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {} as Type;
    this._selectedBrand = {} as Brand;
    makeAutoObservable(this);
  }
  setTypes(types: Type[]) {
    this._types = types;
  }
  setBrands(brands: Brand[]) {
    this._brands = brands;
  }
  setDevices(devices: Device[]) {
    this._devices = devices;
  }
  setSelectedType(type: Type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand: Brand) {
    this._selectedBrand = brand;
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
  get selectedBrand() {
    return this._selectedBrand;
  }
}
