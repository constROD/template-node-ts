import { getConnection } from 'typeorm';

interface IManager {
  query: string;
  parameters?: unknown[];
  connectionName?: string;
}

export const useDB = async (args: IManager = { query: '' }) => {
  const { query, parameters, connectionName } = args;
  const connection = getConnection(connectionName);
  const queryRunner = connection.createQueryRunner();

  let queryResults: unknown[] | string = '';

  if (query) {
    queryResults = await connection.query(query, parameters || []);
  }

  return { queryRunner, queryResults };
};
