import { redirect } from 'next/navigation';

// Redirect /en → / (English is the default language at root)
export default function EnRedirect() {
  redirect('/');
}
