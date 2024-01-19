import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infraestructure/datasources/file-system.datasource';
import { LogReporitoryImpl } from '../infraestructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';

const fileSystemLogRepository = new LogReporitoryImpl(
  new FileSystemDatasource()
);

export class Server {
  public static start() {
    console.log('Server started');

    CronService.createJob('*/5 * * * * *', () => {
      const url = 'https://localhost:3000';

      new CheckService(
        fileSystemLogRepository,
        () => console.log(`${url} is ok`),
        (error) => console.log(error)
      ).execute(url);
    });
  }
}
