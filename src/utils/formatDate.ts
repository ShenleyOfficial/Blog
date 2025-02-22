export function formatDate(date: Date, formatStr = "YYYY-MM-DD") {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  let formatted = formatter.format(date);

  if (formatStr === "YYYY-MM-DD") {
    formatted = formatted.replaceAll("/", "-");
  }
  return formatted;
}
