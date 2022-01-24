import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0x5f415047d9727e04e71281A9339a2cFE9EE034B8",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 500,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("Succesfully set claim condition on bundle drop:", bundleDrop.address);
  } catch (error) {
    console.log("Failed to set claim condition", error);
  }
})()