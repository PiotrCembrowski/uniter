import { CurrencyConverter } from "@/components/CurrencyConverter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Currency Converter
          </h1>
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-6">
        <CurrencyConverter />
      </main>

      <footer className="bg-sidebar border-t border-sidebar-border py-6 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center text-sidebar-foreground">
          <p className="text-sm">
            Real-time exchange rates •{" "}
            <a href="#" className="text-sidebar-primary hover:underline">
              FAQ
            </a>{" "}
            •{" "}
            <a href="#" className="text-sidebar-primary hover:underline">
              Support
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
