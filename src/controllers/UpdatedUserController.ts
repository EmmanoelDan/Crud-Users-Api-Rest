import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid'
import {prismaClient} from "../database/prismaClient";

export class UpdatedUserController {
    async handle(request: Request, response: Response){

        const {id} = request.params;
        const { name, cpf, email, phone, sex, dataBirth } = request.body;

        const user = await prismaClient.user.update({
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
            
        return response.json(user);
    }
}