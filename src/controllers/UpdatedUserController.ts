import { Request, Response } from "express";
import {prismaClient} from "../database/prismaClient";

interface IUser {
    name: string;
    cpf: string; 
    email: string; 
    phone: string; 
    sex: string; 
    dataBirth: string
}

export class UpdatedUserController {
    async handle(request: Request, response: Response){

        try {
            const {id} = request.params;
            const { name, email, phone, sex, dataBirth } = request.body;
    
            const user: IUser = await prismaClient.user.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    sex: sex,
                    dataBirth: dataBirth
                }
            })
                
            return response.status(201).json({
                Sucesso: "Updated User",
                Data: user
            });
        } catch (e) {
            return response.json({"Error": "id is invalid!"})
        }
    }
}