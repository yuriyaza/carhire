export const parseAddress = address => {
  const properties = address.split(',');
  const length = properties.length;

  const city = properties[length - 2];
  const country = properties[length - 1];

  return { city, country };
};
