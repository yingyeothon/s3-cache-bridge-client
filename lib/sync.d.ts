import Env from "./env";
export default function sync(env: Env): (key: string) => Promise<string>;
