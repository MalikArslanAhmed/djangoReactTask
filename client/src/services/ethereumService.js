import { ethers } from 'ethers';

// Example function to fetch Ethereum balance using ethers.js
export async function getEthereumBalance(walletAddress) {
    const provider = new ethers.providers.InfuraProvider('mainnet', 'YOUR_INFURA_PROJECT_ID');
    const balance = await provider.getBalance(walletAddress);
    return ethers.utils.formatEther(balance);
}
