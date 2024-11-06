import { Context } from "@prisma/client";
import { getContexts } from "../core/services";
import ContextCart from "../core/components/context-cart/contextCart";

async function Contexts() {
  const contexts: Context[] = await getContexts();
  return (
    <div className="carts-container">
      {contexts.map((context, index) => (
        <ContextCart {...context} key={index} />
      ))}
    </div>
  );
}

export default Contexts;
