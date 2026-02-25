import {BaseDto} from "../base-dto";

export interface AddressRequest {
  street?: string;
  buildingNumber: string;
  apartmentNumber?: string;
  city: string;
  zipCode: string;
  country: string;
}
