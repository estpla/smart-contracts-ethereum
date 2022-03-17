
const ethers = require('ethers');
const contractData = require('./contract.json');

const accountAddress = "0x90826082433A2e14452998B098e439518fa05f5F";
const privateKey = "13d7dccf95bd60047a23425dd731c50116f99f85bc143ff1edcb1fd3869a9162";

const contractAddress = "0xEDB79D0884A667aD565E7B93F83377cD85B6F1aB";

const getWalletBalance = async (provider, address) => {
  const balance = await provider.getBalance(address);
  const eths = ethers.utils.formatEther(balance);
  console.log('Balance', eths);
}

(async () => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);

  const balance = await provider.getBalance(signer.address);
  const eths = ethers.utils.formatEther(balance);

  console.log(signer.address);
  console.log(eths);
  
  // const factory = new ethers.ContractFactory(contractData.abi, contractData.bytecode, signer);
  // const contract = await factory.deploy();
  // console.log('Contract Address:', contract.address);

  let contract = new ethers.Contract(contractAddress, contractData.abi, signer);
  contract = contract.connect(signer);

  const res = await contract.addContract(1, "My data");
  console.log('addContract', res);

  const c = await contract.getContractById(1);
  console.log('contract', c);

  // await getWalletBalance(provider, accountAddress);
})();