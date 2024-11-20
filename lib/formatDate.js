export function formatDate(timestamp) {
  // Convert the timestamp to a Date object
  const dateObject = new Date(timestamp);

  // Define options to format the date with the month as text (e.g., "October 30, 2024")
  const formatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  // Return the formatted date string
  return dateObject.toLocaleDateString('en-US', formatOptions);
}
