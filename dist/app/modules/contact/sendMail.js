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
exports.sendMailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../../../config"));
function sendMailer(subject, from, html) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com.', //!  gmail host and port for smtp ## Searchby= smtp host in browser
            port: 587, //!  port for smtp
            // secure: true,
            auth: {
                user: from, //! owner email
                pass: config_1.default.nodeMailer.appPassword,
            },
        });
        const sentResponse = yield transporter.sendMail({
            from: config_1.default.nodeMailer.FromEmail,
            to: 'masudhossainmbs129@gmail.com',
            subject,
            // text: 'Hello world?',
            html,
        });
        return sentResponse;
    });
}
exports.sendMailer = sendMailer;
