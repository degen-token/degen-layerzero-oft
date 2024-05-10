import { EndpointId } from '@layerzerolabs/lz-definitions'
import { ExecutorOptionType } from '@layerzerolabs/lz-v2-utilities'

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
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: degenContract,
            to: ethereumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: degenContract,
            to: arbitrumContract,
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: '0x0000000000000000000000000000000000000000',
                    },
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(42),
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
    ],
}

export default config
