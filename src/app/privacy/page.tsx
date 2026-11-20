import { redirect } from 'next/navigation'

/** Old unprefixed legal URL. */
export default function PrivacyRedirect() {
  redirect('/en/privacy')
}
