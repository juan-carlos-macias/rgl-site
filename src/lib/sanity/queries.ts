export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc)`;
export const FEATURED_SERVICES_QUERY = `*[_type == "service" && featured == true] | order(order asc)`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(year desc)`;
export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(year desc)`;

export const CLIENTS_QUERY = `*[_type == "client"] | order(name asc)`;

export const TEAM_QUERY = `*[_type == "teamMember"] | order(order asc)`;

export const CERTIFICATIONS_QUERY = `*[_type == "certification"] | order(order asc)`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0]`;
export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  ...,
  client->
}`;
