<p align="center">
  <a href="https://layerzero.network">
    <img alt="LayerZero" style="max-width: 500px" src="https://d3a2dpnnrypp5h.cloudfront.net/bridge-app/lz.png"/>
  </a>
</p>

<p align="center">
  <a href="https://layerzero.network" style="color: #a77dff">Homepage</a> | <a href="https://docs.layerzero.network/" style="color: #a77dff">Docs</a> | <a href="https://layerzero.network/developers" style="color: #a77dff">Developers</a>
</p>

<h1 align="center">OFT Example</h1>

<p align="center">
  <a href="https://docs.layerzero.network/v2/developers/evm/oft/quickstart" style="color: #a77dff">Quickstart</a> | <a href="https://docs.layerzero.network/contracts/oapp-configuration" style="color: #a77dff">Configuration</a> | <a href="https://docs.layerzero.network/contracts/options" style="color: #a77dff">Message Execution Options</a> | <a href="https://docs.layerzero.network/contracts/endpoint-addresses" style="color: #a77dff">Endpoint Addresses</a>
</p>

<p align="center">Template project for getting started with LayerZero's <code>OFT</code> contract development.</p>

## 1) Developing Contracts

#### Installing dependencies

We recommend using `pnpm` as a package manager (but you can of course use a package manager of your choice):

```bash
pnpm install
```

#### Compiling your contracts

This project supports both `hardhat` and `forge` compilation. By default, the `compile` command will execute both:

```bash
pnpm compile
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm compile:forge
pnpm compile:hardhat
```

Or adjust the `package.json` to for example remove `forge` build:

```diff
- "compile": "$npm_execpath run compile:forge && $npm_execpath run compile:hardhat",
- "compile:forge": "forge build",
- "compile:hardhat": "hardhat compile",
+ "compile": "hardhat compile"
```

#### Running tests

Similarly to the contract compilation, we support both `hardhat` and `forge` tests. By default, the `test` command will execute both:

```bash
pnpm test
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm test:forge
pnpm test:hardhat
```

Or adjust the `package.json` to for example remove `hardhat` tests:

```diff
- "test": "$npm_execpath test:forge && $npm_execpath test:hardhat",
- "test:forge": "forge test",
- "test:hardhat": "$npm_execpath hardhat test"
+ "test": "forge test"
```

## 2) Deploying Contracts

Set up deployer wallet/account:

- Rename `.env.example` -> `.env`
- Choose your preferred means of setting up your deployer wallet/account:

```
MNEMONIC="test test test test test test test test test test test junk"
or...
PRIVATE_KEY="0xabc...def"
```

- Fund this address with the corresponding chain's native tokens you want to deploy to.

To deploy your contracts to your desired blockchains, run the following command in your project's folder:

```bash
npx hardhat lz:deploy
```

More information about available CLI arguments can be found using the `--help` flag:

```bash
npx hardhat lz:deploy --help
```

By following these steps, you can focus more on creating innovative omnichain solutions and less on the complexities of cross-chain communication.

<br></br>

<p align="center">
  Join our community on <a href="https://discord-layerzero.netlify.app/discord" style="color: #a77dff">Discord</a> | Follow us on <a href="https://twitter.com/LayerZero_Labs" style="color: #a77dff">Twitter</a>
</p>

## 3) Wiring Contract

The CLI Tool makes this one step easier by enabling you to wire and configure your contract pathways with a single command:

```bash
npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts
```

## 3) Testing Pathway

Script for sending OFT from Base to Degen:

```bash
npx hardhat lz:oftadapter:send --adapter 0xdb8e759859058952c34953c8469f464109826e52 --to 0x3C12B77aE8B7DD1FEB63D1D6a2A819AcdA0a41d2 --destination degen --network base --amount 1
```

Script for sending OFT from Base to Arbitrum:

```bash
npx hardhat lz:oftadapter:send --adapter 0xdb8e759859058952c34953c8469f464109826e52 --to 0x3C12B77aE8B7DD1FEB63D1D6a2A819AcdA0a41d2 --destination arbitrum --network base --amount 1
```

Script for sending OFT from Degen to Ethereum:

```bash
npx hardhat lz:nativeoftadapter:send --adapter 0x962311BAF97E6E703f219aE251A181Fb8Cb9F258 --to 0x3C12B77aE8B7DD1FEB63D1D6a2A819AcdA0a41d2 --destination ethereum --amount 0.001 --network degen
```

Script for sending OFT from Arbitrum to Ethereum:

```bash
npx hardhat lz:oft:send --oft 0x9F07F8A82cB1af1466252e505b7b7ddee103bC91 --to 0x3C12B77aE8B7DD1FEB63D1D6a2A819AcdA0a41d2 --amount 0.001 --network arbitrum --destination base
```
