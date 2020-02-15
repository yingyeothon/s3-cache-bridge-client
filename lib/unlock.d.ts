import Env from "./env";
export default function unlock(env: Env): (key: string) => Promise<string>;
