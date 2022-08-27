import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid'
import {prismaClient} from "../database/prismaClient";

export class UpdatedUserController {
    async handle(request: Request, response: Response){

        try {
            const {id} = request.params;
            const { name, email, phone, sex, dataBirth } = request.body;
    
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
                
            return response.status(201).json({
                Sucesso: "Updated User",
                Data: user
            });
        } catch (e) {
            return response.json({"Error": "id is invalid!"})
        }
    }
}