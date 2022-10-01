import { AxiosResponse } from 'axios';
import { Device } from '../store/DeviceStore';
import { $authHost, $host } from './index';

type EntityProps = {
  id: number;
  name: string;
};

export const createType = async (type: EntityProps): Promise<AxiosResponse> => {
  const { data } = await $host.post('api/type', type);
  return data;
};

export const fetchTypes = async (): Promise<AxiosResponse> => {
  const { data } = await $authHost.get('api/type');
  return data;
};

export const createBrand = async (type: EntityProps): Promise<AxiosResponse> => {
  const { data } = await $host.post('api/brand', type);
  return data;
};

export const fetchBrands = async (): Promise<AxiosResponse> => {
  const { data } = await $authHost.get('api/brand');
  return data;
};

export const createDevice = async (type: Device[]): Promise<AxiosResponse> => {
  const { data } = await $host.post('api/device', type);
  return data;
};

export const fetchDevices = async (): Promise<AxiosResponse> => {
  const { data } = await $authHost.get('api/device');
  return data;
};

export const fetchOneDevice = async (id: string | undefined): Promise<AxiosResponse> => {
  const { data } = await $authHost.get('api/device' + id);
  return data;
};
