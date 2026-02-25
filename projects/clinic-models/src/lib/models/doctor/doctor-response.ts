import {BaseDto} from "../base-dto";
import {DoctorRequest} from "./doctor-request";
import {AddressResponse} from "../address/address-response";

export interface DoctorResponse extends BaseDto, DoctorRequest {
  address?: AddressResponse;
}
