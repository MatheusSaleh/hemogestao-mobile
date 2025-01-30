import { DonorEntity } from "./DonorEntity";

export interface SchedulingEntity{
    id?: number;
    donor?: DonorEntity;
    dateTimeSchedule?: string;
    status?: string;
    observations?: string;
    canceled?: boolean;
}