export default class Semaphore {
    constructor(maxCount: any);
    maxCount: any;
    currentCount: number;
    queue: any[];
    acquire(): Promise<any>;
    release(): void;
}
