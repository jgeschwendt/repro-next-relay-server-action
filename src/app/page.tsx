import { Interactive } from "./Interactive";
import { state } from "./graphql/state";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Interactive serverState={state.current} />
    </main>
  );
}
