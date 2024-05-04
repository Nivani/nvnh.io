const formatter = new Intl.DateTimeFormat("default", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function formatDate(date) {
  try {
    return formatter.format(new Date(date));
  } catch (e) {
    console.error(`Could not format date "${date}"`, e);
    return "";
  }
}
