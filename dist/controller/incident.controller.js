"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add_Incident = Add_Incident;
exports.Get_Incident = Get_Incident;
exports.Get_Incident_ById = Get_Incident_ById;
exports.Delete_Incident = Delete_Incident;
const db_1 = __importDefault(require("../db"));
function Add_Incident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const result = yield db_1.default.incident.create({
            data: {
                title: body.title,
                description: body.description,
                severity: body.severity,
                reported_at: body.reported_at
            },
        });
        return res.status(201).json({ msg: result });
    });
}
function Get_Incident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db_1.default.incident.findMany();
        return res.status(200).json({ result });
    });
}
function Get_Incident_ById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield db_1.default.incident.findFirst({
            where: {
                id: id
            }
        });
        if (!result) {
            return res.status(404).json({ msg: "Not Found" });
        }
        return res.status(200).json({ result });
    });
}
function Delete_Incident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield db_1.default.incident.delete({
            where: {
                id: id
            }
        });
        if (!result) {
            return res.status(404).json({ msg: "No Fount" });
        }
        return res.status(204).json({ msg: "No Content" });
    });
}
