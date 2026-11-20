import { redirect } from 'next/navigation'

/** Middleware sends `/` to /en or /id; this is the fallback when it does not run. */
export default function HomePage() {
  redirect('/en')
}
