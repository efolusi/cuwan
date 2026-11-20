/** Simple wordmark-adjacent mark using Meridian brand ink. */
export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="var(--logo-mark)" />
      <path
        d="M7 15.5V8.5h2.2l2.1 4.4L13.4 8.5H15.6V15.5h-1.8v-4.1l-2 4.1h-1.2l-2-4.1v4.1H7z"
        fill="var(--cw-paper, #faf9f6)"
      />
    </svg>
  )
}
