import { SdkConfiguration } from '../base/SdkConfiguration';
import { SeverityEnum } from '../enums/SeverityEnum';

export default class Logger {
  static log(Debug: SeverityEnum, arg1: string) {
    throw new Error('Method not implemented.');
  }
  private config: SdkConfiguration;
  /**
   * @param {string} type
   * @param {string} message
   */
  constructor(config: SdkConfiguration) {
    this.config = config;
  }
  log = (severity: SeverityEnum, message: string) => {
    switch (severity) {
      case SeverityEnum.Warn:
        //eslint-disable-next-line no-console
        if (this.config.logLevel === SeverityEnum.Warn || !this.config.logLevel) {
          console.warn(message);
        }
        break;
      case SeverityEnum.Debug:
        //eslint-disable-next-line no-console
        if (this.config.logLevel === SeverityEnum.Debug || !this.config.logLevel) {
          console.debug(message);
        }
        break;
      case SeverityEnum.Error:
        //eslint-disable-next-line no-console
        if (this.config.logLevel === SeverityEnum.Error || !this.config.logLevel) {
          console.error(message);
        }
        break;
      case SeverityEnum.Info:
        //eslint-disable-next-line no-console
        if (this.config.logLevel === SeverityEnum.Info || !this.config.logLevel) {
          console.log(message);
        }
        break;
      default:
        console.log(message);
    }
  };
}
