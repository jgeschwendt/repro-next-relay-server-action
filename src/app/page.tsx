import { revalidatePath } from "next/cache";
import { graphql } from "relay-runtime";
import type { pageSetThingMutation } from "@/relay/pageSetThingMutation.graphql";
import { mutation } from "@/lib/relay/server";
import { Interactive } from "./Interactive";
import { state } from "./graphql/state";

export default function Page() {
  async function setValue(string: string): Promise<void> {
    "use server";

    const { data } = await mutation<pageSetThingMutation>(
      graphql`
        mutation pageSetThingMutation($value: String!) {
          setThing(value: $value) {
            name
          }
        }
      `,
      {
        value: string,
      }
    );

    // the ui should flush this value when revalidated
    console.log("thing name: ", data?.setThing?.name);

    revalidatePath("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Interactive serverState={state.current} setValue={setValue} />
    </main>
  );
}
