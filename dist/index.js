"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const incident_route_1 = require("./routes/incident.route");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 7000;
app.use(express_1.default.json());
app.use("/api/v1/incident", incident_route_1.incidentRouter);
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
