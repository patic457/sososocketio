"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
let ChatGateway = class ChatGateway {
    constructor() {
        this.users = [];
        this.logger = new common_1.Logger('ChatGateway');
    }
    handleConnection(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log('new clent connected');
            client.emit('connect', 'connected.');
        });
    }
    handleDisconnect(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log('client disconnected');
            this.server.emit('disconnect', 'disconnected');
        });
    }
    onChat(client, message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log(message);
            client.broadcast.emit('message', message);
        });
    }
    test() {
        return new Promise(resolve => {
            this.server.emit('message', 'hello!!!!');
            this.logger.log('emitting message: hello!!!!!');
        });
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], ChatGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('createProductOrder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onChat", null);
ChatGateway = __decorate([
    websockets_1.WebSocketGateway(4071)
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map