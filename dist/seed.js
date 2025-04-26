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
const db_1 = __importDefault(require("./db"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const incident1 = yield db_1.default.incident.create({
            data: {
                title: 'Unexpected Behavior in Language Model',
                description: 'A large language model generated responses that were factually incorrect and potentially misleading in a user interaction.',
                severity: 'Medium',
            },
        });
        const incident2 = yield db_1.default.incident.create({
            data: {
                title: 'Bias Amplification in Image Recognition System',
                description: 'An image recognition system showed a significantly higher rate of misclassification for a specific demographic group, indicating bias amplification.',
                severity: 'High',
            },
        });
        const incident3 = yield db_1.default.incident.create({
            data: {
                title: 'Minor Data Leak from Experimental AI',
                description: 'During a testing phase, a small amount of non-sensitive training data was unintentionally exposed in a public log file.',
                severity: 'Low',
            },
        });
        console.log({ incident1, incident2, incident3 });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield db_1.default.$disconnect();
    process.exit(1);
}));
