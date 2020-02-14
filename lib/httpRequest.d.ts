/// <reference types="node" />
import * as http from "http";
export default function httpRequest(url: string, requestArgs: http.ClientRequestArgs, body?: string): Promise<http.IncomingMessage>;
