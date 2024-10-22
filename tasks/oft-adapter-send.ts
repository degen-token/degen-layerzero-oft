import { task } from 'hardhat/config'

import { getEidForNetworkName } from '@layerzerolabs/devtools-evm-hardhat'

import { SendParam } from './type-definitions'

const OFT_CONTRACT_NAME = 'DEGENOFTAdapter' as const
const ERC20_CONTRACT_NAME = 'DEGENOFT' as const

// send tokens from a contract on one network to another
task('lz:oftadapter:send', 'test oft adapter send with live contract')
    .addParam('adapter', 'oft adapter contract address on network A')
    .addParam('to', 'token receiver address on network B')
    .addParam('destination', 'name of the network B')
    .addParam('amount', 'amount to transfer in eth')
    .setAction(async (taskArgs, { ethers }) => {
        const eidB = getEidForNetworkName(taskArgs.destination)
        const adapter = taskArgs.adapter
        const to = taskArgs.to

        const oftAdapterFactory = await ethers.getContractFactory(OFT_CONTRACT_NAME)
        const oftAdapter = oftAdapterFactory.attach(adapter)

        const erc20Factory = await ethers.getContractFactory(ERC20_CONTRACT_NAME)
        const erc20 = erc20Factory.attach(oftAdapter.token())
        const decimals = await erc20.decimals()
        const amount = ethers.utils.parseUnits(taskArgs.amount, decimals)
        const sendParam: SendParam = {
            dstEid: eidB,
            to: ethers.utils.hexZeroPad(taskArgs.to, 32),
            amountLD: amount,
            minAmountLD: amount,
            extraOptions: ethers.utils.arrayify('0x'),
            composeMsg: ethers.utils.arrayify('0x'), // Assuming no composed message
            oftCmd: ethers.utils.arrayify('0x'), // Assuming no OFT command is needed
        }
        // Get the quote for the send operation
        const feeQuote = await oftAdapter.quoteSend(sendParam, false)
        const nativeFee = feeQuote.nativeFee
        // Get the signer
        const [signer] = await ethers.getSigners()
        const signerAddress = await signer.getAddress()

        console.log({ eidB, adapter, to, amount, nativeFee })
        console.log(`sending ${taskArgs.amount} token(s) to network ${taskArgs.destination}`)

        // Approve the adapter contract to spend tokens on behalf of the sender
        await erc20.approve(adapter, amount)

        // Send the transaction
        const r = await oftAdapter.send(sendParam, { nativeFee: nativeFee, lzTokenFee: 0 }, signerAddress, {
            value: nativeFee,
        })
        console.log(`Send tx initiated. See: https://layerzeroscan.com/tx/${r.hash}`)
    })
