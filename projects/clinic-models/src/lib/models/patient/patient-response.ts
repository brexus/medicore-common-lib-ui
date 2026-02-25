import {BaseDto} from "../base-dto";
import {PatientRequest} from "./patient-request";
import {AddressResponse} from "../address/address-response";

export interface PatientResponse extends PatientRequest, BaseDto {
  address: AddressResponse;
}
