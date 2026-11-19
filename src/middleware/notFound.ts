import {Request,Response,NextFunction} from "express";
export function notFound(req:Request,res:Response,next:NextFunction){const e:any=new Error(`Route ${req.method} ${req.originalUrl} not found`);e.status=404;next(e);}
