
import prisma from "../db";

export  async function Add_Incident(req:any, res:any){
    const body = req.body;

    const result = await prisma.incident.create({
        data:{
            title: body.title,
            description: body.description,
            severity: body.severity,
            reported_at: body.reported_at
        },
    });

    return res.status(201).json({msg:result});
} 

export async function Get_Incident(req:any,res:any){

    const result = await prisma.incident.findMany();

    return res.status(200).json({result});
    

}

export async function Get_Incident_ById(req:any,res:any){

    const id = req.params.id;

    const result = await prisma.incident.findFirst({
        where:{
            id: id
        }
    });

    if(!result){

        return res.status(404).json({msg:"Not Found"});
    }

    return res.status(200).json({result});


}



export async function Delete_Incident(req:any,res:any){

    const id = req.params.id;

    const result = await prisma.incident.delete({
        where:{
            id:id
        }
    });

    if(!result){
        return res.status(404).json({msg:"No Fount"});
    }

    return res.status(204).json({msg:"No Content"});
}