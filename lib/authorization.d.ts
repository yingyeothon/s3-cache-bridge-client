import Env from "./env";
export default function authorizationHeader(env: Env): {
    Authorization: string;
} | {
    Authorization?: undefined;
};
