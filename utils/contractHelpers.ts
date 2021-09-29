import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'

// Addresses
import {
  getCakeAddress,
  getLotteryV2Address,
  getTradingCompetitionAddress,
  getPredictionsAddress,
  getChainlinkOracleAddress,
  getMulticallAddress,
} from 'utils/addressHelpers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import cakeAbi from 'config/abi/cake.json'
import lotteryV2Abi from 'config/abi/lotteryV2.json'
import predictionsAbi from 'config/abi/predictions.json'
import chainlinkOracleAbi from 'config/abi/chainlinkOracle.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import { ChainLinkOracleContract, PredictionsContract } from './types'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
export const getErc721Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc721Abi, address, signer)
}

export const get97betContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(cakeAbi, getCakeAddress(), signer)
}

export const getLotteryV2Contract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(lotteryV2Abi, getLotteryV2Address(), signer)
}

export const getPredictionsContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(predictionsAbi, getPredictionsAddress(), signer) as PredictionsContract
}

export const getChainlinkOracleContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(chainlinkOracleAbi, getChainlinkOracleAddress(), signer) as ChainLinkOracleContract
}
export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer)
}

