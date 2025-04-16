import {hc} from 'api/hcx'

export const apiClient: ReturnType<typeof hc> = await hc(process.env.NEXT_PUBLIC_API_ENDPOINT || "", {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer TOKEN'
    }
});

export type ApiClient = typeof apiClient;