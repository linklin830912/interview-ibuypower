export function convertStringToFormatDate(value?: string) {
  if (!value) return;
  const date = new Date(value).toLocaleDateString("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return date;
}
