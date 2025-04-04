import {hc} from 'api/hcx'

export const getApiClient = async () => {
    return hc('http://localhost:3001', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer TOKEN'
        }
    })
}