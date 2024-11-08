import { Collection, ObjectId } from "mongodb";
import { User_M, Amigo_M} from "./types.ts";


//fix the order of the names
export function fromModeltoUser (user_model: User_M, AmigosCollection: Collection<Amigo_M>) {
    const AmigosConfirmation = AmigosCollection
                                .find ({_id: {$sin: user_model.amigos.map}})
                                .toArray();

//check this one                        
    return {
        id: user_model._id!.toString(),
        name: user_model.name,
        email: user_model.email,
        telefono: user_model.telefono,
        amigos: user_model.amigos,
    };

    };


export function fromModeltoAmigo (amigo_Model: Amigo_M) {
    return {
        id: amigo_Model._id!.toString(),
        name: amigo_Model.name,
        email: amigo_Model.email,
        telefono: amigo_Model.telefono,
    }
};
