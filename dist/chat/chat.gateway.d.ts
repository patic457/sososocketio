import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    users: any[];
    private logger;
    handleConnection(client: any): Promise<void>;
    handleDisconnect(client: any): Promise<void>;
    onChat(client: any, message: any): Promise<void>;
    test(): Promise<any>;
}
