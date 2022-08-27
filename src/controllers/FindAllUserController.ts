import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindAllUserController {

    async handle(request: Request, response: Response){

        try {
            const users = await prismaClient.user.findMany();

            return response.status(200).json(users); 
        } catch (e) {
            return response.json({"Error": "Not found!"})
        }
    }
}