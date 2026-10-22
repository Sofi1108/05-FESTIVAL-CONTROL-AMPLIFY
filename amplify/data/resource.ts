import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Event: a
    .model({
      id: a.string().required(),
      artist: a.string().required(),
      space: a.string().required(),
      time: a.string().required(),
      status: a.enum(['CONFIRMED', 'DELAYED', 'CANCELLED']),
    })
    .identifier(['id'])
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
