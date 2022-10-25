export class BaseLogger {
  getTimeNow() {
    return new Date().toISOString();
  }
  log(title, data) {
    /* 

        console.log(" SMS Logger", title, data);
    
    */
    /* 

        console.log(" Email Logger", title, data);
    
    */
    console.log(`${this.getTimeNow()} File Logger`, title, data);
  }
}

export class FileLogger extends BaseLogger {
  log(title, data) {
    console.log(`${this.getTimeNow()} File Logger:`, title, data);
  }
}

export class SmsLogger extends BaseLogger {
  log(title, data) {
    console.log(`${this.getTimeNow()} Sms Logger:`, title, data);
  }
}

export class EmailLogger extends BaseLogger {
  log(title, data) {
    console.log(`${this.getTimeNow()} Email Logger:`, title, data);
  }
}
