import Env from "./env";
export default function lock(env: Env): (key: string) => Promise<string>;
