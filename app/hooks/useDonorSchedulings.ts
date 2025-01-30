import { SchedulingEntity } from "@/domain/entities/SchedulingEntity";
import { useEffect, useState } from "react";
import { useDonor } from "./useDonor";
import { listDonorScheduling } from "../services/list-donor-scheduling";

export const useDonorSchedulings = (donorId?: number) => {

    const { donor, loading } = useDonor();
    const [schedulings, setSchedulings] = useState<SchedulingEntity[]>([]);

    useEffect(() => {
        if (loading || !donorId) {
            return;
        }

        const loadSchedulings = async () => {
            console.log('donorId', donorId);
            const schedulings = await listDonorScheduling(donorId);
            setSchedulings(schedulings);
        };

        loadSchedulings();
    }, [donor, loading, donorId]);
    return schedulings;
};