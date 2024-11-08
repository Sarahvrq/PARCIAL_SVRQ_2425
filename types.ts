import { ObjectId, OptionalId } from "mongodb";


//normales
export type User = {
    id: string,
    name: string,
    email: string,
    telefono: number,
    amigos: Amigo[],

};

export type Amigo = {
    id: string,
    name: string,
    email: string,
    telefono: number,
};

//modelos: Try to check for the 
export type User_M = {
    _id: ObjectId,
    name: string,
    email: string,
    telefono: number,
    amigos: ObjectId[],
};

export type Amigo_M = {
    _id: ObjectId,
    name: string,
    email: string,
    telefono: number,
};