import {VisitRequest} from "./visit-request";
import {BaseDto} from "../base-dto";
import {PatientResponse} from "../patient/patient-response";
import {DoctorResponse} from "../doctor/doctor-response";
import {VisitStatusEnum} from "../../enums/visit-status-enum";


export interface VisitResponse extends VisitRequest, BaseDto {
  patient: PatientResponse,
  doctor: DoctorResponse,
  visitDate: Date,
  status: VisitStatusEnum
}
