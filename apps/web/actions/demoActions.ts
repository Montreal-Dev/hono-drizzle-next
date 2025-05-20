"use server";

import { apiClient } from "@/lib/apiClient";

export const getConnection = async () => {
    let connection = null
    let populated = false
    let res = null

    try {
        connection = await apiClient.v1.demo.connection.$get().then(res => res.json())
    } catch {
        console.log('@ web/actions/demoActions - Have you setup your .env ?')
    }
    try {
        populated = await apiClient.v1.demo.populate.$post().then(res => res.status === 200) 
    } catch {
        console.log('@ web/actions/demoActions - Have you setup PostgreSQL ?')
    }

    if(populated){
        res = await apiClient.v1.demo.table1.$get().then(res => res.json())
    }
    return {connection, res}
};