import Env from "./env";
export default function put(env: Env): (key: string, body: string) => Promise<string>;
