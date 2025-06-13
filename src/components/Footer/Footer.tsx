import Link from '@/components/ui/Link';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Section } from '../ui/Section';
import { Mail } from 'lucide-react';

function Footer() {
  return (
    <Section className="py-16!">
      <span className="container mx-auto flex w-full flex-col gap-16 max-md:gap-12">
        <div className="flex w-full justify-between gap-4 max-md:flex-col">
          <div className="flex flex-col gap-3">
            <h4 className="font-extrabold">Bületinimize Katıl</h4>
            <p className="text-xl font-light">
              Only updates and special offers. No spams.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 max-md:flex-col">
            <Input
              leftIcon={<Mail className="h-5 w-5" />}
              placeholder="Enter your email.."
              className="max-md:w-full"
              type="email"
            />
            <Button
              size="lg"
              variant="primary"
              color="primary"
              className="text-md whitespace-nowrap! max-md:w-full"
            >
              Abone ol
            </Button>
          </div>
        </div>
        <div className="group flex items-center justify-between max-md:flex-col max-md:justify-center max-md:gap-4">
          <Link href="/">
            <div className="text-3xl font-bold transition-all duration-300 group-hover:text-[var(--accent)] hover:-rotate-[2deg]">
              Logo
            </div>
          </Link>
          <div className="text-[var(--text)]/60 transition-all duration-300">
            Copyright 2025©{' '}
            <Link
              variant="after"
              newTab
              className="font-bold transition-all duration-300 group-hover:font-extrabold group-hover:text-[var(--accent)]"
              href="https://github.com/ramazandogna"
            >
              Ramazan Doğan
            </Link>
          </div>
        </div>
      </span>
    </Section>
  );
}

export default Footer;
