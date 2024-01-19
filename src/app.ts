import { envs } from './config/envs.plugin';
import { Server } from './presentation/server';

(async () => {
  main();
})();

function main() {
  Server.start();
  // console.log(envs);
}
