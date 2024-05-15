import type { ConcreteRequest, GraphQLTaggedNode } from "relay-runtime";

export async function mutation<T extends { response: unknown; variables: unknown }>(taggedNode: GraphQLTaggedNode, variables: T['variables']): Promise<{
  data?: T['response'];
  errors?: unknown[];
}> {
  const response = await fetch("http://localhost:3000/graphql", {
    body: JSON.stringify({
      query: (taggedNode as ConcreteRequest).params.text, variables
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return response.json()
}
