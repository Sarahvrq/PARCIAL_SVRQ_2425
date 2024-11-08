import { MongoClient } from "mongodb";
import {User_M, Amigo_M, User, Amigo} from "./types.ts";
import {fromModeltoUser, fromModeltoAmigo } from "./util.ts";

const URL = Deno.env.get("MONGO_URL");
    if(!URL){
        console.error("Conexion no exitosa");
        Deno.exit(1);
    }

const client = new MongoClient(URL);
await client.connect();
console.info("Conexion Exitosa");

const DB = client.db("DATABASE");

const userCollection = DB.collection("USER");
const amigoCollection = DB.collection("AMIGOS");

async function handler(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const method = req.method;
    const path = url.pathname;

if (method === "POST"){
    if (path === "/user"){
        const name = req.json;

        if(!name){

        }else{
            const userDB = await userCollection
                            .find({name})
                            .toArray();
            
            const user = await userCollection
                            .findOne({name})
        
        return new Response (
            JSON.stringify{
                name: user.name
            }
        )
        }
        
    }else if (path === "/amigo"){

    }

}else if(method === "GET"){


}else if (method === "PUT"){

}
    return new Response ("Error", {status: 404});
}

Deno.serve({port: 3000}, handler);