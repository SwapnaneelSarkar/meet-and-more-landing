export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Stringify on server/client; safe since we control the data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
