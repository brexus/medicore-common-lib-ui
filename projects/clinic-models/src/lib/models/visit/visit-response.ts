import {VisitRequest} from "./visit-request";
import {BaseDto} from "../base-dto";
import {PatientResponse} from "../patient/patient-response";
import {DoctorResponse} from "../doctor/doctor-response";


export interface VisitResponse extends VisitRequest, BaseDto {
  patient: PatientResponse,
  doctor: DoctorResponse
}
