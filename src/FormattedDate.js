export default function FormattedDate(props) {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  return props.date.toLocaleTimeString([], options);
}
