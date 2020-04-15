declare type SingleValue = string | number;
declare type KeyValue = {
    [key: string]: ResourceValue;
};
declare type ArrayValue = ResourceValue[];
declare type ResourceValue = KeyValue | ArrayValue | SingleValue;
interface AppendOperationRequest {
    operation: "append";
    path: string;
    value: KeyValue | ArrayValue;
    upsert?: boolean;
}
interface ModifyOperationRequest {
    operation: "modify";
    path: string;
    value: KeyValue | ArrayValue;
}
interface RemoveOperationRequest {
    operation: "remove";
    path: string;
    key?: string[];
}
interface FetchOperationRequest {
    operation: "fetch";
    path: string;
    key?: string[];
}
declare type JSONModificationRequest = AppendOperationRequest | ModifyOperationRequest | RemoveOperationRequest | FetchOperationRequest;
export default JSONModificationRequest;
