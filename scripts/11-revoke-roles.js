import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x5b414D9b761E88b0db01266B8406E0bC421ac3b3",
);

(async () => {
  try {
    console.log(
      "Roles that exist right now:", 
      await tokenModule.getAllRoleMembers()
    );

    //revoke erc-20 creation powers
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "Roles after revoking,",
      await tokenModule.getAllRoleMembers()
    );
    console.log("Successfully revoked powers");
  } catch (error) {
    console.error("failed to revoke powers,", error);
  }
})();