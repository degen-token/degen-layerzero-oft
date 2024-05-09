import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const baseContract: OmniPointHardhat = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'DEGENOFTAdapter',
}

const ethereumContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'DEGENOFT',
}

const arbitrumContract: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'DEGENOFT',
}

const degenContract: OmniPointHardhat = {
    eid: EndpointId.DEGEN_V2_MAINNET,
    contractName: 'DEGENOFT',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: baseContract,
        },
        {
            contract: ethereumContract,
        },
        {
            contract: arbitrumContract,
        },
        {
            contract: degenContract,
        },
    ],
    connections: [
        {
            from: baseContract,
            to: ethereumContract,
        },
        {
            from: baseContract,
            to: arbitrumContract,
        },
        {
            from: baseContract,
            to: degenContract,
        },
        {
            from: ethereumContract,
            to: baseContract,
        },
        {
            from: ethereumContract,
            to: arbitrumContract,
        },
        {
            from: ethereumContract,
            to: degenContract,
        },
        {
            from: arbitrumContract,
            to: baseContract,
        },
        {
            from: arbitrumContract,
            to: ethereumContract,
        },
        {
            from: arbitrumContract,
            to: degenContract,
        },
        {
            from: degenContract,
            to: baseContract,
        },
        {
            from: degenContract,
            to: ethereumContract,
        },
        {
            from: degenContract,
            to: arbitrumContract,
        },
    ],
}

export default config
