import { format } from 'date-fns';
import { Router } from 'express';

class CommonUtil {
  static createRoute(path: string, router: Router) {
    return { path, router };
  }

  static formatDate(date: Date | null, desiredFormat?: string) {
    if (!date) return '';
    const dateFormat = desiredFormat || 'yyyy-MM-dd HH:mm:ss xx';
    return format(date, dateFormat);
  }

  static logger({ path, event, log }: { path: string; event: string; log: unknown }) {
    const date = format(new Date(), 'yyyy/MM/dd hh:mm:ss');
    // eslint-disable-next-line no-console
    console.log(`[${date}]: ${path} (${event}) >> `, JSON.stringify(log, null, 2));
  }
}

export default CommonUtil;
