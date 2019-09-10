import { Request, Response, NextFunction } from "express";

/**
 * GET /api
 * List of API Examples
 */
export const getApi = (req: Request, res: Response) => {
    res.status(200).send({message: "Welcome to API!"});
}