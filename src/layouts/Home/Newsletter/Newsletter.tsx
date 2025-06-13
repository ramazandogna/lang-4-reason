import { Input } from '@/components/ui/Input';
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

function Newsletter() {
  return (
    <div className="flex items-center justify-center text-center">
      <span className="mx-auto flex max-w-[800px] flex-col gap-[20px]">
        <h3>Bületinimize Abone Ol</h3>
        <p className="mb-[20px] text-center text-xl font-light">
          Volutpat commodo sed egestas egestas fringilla phasellus. Donec ac
          odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius
          vel pharetra vel.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Input
            leftIcon={<Mail className="h-5 w-5" />}
            placeholder="Enter your email.."
          />
          <Button
            size="lg"
            variant="primary"
            color="primary"
            className="text-md"
          >
            Abone ol
          </Button>
        </div>
      </span>
    </div>
  );
}

export default Newsletter;
