import { localeString, localeText, localeBullets } from './localeObjects';

export const service = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'localeString' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.es' } },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'shortDescription', title: 'Short Description', type: 'localeString' },
    { name: 'fullDescription', title: 'Full Description', type: 'localeText' },
    { name: 'bullets', title: 'Service Bullets', type: 'localeBullets' },
    { name: 'icon', title: 'Icon (MDI Name)', type: 'string', description: 'e.g. mdi:flash' },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'featured', title: 'Featured', type: 'boolean' },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'es', title: 'Spanish SEO', type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] },
        { name: 'en', title: 'English SEO', type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] },
      ]
    },
  ],
};

export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'localeString' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.es' } },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'client', title: 'Client', type: 'reference', to: [{ type: 'client' }] },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'description', title: 'Description', type: 'localeText' },
    { name: 'scopeBullets', title: 'Scope Bullets', type: 'localeBullets' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'featured', title: 'Featured', type: 'boolean' },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'es', title: 'Spanish SEO', type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] },
        { name: 'en', title: 'English SEO', type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] },
      ]
    },
  ],
};

export const client = {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'industry', title: 'Industry', type: 'string' },
    { name: 'featured', title: 'Featured', type: 'boolean' },
  ],
};

export const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'localeString' },
    { name: 'photo', title: 'Photo', type: 'image' },
    { name: 'bio', title: 'Bio', type: 'localeText' },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'leadership', title: 'Leadership', type: 'boolean' },
  ],
};

export const certification = {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'description', title: 'Description', type: 'localeText' },
    { name: 'issuer', title: 'Issuer', type: 'string' },
    { name: 'badge', title: 'Badge Image', type: 'image' },
    { name: 'order', title: 'Order', type: 'number' },
  ],
};

export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'companyName', title: 'Company Name', type: 'string' },
    { name: 'phones', title: 'Phones', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'number', type: 'string' }] }] },
    { name: 'emails', title: 'Emails', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'email', type: 'string' }] }] },
    { name: 'address', title: 'Address', type: 'text' },
    { name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' },
    { name: 'serviceCities', title: 'Service Cities', type: 'array', of: [{ type: 'string' }] },
    { name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'object', fields: [{ name: 'platform', type: 'string' }, { name: 'url', type: 'string' }] }] },
    {
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        { name: 'es', title: 'Spanish SEO', type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] },
        { name: 'en', title: 'English SEO', type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] },
      ]
    },
    { name: 'heroImages', title: 'Hero Images Carousel', type: 'array', of: [{ type: 'image' }] },
  ],
};

export const schemaTypes = [
  localeString,
  localeText,
  localeBullets,
  service,
  project,
  client,
  teamMember,
  certification,
  siteSettings,
];
