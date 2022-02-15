import { ORM_DB_SCHEMA } from '../configs/App';
import { IParameterCreate, IParameterUpdate } from '../interfaces/Query';

class QueryUtil {
  static generateSchemaAndTableName(tableName: string) {
    return `${ORM_DB_SCHEMA}.${tableName}`;
  }

  static generateColumnsWithDoubleQuote(columns: string[], alias?: string) {
    return columns.map(column => (alias ? `${alias}."${column}"` : `"${column}"`));
  }

  static generateColumnsParameterCreate(entries: [string, string | unknown][]): IParameterCreate {
    const columns = this.generateColumnsWithDoubleQuote(entries.map(([column]) => column));
    const queryParams = entries.map((_, index: number) => `$${index + 1}`);
    const values = entries.map(([, value]) => value);

    return { columns, queryParams, values };
  }

  static generateColumnsParameterUpdate(entries: [string, string | unknown][]): IParameterUpdate {
    const columns = entries.reduce(
      (accum, [column], index: number) =>
        index === 0 ? `"${column}" = $${index + 1}` : `${accum}, "${column}" = $${index + 1}`,
      ''
    );
    const values = entries.map(([, value]) => value);

    return { columns, values };
  }
}

export default QueryUtil;
