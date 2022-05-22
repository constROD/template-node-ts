import { useDB } from '../hooks/useDB';
import QueryUtil from '../utils/Query';

interface ICommonConstructor {
  tableName: string;
  tableNameAlias: string;
  retrieveOptions?: {
    selectColumns?: string | string[];
  };
}

class CommonService<EntityType, R = any, C = any, U = any> {
  private tableName: string;

  private tableNameAlias: string;

  private retrieveOptions: { selectColumns?: string | string[] } = { selectColumns: '*' };

  constructor({ tableName, tableNameAlias, retrieveOptions }: ICommonConstructor) {
    this.tableName = tableName;
    this.tableNameAlias = tableNameAlias;
    this.retrieveOptions.selectColumns = retrieveOptions?.selectColumns || '*';
  }

  async retrieve(filters?: R): Promise<EntityType[]> {
    const { whereExpression, parameters } = QueryUtil.generateWhereExpression(filters || {}, {
      tableName: this.tableName,
    });

    let query = `
      SELECT ${this.retrieveOptions.selectColumns}
      FROM ${this.tableNameAlias}
    `;

    if (whereExpression) query += ` WHERE ${whereExpression}`;

    const { queryResults } = await useDB({ query, parameters });
    return queryResults as EntityType[];
  }

  async create(data?: C): Promise<EntityType[]> {
    const { columns, queryParams, values } = QueryUtil.generateColumnsParameterCreate(data || {});

    const query = `
      INSERT INTO ${this.tableNameAlias} (${columns})
      VALUES (${queryParams})
      RETURNING *
    `;

    const { queryResults } = await useDB({ query, parameters: values });
    return queryResults as EntityType[];
  }

  async update(args: { data?: U; filters: { id: string } }): Promise<EntityType[]> {
    const updateArgs = (args || {}) as any;
    const { columns, values } = QueryUtil.generateColumnsParameterUpdate(updateArgs?.data);
    const { whereExpression, parameters } = QueryUtil.generateWhereExpression(updateArgs?.filters, {
      parameterIndexStart: values.length,
    });

    let query = `
      UPDATE ${this.tableNameAlias}
      SET ${columns}
    `;

    if (whereExpression) query += ` WHERE ${whereExpression}`;
    query += ' RETURNING *';

    const allParameters = [...values, ...parameters];
    const { queryResults } = await useDB({ query, parameters: allParameters });
    const [records] = queryResults as [EntityType[]];
    return records;
  }

  async delete(id: string): Promise<EntityType[]> {
    const { whereExpression, parameters } = QueryUtil.generateWhereExpression({ id });

    let query = `
      DELETE FROM ${this.tableNameAlias}
    `;

    if (whereExpression) query += ` WHERE ${whereExpression}`;
    query += ' RETURNING *';

    const { queryResults } = await useDB({ query, parameters });
    const [records] = queryResults as [EntityType[]];
    return records;
  }
}

export default CommonService;
