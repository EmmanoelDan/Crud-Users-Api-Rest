import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid'
import {prismaClient} from "../database/prismaClient";

export class CreateUserController {
    async handle(request: Request, response: Response){

        try {
            const { name, cpf, email, phone, sex, dataBirth } = request.body;

            const user = await prismaClient.user.create({data: {name, cpf, email, phone, sex, dataBirth}})

            
                
            return response.json(user);
            
        } catch (e) {
            response.json({"err": "invalid value"})
        }

        
    }
}