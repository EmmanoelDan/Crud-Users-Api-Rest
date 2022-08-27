import { Request, Response } from "express";
import {prismaClient} from "../database/prismaClient";

export class DeleteUserController {
    async handle(request: Request, response: Response){
        try {
            const {id} = request.params;
            const {cpf} = request.body

            const user = await prismaClient.user.delete({
                where: {
                    id: id,
                    cpf: cpf
                }
            });

            return response.json({
                Sucess: "Deleted User!",
                Data: user
            })
        } catch (e) {
            return response.json();
        }
    }
}