/// <reference types="express" />
/// <reference types="winston" />
/// <reference types="bluebird" />
import * as express from 'express';
import * as winston from 'winston';
import * as Promise from 'Bluebird';
export declare class BasePlugin {
    pluginPort: number;
    app: express.Application;
    logger: winston.LoggerInstance;
    worker_id: string;
    authentication_token: string;
    onLogLevelUpdate: (req: express.Request, res: express.Response) => void;
    private initLogLevelUpdateRoute;
    private initLogLevelGetRoute;
    onStatusRequest: (req: express.Request, res: express.Response) => void;
    private initStatusRoute;
    onInitRequest: (req: express.Request, res: express.Response) => void;
    initInitRoute: () => void;
    request: (method: string, uri: string, body?: string) => Promise<any>;
    constructor();
}
