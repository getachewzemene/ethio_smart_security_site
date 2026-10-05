import Link from 'next/link';
import CtaRow from '@/components/CtaRow';

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Page not found</h1>
        <p>That page does not exist. You can go back to the <Link href="/"><b>home page</b></Link>, or just call or WhatsApp us.</p>
        <CtaRow location="not_found" />
      </div>
    </section>
  );
}
