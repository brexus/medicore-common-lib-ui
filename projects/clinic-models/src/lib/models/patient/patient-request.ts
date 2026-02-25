import {AddressRequest} from "../address/address-request";
import {GenderEnum} from "../../enums/gender-enum";

export interface PatientRequest {
  firstName: string;
  lastName: string;
  pesel: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  gender?: GenderEnum;
  address?: AddressRequest;
}
