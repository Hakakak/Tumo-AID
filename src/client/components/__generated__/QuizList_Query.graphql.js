/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuizList_QueryVariables = {||};
export type QuizList_QueryResponse = {|
  +Quizes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +description: ?string,
  |}>
|};
export type QuizList_Query = {|
  variables: QuizList_QueryVariables,
  response: QuizList_QueryResponse,
|};
*/


/*
query QuizList_Query {
  Quizes {
    id
    name
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "QuizType",
    "kind": "LinkedField",
    "name": "Quizes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuizList_Query",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QuizList_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "69e6bd6696239d0c48ddef4a0d5087b3",
    "id": null,
    "metadata": {},
    "name": "QuizList_Query",
    "operationKind": "query",
    "text": "query QuizList_Query {\n  Quizes {\n    id\n    name\n    description\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00e48110241a98f2f55cca7669c2de3a';

module.exports = node;
