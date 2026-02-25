import {PatientRequest} from "../patient/patient-request";
import {DoctorRequest} from "../doctor/doctor-request";
import {VisitStatusEnum} from "../../enums/visit-status-enum";

export interface VisitRequest {
  patient: PatientRequest;
  doctor: DoctorRequest;
  appointmentDate: Date;
  status: VisitStatusEnum
}
