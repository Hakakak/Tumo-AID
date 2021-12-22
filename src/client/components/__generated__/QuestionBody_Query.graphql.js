/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionBody_QueryVariables = {|
  id: string
|};
export type QuestionBody_QueryResponse = {|
  +Quiz: ?{|
    +name: ?string,
    +questions: ?$ReadOnlyArray<?{|
      +id: ?string,
      +question: ?string,
      +answers: ?$ReadOnlyArray<?{|
        +answer: ?string
      |}>,
    |}>,
  |}
|};
export type QuestionBody_Query = {|
  variables: QuestionBody_QueryVariables,
  response: QuestionBody_QueryResponse,
|};
*/


/*
query QuestionBody_Query(
  $id: ID!
) {
  Quiz(id: $id) {
    name
    questions {
      id
      question
      answers {
        answer
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "question",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "answer",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionBody_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuizType",
        "kind": "LinkedField",
        "name": "Quiz",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionType",
            "kind": "LinkedField",
            "name": "questions",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AnswerType",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QuestionBody_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuizType",
        "kind": "LinkedField",
        "name": "Quiz",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionType",
            "kind": "LinkedField",
            "name": "questions",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AnswerType",
                "kind": "LinkedField",
                "name": "answers",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "784d0c47c95fc2a3a1771e50d5cd8ae8",
    "id": null,
    "metadata": {},
    "name": "QuestionBody_Query",
    "operationKind": "query",
    "text": "query QuestionBody_Query(\n  $id: ID!\n) {\n  Quiz(id: $id) {\n    name\n    questions {\n      id\n      question\n      answers {\n        answer\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a6b128fab4bbba34dc748ea9e073b355';

module.exports = node;
