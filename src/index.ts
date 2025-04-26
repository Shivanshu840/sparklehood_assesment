import express from "express"
import { incidentRouter } from "./routes/incident.route";


const app = express();
const PORT =  process.env.PORT || 7000
app.use(express.json());


app.use("/api/v1/incident",incidentRouter);
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})