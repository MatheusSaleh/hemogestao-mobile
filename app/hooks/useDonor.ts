import { DonorEntity } from "@/domain/entities/DonorEntity";
import { useEffect, useState } from "react";
import { fetchAuthenticatedDonor } from "../services/auth-service";


export const useDonor = () => {
  const [donor, setDonor] = useState<DonorEntity | null>(null);

  useEffect(() => {
    const loadDonor = async () => {
      const authenticatedDonor = await fetchAuthenticatedDonor();
      setDonor(authenticatedDonor);
    };

    loadDonor();
  }, []);

  return donor;
};
