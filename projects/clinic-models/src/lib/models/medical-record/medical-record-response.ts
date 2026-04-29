import {BaseDto} from "../base-dto";

export interface MedicalRecordResponse extends BaseDto {
  symptoms: string;
  physicalExamination: string;
  diagnosis: string;
  recommendations: string;
}
