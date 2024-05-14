import { readFile } from "node:fs/promises";
import { graphql, buildSchema } from "graphql";
import { NextRequest } from "next/server";
import { state } from "./state";

const schema = (async () => {
  const buffer = await readFile("schema.graphql");
  return buffer.toString();
})();

export async function POST(request: NextRequest) {
  const { query: source, variables: variableValues } = await request.json();

  return Response.json(
    await graphql({
      rootValue: {
        thing() {
          return state.current;
        },
        setThing(input: { value: string }) {
          state.current = input.value;

          return { name: state.current };
        },
      },
      schema: buildSchema(await schema),
      source,
      variableValues,
    }),
  );
}
