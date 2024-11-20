export const formatSlug = (slug) => {
  if (slug.includes(' ')) {
    // Case for slugs with spaces: convert to lowercase and replace spaces with hyphens
    return slug.toLowerCase().replace(/\s+/g, '-');
  } else if (slug.includes('_')) {
    // Case for slugs with underscores: just convert to lowercase
    return slug.toLowerCase();
  }
  return slug; // Return as is if it doesn't match any criteria
};