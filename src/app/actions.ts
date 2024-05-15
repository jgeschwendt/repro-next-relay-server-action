'use server';

import { graphql } from "relay-runtime";
import { revalidatePath } from "next/cache";
import type { actionsSetThingMutation } from '@/relay/actionsSetThingMutation.graphql';

export async function setValue(string: string): Promise<void> {
  // "use server";

  // comment out the next statement to successfully compile
  // const taggedNode = graphql`
  //   mutation actionsSetThingMutation($value: String!) {
  //     setThing(value: $value) {
  //       name
  //     }
  //   }
  // `

  const taggedNode = {
    params: {
      text: `
        mutation actionsSetThingMutation($value: String!) {
          setThing(value: $value) {
            name
          }
        }
      `
    }
  }

  const response = await fetch("http://localhost:3000/graphql", {
    body: JSON.stringify({
      query: taggedNode.params.text,
      variables: {
        value: string,
      } satisfies actionsSetThingMutation["variables"],
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const { data } = await response.json() as { data?: actionsSetThingMutation["response"] };

  // the ui should flush this value when revalidated
  console.log('thing name: ', data?.setThing?.name);

  revalidatePath("/", 'page');
};
