import {NextFunction } from 'express';
import z from "zod";

const valid = z.object({
  title: z.string(),
  description: z.string(),
  severity: z.enum(["Low", "Medium", "High"]),
  reported_at: z.string(),
});

export async function Check(req:any, res:any, next: NextFunction) {
  const body = req.body;

  const parse = valid.safeParse(body); 

  if (!parse.success) {
    return res.status(400).json({ msg: "Bad request response", errors: parse.error.issues }); 
  }

  return next();
}