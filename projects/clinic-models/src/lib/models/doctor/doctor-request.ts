import {AddressRequest} from "../address/address-request";
import {GenderEnum} from "../../enums/gender-enum";

export interface DoctorRequest {
  firstName: string;
  lastName: string;
  licenseNumber: string;
  specialization: string;
  phoneNumber?: string;
  email?: string;
  gender?: GenderEnum;
  address?: AddressRequest;
}
