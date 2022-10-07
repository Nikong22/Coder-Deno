import {createApp} from "https://deno.land/x/servest/mod.ts";
import {ServerRequest} from "https://deno.land/std@0.100.0/http/server.ts";

const app = createApp;

const colores: string[] = [];

app.get("/", async (req: ServerRequest)=>{
    await req.respond({
        status:200,
        body: `
        <html>
        <ul>
        ${colores.map(color => `<li style ="color: ${color}">${color}</li>`)}
        </ul>
        </html>
        `
    })
})

app.listen(8081)