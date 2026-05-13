export default function getSinceDate(duration: string) {
  const now = new Date();

  switch (duration) {
    case "daily":
      now.setDate(now.getDate() - 1);
      break;
    case "weekly":
      now.setDate(now.getDate() - 7);
      break;
    case "monthly":
      now.setMonth(now.getMonth() - 1);
      break;
  }
  return now.toISOString().split("T")[0];
}
