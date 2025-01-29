import { DonorEntity } from "./DonorEntity";

export interface DonationEntity {
    id?: number;
    donor?: DonorEntity;
    dateDonation?: any;
    donatioType?: string;
    quantityCollected?: number;
    donationStatus?: string;    
    observation?: string;
    donationScore?: number;
}