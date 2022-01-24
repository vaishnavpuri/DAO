import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

//address to erc-115 token
const bundleDropModule = sdk.getBundleDropModule(
  "0x5f415047d9727e04e71281A9339a2cFE9EE034B8",
);

const tokenModule = sdk.getTokenModule(
  "0x5b414D9b761E88b0db01266B8406E0bC421ac3b3",
);
(async () =>{
  try {
  //grab address of ppl who are members
  const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");

  if (walletAddresses.length === 0) {
    console.log(
      "No NFTs have been claimed yet",
    );
    process.exit(0);
  }

  const airdropTarget = walletAddresses.map((address) => {
    const rand = Math.floor(Math.random()*(10000 - 1000 +1)+ 1000);
    console.log("Airdropping", rand, "tokens to", address);

    //airdrop target setup
    const airdropTarget = {
      address,
      amount: ethers.utils.parseUnits(rand.toString(), 18),
    };
    return airdropTarget;
  });

  console.log("Starting airdrop...")
  await tokenModule.transferBatch(airdropTarget);
  console.log("Successfully airdropped tokens to members!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();