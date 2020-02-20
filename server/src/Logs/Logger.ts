// class Logger
class Logger {
  // log for success quest
  public logSuccess(log: any): any {
    return {
      message: 'success',
      payload: log,
    };
  }
  // log for error quest
  public logError(log: any): any {
    return {
      message: 'error',
      payload: log,
    };
  }
}
const logger = new Logger();
// export log instance
export default logger;
