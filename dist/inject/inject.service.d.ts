import { ChatGateway } from '../chat/chat.gateway';
export declare class InjectService {
    private chatService;
    constructor(chatService: ChatGateway);
    test(): Promise<any>;
}
