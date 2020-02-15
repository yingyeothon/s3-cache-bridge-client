import Env from "./env";
export default function append(env: Env): (key: string, body: string) => Promise<string>;
