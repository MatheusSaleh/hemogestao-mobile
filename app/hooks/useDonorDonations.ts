import { DonationEntity } from "@/domain/entities/DonationEntity";
import { useState, useEffect } from "react";
import { fetchAuthenticatedDonor } from "../services/auth-service";
import { getDonorDonationsRequest } from "../services/get-donor-donations-request";
import { useDonor } from "./useDonor";

export const useDonorDonations = (donorId?: number) => {
  const { donor, loading } = useDonor();  
  const [donations, setDonations] = useState<DonationEntity[]>([]);

  useEffect(() => {
    if (loading || !donorId) {
      return;  
    }

    const loadDonations = async () => {
      console.log('donorId', donorId);
      const donations = await getDonorDonationsRequest(donorId);
      setDonations(donations);
    };
    
    loadDonations();
  }, [donor, loading, donorId]); 

  return donations;
};
