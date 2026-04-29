import {VisitStatusEnum} from "../../enums/visit-status-enum";

export interface VisitRequest {
  patientId: number;
  doctorId?: number;
  visitDate: string;
  status: VisitStatusEnum
  reason?: string;
}
