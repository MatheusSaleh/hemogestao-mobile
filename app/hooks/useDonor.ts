import { DonorEntity } from "@/domain/entities/DonorEntity";
import { useState, useEffect } from "react";
import { fetchAuthenticatedDonor } from "../services/auth-service";

export const useDonor = () => {
  const [donor, setDonor] = useState<DonorEntity | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDonor = async () => {
      try {
        const authenticatedDonor = await fetchAuthenticatedDonor();
        setDonor(authenticatedDonor);
      } catch (err) {
        setError("Erro ao carregar o doador");
      } finally {
        setLoading(false);
      }
    };

    loadDonor();
  }, []);

  return { donor, loading, error };
};
