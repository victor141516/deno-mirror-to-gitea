import { env } from "src/constants.ts";
import { paginateFollowing, spiderGitHubUser } from "src/api/github.ts";

for (const username of env._) {
  await spiderGitHubUser(username);

  if (env.FETCH_FOLLOWING.toString() === "true") {
    for await (const user of paginateFollowing(username)) {
      await spiderGitHubUser(username);
    }
  }
}
