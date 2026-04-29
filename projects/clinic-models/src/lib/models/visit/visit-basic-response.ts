import {BaseDto} from "../base-dto";
import {PatientResponse} from "../patient/patient-response";
import {DoctorResponse} from "../doctor/doctor-response";
import {VisitStatusEnum} from "../../enums/visit-status-enum";

export interface VisitBasicResponse extends BaseDto {
  patient: PatientResponse,
  doctor: DoctorResponse,
  visitDate: string,
  status: VisitStatusEnum
}
