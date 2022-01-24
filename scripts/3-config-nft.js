import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5f415047d9727e04e71281A9339a2cFE9EE034B8",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "ParlayCityDAO Membership Token",
        description: "This token will give you access to ParlayCityDAO",
        image: readFileSync("scripts/assets/txn.png"),
      },
    ]);
    console.log("Successfully created a new token in the drop!");
  } catch (error) {
    console.error("failed to created token", error);
  }
}) ()