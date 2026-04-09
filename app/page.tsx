import Link from 'next/link'
import { Phone, Wrench, Droplet, Thermometer, Clock, CheckCircle2, MapPin, Mail, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Droplet className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Hydro Fix</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#uslugi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Usługi
            </Link>
            <Link href="#kontakt" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground md:hidden">
            <Phone className="h-4 w-4 mr-2" />
            Zadzwoń
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar CTA - Fixed on desktop */}
        <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-card p-6">
          <div className="flex flex-col gap-4 sticky top-6">
            <div className="flex items-center gap-2 text-primary">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-medium">Zadzwoń teraz</span>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">+48 XXX XXX XXX</p>
              <p className="text-sm text-muted-foreground">Dostępni 24/7</p>
            </div>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="h-5 w-5 mr-2" />
              Zadzwoń 24/7
            </Button>
            <div className="pt-4 border-t space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Szybka reakcja</p>
                  <p className="text-xs text-muted-foreground">Dojazd w 30-60 min</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">10+ lat doświadczenia</p>
                  <p className="text-xs text-muted-foreground">Licencjonowani specjaliści</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          {/* Hero Section */}
          <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center bg-secondary/30">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Pogotowie Hydrauliczne Kalisz 24/7
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                  Szybka pomoc w awariach, instalacje wod-kan, pompy ciepła. Profesjonalna obsługa przez całą dobę, 7 dni w tygodniu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-lg h-14">
                    <Phone className="h-5 w-5 mr-2" />
                    Zadzwoń teraz
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg h-14">
                    Zobacz usługi
                  </Button>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">24/7</p>
                      <p className="text-sm text-muted-foreground">Non-stop</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">10+ lat</p>
                      <p className="text-sm text-muted-foreground">Doświadczenia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Kalisz</p>
                      <p className="text-sm text-muted-foreground">i okolice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="uslugi" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Nasze usługi
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Kompleksowa obsługa hydrauliczna dla domów i firm w Kaliszu
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Udrażnianie rur</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mechaniczne czyszczenie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Usuwanie zatorów</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Inspekcja kamerą</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Naprawa bojlerów</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Serwis i konserwacja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Wymiana grzałek</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Diagnostyka awarii</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Droplet className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Instalacje WC/Prysznic</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Montaż armatury</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Wymiana sedesów</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Kabiny prysznicowe</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Pompy ciepła</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Montaż i uruchomienie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Serwis i przeglądy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Doradztwo techniczne</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Awarie 24h</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Natychmiastowa interwencja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Usuwanie przecieków</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Przywracanie sprawności</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Instalacje wod-kan</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Projektowanie sieci</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Kompleksowy montaż</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Modernizacja systemu</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  O nas
                </h2>
                <p className="text-lg text-muted-foreground mb-4 text-pretty leading-relaxed">
                  Profesjonalna firma hydrauliczna z Kalisza z ponad 10-letnim doświadczeniem w branży. Specjalizujemy się w kompleksowej obsłudze instalacji sanitarnych, pompy ciepła oraz interwencjach awaryjnych.
                </p>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Dostępni non-stop, 7 dni w tygodniu. Szybki dojazd, profesjonalne podejście i gwarancja na wykonane usługi.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">Lat doświadczenia</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Dostępność</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Zadowolenia klientów</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer id="kontakt" className="bg-card border-t py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Droplet className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold text-foreground">Hydro Fix</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Profesjonalne usługi hydrauliczne w Kaliszu i okolicach. Działamy 24/7.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Kontakt</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+48 XXX XXX XXX</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>kontakt@hydrofix.pl</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Kalisz i okolice</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Śledź nas</h3>
                  <div className="flex gap-4">
                    <Link 
                      href="#" 
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="#" 
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <MapPin className="h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39264.84927773434!2d18.05674!3d51.76294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471adb0c8a0f2f49%3A0x42f4d520b4e6f70!2sKalisz!5e0!3m2!1spl!2spl!4v1234567890"
                      width="100%"
                      height="150"
                      style={{ border: 0, borderRadius: '0.5rem' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="mt-4"
                      title="Mapa lokalizacji Hydro Fix w Kaliszu"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t text-center text-sm text-muted-foreground">
                <p>&copy; 2026 Hydro Fix - Hydraulik Kalisz 24/7. Wszelkie prawa zastrzeżone.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Floating CTA */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg h-14 rounded-full">
          <Phone className="h-5 w-5 mr-2" />
          Zadzwoń 24/7
        </Button>
      </div>
    </div>
  )
}
