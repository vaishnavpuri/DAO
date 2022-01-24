import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x85c21aC6D4A5eeCFF69Ee3D121A31a34FE98B789");

(async () => {
  try{
    const tokenModule = await app.deployTokenModule({
      name: "ParlayCity Coin",
      symbol: "PCC", 
    });
    console.log("Successfully deployed token module, address:", tokenModule.address,);
  } catch (error) {
    console.error("Failed to deploy token module", error);
  }
})();