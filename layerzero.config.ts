import { EndpointId } from '@layerzerolabs/lz-definitions'
import { ExecutorOptionType } from '@layerzerolabs/lz-v2-utilities'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const baseContract: OmniPointHardhat = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'OrbitERC20OFTAdapter',
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
    contractName: 'OrbitNativeOFTAdapter',
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
            config: {
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 200000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: baseContract,
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
            },
        },
        {
            from: baseContract,
            to: degenContract,
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
                    ulnConfig: {
                        requiredDVNs: ['0x9e059a54699a285714207b43B055483E78FAac25'],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        requiredDVNs: ['0x9e059a54699a285714207b43B055483E78FAac25'],
                    },
                },
            },
        },
        {
            from: ethereumContract,
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
            },
        },
        {
            from: ethereumContract,
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
            },
        },
        {
            from: ethereumContract,
            to: degenContract,
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
                    ulnConfig: {
                        requiredDVNs: ['0x589dEDbD617e0CBcB916A9223F4d1300c294236b'],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        requiredDVNs: ['0x589dEDbD617e0CBcB916A9223F4d1300c294236b'],
                    },
                },
            },
        },
        {
            from: arbitrumContract,
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
            },
        },
        {
            from: arbitrumContract,
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
            },
        },
        {
            from: arbitrumContract,
            to: degenContract,
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
                    ulnConfig: {
                        requiredDVNs: ['0x2f55C492897526677C5B68fb199ea31E2c126416'],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        requiredDVNs: ['0x2f55C492897526677C5B68fb199ea31E2c126416'],
                    },
                },
            },
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
                    ulnConfig: {
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
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
                    ulnConfig: {
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
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
                    ulnConfig: {
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        requiredDVNs: ['0x6788f52439ACA6BFF597d3eeC2DC9a44B8FEE842'],
                    },
                },
            },
        },
    ],
}

export default config
