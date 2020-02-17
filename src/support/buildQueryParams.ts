export default function buildQueryParams(params: {
  [key: string]: string | number | boolean;
}) {
  return (
    `?` +
    Object.entries(params)
      .map(([key, value]) =>
        value === true
          ? `${key}=1`
          : value === false
          ? `${key}=0`
          : `${key}=${encodeURIComponent(value)}`
      )
      .join("&")
  );
}
