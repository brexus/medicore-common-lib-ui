import {BaseDto} from "../base-dto";
import {PatientRequest} from "./patient-request";
import {PatientResponse} from "./patient-response";
import {VisitShortSummary} from "../visit/visit-short-summary";

export interface PatientDetails extends PatientRequest, BaseDto {
  patient: PatientResponse;
  visits: [VisitShortSummary]
}
