import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x5b414D9b761E88b0db01266B8406E0bC421ac3b3",
);

(async () => {
  try {
    const amount = 6_942_000;
    //change to 18 decimal standard
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    //mint
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "There are",
      ethers.utils.formatUnits(totalSupply, 18),
      "$PCC in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();