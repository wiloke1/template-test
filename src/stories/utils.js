export default function getBody(html) {
  return html
    .replace(
      /(<!DOCTYPE html>.*([\s\S]*?)<body.*>)|(<\/body>.*([\s\S]*?)<\/html>)|(<script.*<\/script>)/g,
      '',
    )
    .trim();
}
