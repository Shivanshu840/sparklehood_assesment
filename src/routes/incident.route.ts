import { Router } from "express";
import { Add_Incident, Delete_Incident, Get_Incident, Get_Incident_ById } from "../controller/incident.controller";
import { Check } from "../middleware/validation";

export const incidentRouter = Router();


incidentRouter.post("/add",Check,Add_Incident);
incidentRouter.get("/",Get_Incident);
incidentRouter.get("/:id",Get_Incident_ById);
incidentRouter.delete("/:id",Delete_Incident);





