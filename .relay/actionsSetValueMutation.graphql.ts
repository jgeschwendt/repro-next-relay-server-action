/**
 * @generated SignedSource<<6ff838e2094618958fa9900a70b0b555>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type actionsSetValueMutation$variables = {
  value: string;
};
export type actionsSetValueMutation$data = {
  readonly setRocket: {
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type actionsSetValueMutation = {
  response: actionsSetValueMutation$data;
  variables: actionsSetValueMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "value"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ],
    "concreteType": "Rocket",
    "kind": "LinkedField",
    "name": "setRocket",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "actionsSetValueMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "actionsSetValueMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "923adf969ebfb6a2ad4e6c0c16d93786",
    "id": null,
    "metadata": {},
    "name": "actionsSetValueMutation",
    "operationKind": "mutation",
    "text": "mutation actionsSetValueMutation(\n  $value: String!\n) {\n  setRocket(value: $value) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "823e497ec7fb73ee25430c8890c5da84";

export default node;
