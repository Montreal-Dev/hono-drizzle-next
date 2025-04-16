import db from "database/db";
import { Status } from "../../../lib/statusCode";
import createV1App from "../createApp";
import env from "../../../env";
import { connect } from "http2";



export const demoRoute = createV1App()
.get('/messages', async (c) => {
    const messages = await db.query.demoTable.findMany()
    return c.json({message: messages}, Status.OK)
})
.get('/connection', async (c) => {
    const isConnected = !!await db.$client.query('SELECT 1 + 1 AS solution') as boolean;
    return c.json({message: 'ok'}, Status.OK)
})
.put('/messages', async (c) => {

})