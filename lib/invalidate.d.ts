import Env from "./env";
export default function invalidate(env: Env): (key: string) => Promise<string>;
