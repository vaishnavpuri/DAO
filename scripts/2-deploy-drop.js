import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x85c21aC6D4A5eeCFF69Ee3D121A31a34FE98B789");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "ParlayCityDAO",
      description: "A DAO for Degens",
      image: readFileSync("scripts/assets/parlay.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    console.log(
      "Successfully deployed bundleDrop module, address:", bundleDropModule.address,
    );
    console.log(
      "bundleDrop metadata:", await bundleDropModule.getMetadata(),
    );
  } catch(error) {
    console.log("failed to deploy", error);
  }
}) ()