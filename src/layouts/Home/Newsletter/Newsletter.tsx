'use client';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Mail } from 'lucide-react';
import { useNewsletterForm } from '@/hooks/useNewsletterForm';

function Newsletter() {
  const { mail, variant, helper, handleMailSubmit, handleChange, isEmpty } =
    useNewsletterForm();

  return (
    <div className="flex items-center justify-center text-center">
      <span className="mx-auto flex w-full max-w-[800px] flex-col gap-[20px]">
        <h3>Bültenimize Abone Ol</h3>
        <p className="mb-[20px] text-center text-xl font-light">
          Volutpat commodo sed egestas egestas fringilla phasellus. Donec ac
          odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius
          vel pharetra vel.
        </p>
        <form
          onSubmit={handleMailSubmit}
          className="flex justify-center gap-2 max-md:flex-col"
        >
          <Input
            name="email"
            leftIcon={<Mail size={20} />}
            placeholder="Enter your email.."
            className="max-md:w-full"
            type="email"
            value={mail}
            onChange={handleChange}
            variant={variant}
            helperText={helper}
          />
          <Button
            size="lg"
            variant="primary"
            color="primary"
            className="text-md whitespace-nowrap! max-md:w-full"
            type="submit"
            disabled={isEmpty}
          >
            Abone ol
          </Button>
        </form>
      </span>
    </div>
  );
}

export default Newsletter;
