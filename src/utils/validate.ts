import {Request,Response,NextFunction} from "express";
export function validate(schema:any){return(req:Request,res:Response,next:NextFunction)=>{const {error,value}=schema.validate(req.body,{abortEarly:false,stripUnknown:true});if(error){const e:any=new Error(error.details.map((d:any)=>d.message).join("; "));e.status=422;return next(e);}req.body=value;next();};}
