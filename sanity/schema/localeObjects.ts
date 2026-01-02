export const localeString = {
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fields: [
    { title: 'Spanish', name: 'es', type: 'string' },
    { title: 'English', name: 'en', type: 'string' },
  ],
};

export const localeText = {
  title: 'Localized Text',
  name: 'localeText',
  type: 'object',
  fields: [
    { title: 'Spanish', name: 'es', type: 'text' },
    { title: 'English', name: 'en', type: 'text' },
  ],
};

export const localeBullets = {
  title: 'Localized Bullets',
  name: 'localeBullets',
  type: 'object',
  fields: [
    { title: 'Spanish', name: 'es', type: 'array', of: [{ type: 'string' }] },
    { title: 'English', name: 'en', type: 'array', of: [{ type: 'string' }] },
  ],
};
