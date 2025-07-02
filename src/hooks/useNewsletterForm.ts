import { useState } from 'react';
import type { InputVariant } from '@/components/Input';

export function useNewsletterForm() {
  const [mail, setMail] = useState('');
  const [variant, setVariant] = useState<InputVariant>('default');
  const [helper, setHelper] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleMailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString().trim() ?? '';

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!mail) {
      setIsEmpty(true);
      setHelper('');
      return;
    } else {
      setIsEmpty(false);
    }

    if (!isValid && mail) {
      setVariant('error');
      setHelper('Lütfen geçerli bir e-posta adresi girin');
      return;
    }

    console.log('Submitted email:', email);
    setVariant('success');
    setHelper('Tebrikler, bültenimize abone oldunuz!');
    setMail('');
    e.currentTarget.reset();
    setIsEmpty(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
    setVariant('default');
    setHelper('');
    setIsEmpty(e.target.value.trim() === '');
  };

  return {
    mail,
    variant,
    helper,
    handleMailSubmit,
    handleChange,
    isEmpty
  };
}
