export default function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
