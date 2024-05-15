/**
 * @generated SignedSource<<6954a62d192853e97cf170fab280c1cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type pageSetThingMutation$variables = {
  value: string;
};
export type pageSetThingMutation$data = {
  readonly setThing: {
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type pageSetThingMutation = {
  response: pageSetThingMutation$data;
  variables: pageSetThingMutation$variables;
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
    "name": "pageSetThingMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageSetThingMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d0e1cba62fba7127b2842aa1d3a097cc",
    "id": null,
    "metadata": {},
    "name": "pageSetThingMutation",
    "operationKind": "mutation",
    "text": "mutation pageSetThingMutation(\n  $value: String!\n) {\n  setThing(value: $value) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "93cb9611b4c7fb57eaa307d769e7c808";

export default node;
