type SingleValue = string | number;
type KeyValue = { [key: string]: ResourceValue };
type ArrayValue = ResourceValue[];
type ResourceValue = KeyValue | ArrayValue | SingleValue;

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

type JSONModificationRequest =
  | AppendOperationRequest
  | ModifyOperationRequest
  | RemoveOperationRequest
  | FetchOperationRequest;

export default JSONModificationRequest;
