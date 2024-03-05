const formatter = new Intl.DateTimeFormat("default", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function formatDate(date) {
  return formatter.format(new Date(date));
}
