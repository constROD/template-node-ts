import { Router } from 'express';

class CommonUtil {
  static createRoute(path: string, router: Router) {
    return { path, router };
  }
}

export default CommonUtil;
