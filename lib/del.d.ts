import Env from "./env";
export default function del(env: Env): (key: string) => Promise<string>;
