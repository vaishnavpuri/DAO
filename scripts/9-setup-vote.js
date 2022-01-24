import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

//governance contract
const voteModule = sdk.getVoteModule(
  "0xF4be4bC8Ce9EC56717A987420217804883d1e701",
);
//erc-20 contract aka coin 
const tokenModule = sdk.getTokenModule( 
  "0x5b414D9b761E88b0db01266B8406E0bC421ac3b3",
);

(async () => {
  try {
    //treasury has power to mint more tokens if needed
    await tokenModule.grantRole("minter", voteModule.address);

    console.log(
      "Successfully gave vote module permissions to act on token module",
    );
  } catch (error) {
    console.log(
      "failed to grant vote permissions",
    );
    process.exit(1);
  }

  try {
    //take tokens out of my wallet cuz i hold the whole supply rn
    const ownedTokens = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS
    );
    const ownedAmnt = ethers.BigNumber.from(ownedTokens.value);
    const percent75 = ownedAmnt.div(100).mul(75)
    await tokenModule.transfer(
      voteModule.address,
      percent75
    );
    console.log("Successfully transferred tokens to vote Module");
  } catch(err) {
    console.error("failed to transfer tokens", err);
  }
})();