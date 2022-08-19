# Text of the technical challenge

Create a GitHub workflow deploying and testing the Mangata blockchain node. The task is to create a repo with Mangata node deployment GitHub workflow.
The workflow should be launched by merging any commit to a chosen branch.
The goal of the workflow is to deploy a dockerized mangata node and run any sample request, for example, a basic use case from Mangata SDK, against it.

Feel free to choose any suitable and available platform to deploy the node during the task.

The information which could be useful:

- Mangata is a blockchain implemented using the Substrate framework.
- The node source code is public in the repo: [Link](https://github.com/mangata-finance/mangata-node)
- The node provided in dockerhub is suitable to be connected to a public Mangata testnet, which is connected as a parachain to Rococo testnet.
- SDK and its basic use case are here: [Link](https://github.com/mangata-finance/mangata-sdk)
- Mangata node image could be found at docker hub: `mangatasolutions/mangata-node:rococo-latest`