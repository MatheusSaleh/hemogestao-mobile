import { PeopleEntity } from "./PeopleEntity";

export interface DonorEntity{
    id?: number;
    people: PeopleEntity;
    bloodType: string;
    registerDate?: string;
    lastDonationDate?: string;
    numberOfDonations?: number;
    eligibility?: boolean;
    medicalNotes?: string;
    bCoinsBalance?: number;
}