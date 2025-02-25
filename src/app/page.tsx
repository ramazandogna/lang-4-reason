import Button from '@/components/ui/Button';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <Header />
      <main className="text-center">
        <h2 className="text-2xl font-bold">Başlık</h2>
        <p className="text-lg">Paragraf</p>
        <Button>Buton 1</Button>
        <br />
        <br />
        <Button variant="secondary">Buton 2</Button>
      </main>
      <footer className="mt-5">Footer</footer>
    </div>
  );
}
