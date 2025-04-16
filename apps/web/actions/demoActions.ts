"use server";

import { apiClient } from "@/lib/apiClient";

export const getConnection = async () => {
    return await apiClient.v1.demo.connection.$get().then((res) => res);
};