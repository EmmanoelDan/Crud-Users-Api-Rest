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

export class CreateUserController {
    async handle(request: Request, response: Response){

        try {
            const { name, cpf, email, phone, sex, dataBirth } = request.body;

            const user: IUser = await prismaClient.user.create(
                {
                    data: {
                        name: name, cpf: cpf, email: email, phone: phone, sex: sex, dataBirth: dataBirth
                    }
                })
                
            return response.json({
                Sucesso: "Created User",
                Data: user
            });
            
        } catch (e) {
            response.json({"error": "invalid cpf"})
        }
    }
}