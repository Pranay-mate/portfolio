/**
 * Prefix a public-folder asset path with the production basePath.
 * Next.js auto-prefixes basePath for Link / imported-image / metadata,
 * but NOT for <Image> with a string src + fill + unoptimized + static
 * export. So we apply it manually here for image src strings.
 *
 * Usage: <Image src={withBasePath("/img/photo.jpeg")} ... />
 */
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return `${BASE_PATH}/${path}`;
  return `${BASE_PATH}${path}`;
}
