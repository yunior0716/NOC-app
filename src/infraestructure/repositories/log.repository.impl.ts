import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repository/log.repository';
import { log } from 'console';

export class LogReporitoryImpl implements LogRepository {
  // private logDatasource: LogDatasource;
  constructor(private readonly logDatasource: LogDatasource) {}

  saveLog(log: LogEntity): Promise<void> {
    return this.logDatasource.saveLog(log);
  }

  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDatasource.getLogs(severityLevel);
  }
}
