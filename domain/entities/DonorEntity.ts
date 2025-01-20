import { PeopleEntity } from "./PeopleEntity";

export interface DonorEntity{
    people: PeopleEntity;
    bloodType: string;
    registerDate: string;
    lastDonationDate: string;
    numberOfDonations: number;
    eligibility: boolean;
    medicalNotes: string;
    bCoinsBalance: number;
    image: string;
}