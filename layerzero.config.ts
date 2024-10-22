import { EndpointId } from '@layerzerolabs/lz-definitions'
import { ExecutorOptionType } from '@layerzerolabs/lz-v2-utilities'

import contractsConfig from './contracts.json'

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
        // base <-> ethereum
        {
            from: baseContract,
            to: ethereumContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [
                            contractsConfig.base.stargateDVN,
                            contractsConfig.base.lzDVN,
                            contractsConfig.base.polyhedraDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [
                            contractsConfig.base.stargateDVN,
                            contractsConfig.base.lzDVN,
                            contractsConfig.base.polyhedraDVN,
                        ],
                    },
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        {
            from: ethereumContract,
            to: baseContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [
                            contractsConfig.ethereum.stargateDVN,
                            contractsConfig.ethereum.lzDVN,
                            contractsConfig.ethereum.polyhedraDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [
                            contractsConfig.ethereum.stargateDVN,
                            contractsConfig.ethereum.lzDVN,
                            contractsConfig.ethereum.polyhedraDVN,
                        ],
                    },
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        // base <-> arbitrum
        {
            from: baseContract,
            to: arbitrumContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [
                            contractsConfig.base.stargateDVN,
                            contractsConfig.base.lzDVN,
                            contractsConfig.base.polyhedraDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [
                            contractsConfig.base.stargateDVN,
                            contractsConfig.base.lzDVN,
                            contractsConfig.base.polyhedraDVN,
                        ],
                    },
                },
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
            to: baseContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [
                            contractsConfig.arbitrum.stargateDVN,
                            contractsConfig.arbitrum.lzDVN,
                            contractsConfig.arbitrum.polyhedraDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [
                            contractsConfig.arbitrum.stargateDVN,
                            contractsConfig.arbitrum.lzDVN,
                            contractsConfig.arbitrum.polyhedraDVN,
                        ],
                    },
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        // base <-> degen
        {
            from: baseContract,
            to: degenContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [
                            contractsConfig.base.stargateDVN,
                            contractsConfig.base.lzDVN,
                            contractsConfig.base.nethermindDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(21),
                        requiredDVNs: [
                            contractsConfig.base.stargateDVN,
                            contractsConfig.base.lzDVN,
                            contractsConfig.base.nethermindDVN,
                        ],
                    },
                },
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
            from: degenContract,
            to: baseContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(21),
                        requiredDVNs: [
                            contractsConfig.degen.stargateDVN,
                            contractsConfig.degen.lzDVN,
                            contractsConfig.degen.nethermindDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [
                            contractsConfig.degen.stargateDVN,
                            contractsConfig.degen.lzDVN,
                            contractsConfig.degen.nethermindDVN,
                        ],
                    },
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        // ethereum <-> arbitrum
        {
            from: ethereumContract,
            to: arbitrumContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [
                            contractsConfig.ethereum.stargateDVN,
                            contractsConfig.ethereum.lzDVN,
                            contractsConfig.ethereum.polyhedraDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [
                            contractsConfig.ethereum.stargateDVN,
                            contractsConfig.ethereum.lzDVN,
                            contractsConfig.ethereum.polyhedraDVN,
                        ],
                    },
                },
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
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [
                            contractsConfig.arbitrum.stargateDVN,
                            contractsConfig.arbitrum.lzDVN,
                            contractsConfig.arbitrum.polyhedraDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [
                            contractsConfig.arbitrum.stargateDVN,
                            contractsConfig.arbitrum.lzDVN,
                            contractsConfig.arbitrum.polyhedraDVN,
                        ],
                    },
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        // ethereum <-> degen
        {
            from: ethereumContract,
            to: degenContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [
                            contractsConfig.ethereum.stargateDVN,
                            contractsConfig.ethereum.lzDVN,
                            contractsConfig.ethereum.nethermindDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(21),
                        requiredDVNs: [
                            contractsConfig.ethereum.stargateDVN,
                            contractsConfig.ethereum.lzDVN,
                            contractsConfig.ethereum.nethermindDVN,
                        ],
                    },
                },
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
            from: degenContract,
            to: ethereumContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(21),
                        requiredDVNs: [
                            contractsConfig.degen.stargateDVN,
                            contractsConfig.degen.lzDVN,
                            contractsConfig.degen.nethermindDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [
                            contractsConfig.degen.stargateDVN,
                            contractsConfig.degen.lzDVN,
                            contractsConfig.degen.nethermindDVN,
                        ],
                    },
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 100000,
                        value: 0,
                    },
                ],
            },
        },
        // arbitrum <-> degen
        {
            from: arbitrumContract,
            to: degenContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [
                            contractsConfig.arbitrum.stargateDVN,
                            contractsConfig.arbitrum.lzDVN,
                            contractsConfig.arbitrum.nethermindDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(21),
                        requiredDVNs: [
                            contractsConfig.arbitrum.stargateDVN,
                            contractsConfig.arbitrum.lzDVN,
                            contractsConfig.arbitrum.nethermindDVN,
                        ],
                    },
                },
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
            from: degenContract,
            to: arbitrumContract,
            config: {
                sendConfig: {
                    ulnConfig: {
                        confirmations: BigInt(21),
                        requiredDVNs: [
                            contractsConfig.degen.stargateDVN,
                            contractsConfig.degen.lzDVN,
                            contractsConfig.degen.nethermindDVN,
                        ],
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [
                            contractsConfig.degen.stargateDVN,
                            contractsConfig.degen.lzDVN,
                            contractsConfig.degen.nethermindDVN,
                        ],
                    },
                },
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
    ],
}

export default config
