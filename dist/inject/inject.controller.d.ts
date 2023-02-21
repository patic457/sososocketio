import { InjectService } from './inject.service';
export declare class InjectController {
    private injectService;
    constructor(injectService: InjectService);
    test(): Promise<any>;
}
