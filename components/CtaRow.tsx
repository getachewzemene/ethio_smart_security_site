import ContactLink from './ContactLink';

export default function CtaRow({ location, message, size = 'lg', telegram = false, callLabel, waLabel }: {
  location: string; message?: string; size?: 'md' | 'lg'; telegram?: boolean; callLabel?: string; waLabel?: string;
}) {
  return (
    <div className="cta-row">
      <ContactLink kind="call" location={location} size={size} label={callLabel} />
      <ContactLink kind="whatsapp" location={location} message={message} size={size} label={waLabel} />
      {telegram && <ContactLink kind="telegram" location={location} size={size} variant="outline" />}
    </div>
  );
}
