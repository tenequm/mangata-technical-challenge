import { Mangata } from "@mangata-finance/sdk";

async function main() {
  // Connect to the node
  const INSTANCE = "ws://localhost:8844";
  const mangata = Mangata.getInstance([INSTANCE]);

  // Retrieve the chainName, nodeName & nodeVersion information
  const [chain, nodeName, nodeVersion] = await Promise.all([
    mangata.getChain(),
    mangata.getNodeName(),
    mangata.getNodeVersion(),
  ]);
  console.log(
    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
  );
}

main()
  .catch(console.error)
  .finally(() => process.exit());
