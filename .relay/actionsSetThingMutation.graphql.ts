/**
 * @generated SignedSource<<17445a20af5fac96d8255d39fe731389>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type actionsSetThingMutation$variables = {
  value: string;
};
export type actionsSetThingMutation$data = {
  readonly setThing: {
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type actionsSetThingMutation = {
  response: actionsSetThingMutation$data;
  variables: actionsSetThingMutation$variables;
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
    "concreteType": "Thing",
    "kind": "LinkedField",
    "name": "setThing",
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
    "name": "actionsSetThingMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "actionsSetThingMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "31077384368230a6dcfff1bd3d508a89",
    "id": null,
    "metadata": {},
    "name": "actionsSetThingMutation",
    "operationKind": "mutation",
    "text": "mutation actionsSetThingMutation(\n  $value: String!\n) {\n  setThing(value: $value) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "891daf3bda9d3b95e6990c0d20d878a7";

export default node;
