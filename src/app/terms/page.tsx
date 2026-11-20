import { redirect } from 'next/navigation'

/** Old unprefixed legal URL. */
export default function TermsRedirect() {
  redirect('/en/terms')
}
