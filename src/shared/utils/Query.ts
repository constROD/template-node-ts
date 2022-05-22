import { ORM_DB_SCHEMA } from '../configs/App';
import { IParameterCreate, IParameterUpdate, IWhereExpression } from '../interfaces/Query';

class QueryUtil {
  static generateSchemaAndTableName(tableName: string) {
    return `${ORM_DB_SCHEMA}.${tableName}`;
  }

  static generateQuotedColumn(column: string, alias?: string) {
    return alias ? `${alias}."${column}"` : `"${column}"`;
  }

  static generateQuotedColumns(columns: string[], alias?: string) {
    return columns.map(column => this.generateQuotedColumn(column, alias));
  }

  static generateColumnsParameterCreate(properties: any): IParameterCreate {
    const columns: string[] = [];
    const queryParams: string[] = [];
    const values: unknown[] = [];

    const entries = Object.entries(properties as Record<string, unknown>);
    entries.forEach(([column, value], i) => {
      columns.push(this.generateQuotedColumn(column));
      queryParams.push(`$${i + 1}`);
      values.push(value);
    });

    return { columns, queryParams, values };
  }

  static generateColumnsParameterUpdate(properties: any): IParameterUpdate {
    const columns: string[] = [];
    const values: unknown[] = [];

    const entries = Object.entries(properties as Record<string, unknown>);
    entries.forEach(([column, value], i) => {
      columns.push(`"${column}" = $${i + 1}`);
      values.push(value);
    });

    return { columns: columns.join(', '), values };
  }

  static generateWhereExpression(
    properties: any,
    {
      tableName,
      operator = 'AND',
      parameterIndexStart = 0,
    }: { tableName?: string; operator?: 'AND' | 'OR'; parameterIndexStart?: number } = {}
  ): IWhereExpression {
    const whereClauses: string[] = [];
    const parameters: unknown[] = [];

    Object.entries(properties as Record<string, unknown>).forEach(([column, value], i) => {
      let whereExpression = `"${column}" = $${parameterIndexStart + i + 1}`;
      if (tableName) {
        whereExpression = `"${tableName}".${whereExpression}`;
      }

      whereClauses.push(whereExpression);
      parameters.push(value);
    });

    const whereExpression = whereClauses.join(` ${operator} `);

    return { whereExpression, parameters };
  }
}

export default QueryUtil;
