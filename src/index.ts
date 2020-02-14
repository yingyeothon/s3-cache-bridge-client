import append from "./append";
import del from "./del";
import Env from "./env";
import get from "./get";
import invalidate from "./invalidate";
import lock from "./lock";
import put from "./put";
import unlock from "./unlock";

export default function S3cb(env: Env) {
  return {
    get: get(env),
    put: put(env),
    del: del(env),
    append: append(env),
    invalidate: invalidate(env),
    lock: lock(env),
    unlock: unlock(env)
  };
}
