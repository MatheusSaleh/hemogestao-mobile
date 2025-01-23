import { PeopleEntity } from "./PeopleEntity";

export interface DonorEntity{
    id?: number;
    people: PeopleEntity;
    bloodType: string;
}