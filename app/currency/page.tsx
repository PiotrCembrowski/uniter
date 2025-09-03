import { CurrencyConverter } from "@/components/CurrencyConverter";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <header className="text-primary-foreground py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1
            className="text-2xl font-bold text-cyan-600"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Currency Converter
          </h1>
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-6 bg-white">
        <CurrencyConverter />
      </main>

      <Footer />
    </div>
  );
}
