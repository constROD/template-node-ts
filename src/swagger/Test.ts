import { HttpResponseType, HTTP_RESPONSES } from '../shared/constants/Http';

export const tests = {
  '/tests': {
    get: {
      tags: ['Tests'],
      parameters: [],
      responses: {
        [HttpResponseType.Success]: {
          description: HTTP_RESPONSES[HttpResponseType.Success].message,
        },
      },
    },
    post: {
      tags: ['Tests'],
      consumes: 'application/json',
      parameters: [
        {
          name: 'body',
          in: 'body',
          description: 'JSON',
          required: true,
          schema: {
            type: 'object',
            properties: {
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
            },
          },
        },
      ],
      responses: {
        [HttpResponseType.Created]: {
          description: HTTP_RESPONSES[HttpResponseType.Created].message,
        },
      },
    },
    put: {
      tags: ['Tests'],
      consumes: 'application/json',
      parameters: [
        {
          name: 'body',
          in: 'body',
          description: 'JSON',
          required: true,
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
            },
          },
        },
      ],
      responses: {
        [HttpResponseType.Updated]: {
          description: HTTP_RESPONSES[HttpResponseType.Updated].message,
        },
      },
    },
    delete: {
      tags: ['Tests'],
      consumes: 'application/json',
      parameters: [
        {
          name: 'id',
          in: 'query',
          required: true,
          type: 'string',
        },
      ],
      responses: {
        [HttpResponseType.Deleted]: {
          description: HTTP_RESPONSES[HttpResponseType.Deleted].message,
        },
      },
    },
  },
  '/tests/archive': {
    delete: {
      tags: ['Tests'],
      consumes: 'application/json',
      parameters: [
        {
          name: 'id',
          in: 'query',
          required: true,
          type: 'string',
        },
      ],
      responses: {
        [HttpResponseType.Archived]: {
          description: HTTP_RESPONSES[HttpResponseType.Archived].message,
        },
      },
    },
  },
  '/tests/restore': {
    put: {
      tags: ['Tests'],
      consumes: 'application/json',
      parameters: [
        {
          name: 'id',
          in: 'query',
          required: true,
          type: 'string',
        },
      ],
      responses: {
        [HttpResponseType.Restored]: {
          description: HTTP_RESPONSES[HttpResponseType.Restored].message,
        },
      },
    },
  },
};
