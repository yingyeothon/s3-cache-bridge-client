import Env from "./env";
export default function get(env: Env): (key: string) => Promise<string>;
