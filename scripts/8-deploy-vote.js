import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x85c21aC6D4A5eeCFF69Ee3D121A31a34FE98B789",
); 

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "ParlayCityDAO's Proposals",
      votingTokenAddress: "0x5b414D9b761E88b0db01266B8406E0bC421ac3b3",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds:24*60*60,
      /*
      votingQuorumFraction: 0 means the proposal will pass regardless of what % of token was used on the vote. means one person could technically pass a proposal themselves if the other members are on vacation. The quorum set in the real world depends on supply and how much initially airdropped.
      */
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "1",
    });

    console.log(
      "Successfully deployed vote module, address:", voteModule.address,
    );
  } catch (err){
    console.log("failed to deploy vote module", err);
  }
})();

