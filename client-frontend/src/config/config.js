const apiUrl = 'http://localhost:3005/api';
const webUrl = 'http://localhost:3000';

class Config {
  static getURL(path) {
    return apiUrl + path;
  }

  static getWebUrl() {
    return webUrl;
  }
}

export default Config;