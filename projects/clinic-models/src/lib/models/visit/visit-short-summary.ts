import {VisitStatusEnum} from "../../enums/visit-status-enum";

export interface VisitShortSummary {
  id: string;
  visitDate: string;
  doctorFullName: string;
  status: VisitStatusEnum;
}
