import { zValidator } from "@hono/zod-validator";
import { Status } from "../../../lib/statusCode";
import createV1App from "../createApp";
import { z } from "zod";
import { zodValidatorError } from "../../../lib/zodValidator";
import env from "../../../env";


export const demoRoute = createV1App()
.get('/', async (c) => {
    return c.json({message: `demo in ${env.NODE_ENV}`}, Status.OK)
})
.get('/:id', zValidator('param', z.object({id: z.coerce.number()}), zodValidatorError), async (c)=>{
    const {id} = c.req.valid('param')
    return c.json({success: true, message: `Your id is: ${id}`})
})