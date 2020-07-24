/// <reference types="node" />
import * as http from "http";
export default function httpRequest<R = string>({ url, requestArgs, body, handleResponse, }: {
    url: string;
    requestArgs: http.ClientRequestArgs;
    body?: Buffer | Uint8Array;
    handleResponse?: (message: http.IncomingMessage) => Promise<R>;
}): Promise<R>;
