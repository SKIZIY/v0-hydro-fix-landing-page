import Link from 'next/link'
import { Phone, Wrench, Droplet, Thermometer, Clock, CheckCircle2, MapPin, Mail, Facebook, Shield, Award, Users, Star, TrendingUp, Zap, Settings, Home, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

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
          <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 z-10" />
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero-hydraulic.jpg"
                alt="Profesjonalny hydraulik Kalisz"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
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
                  <Button size="lg" variant="outline" className="text-lg h-14 bg-background/80 backdrop-blur">
                    Zobacz usługi
                  </Button>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 backdrop-blur">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">24/7</p>
                      <p className="text-sm text-muted-foreground">Non-stop</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 backdrop-blur">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">10+ lat</p>
                      <p className="text-sm text-muted-foreground">Doświadczenia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 backdrop-blur">
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

          {/* Trust Badges Section */}
          <section className="py-12 bg-background border-y">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Gwarancja</p>
                    <p className="text-sm text-muted-foreground">Na wszystkie usługi</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Certyfikaty</p>
                    <p className="text-sm text-muted-foreground">Uprawnienia</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Szybko</p>
                    <p className="text-sm text-muted-foreground">30-60 min dojazd</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Doświadczenie</p>
                    <p className="text-sm text-muted-foreground">1000+ klientów</p>
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

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Dlaczego my?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Profesjonalizm, doświadczenie i terminowość - to nas wyróżnia
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Dostępność 24/7</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Nasza ekipa jest dostępna przez całą dobę, 7 dni w tygodniu, również w święta. Awarie nie czekają - my też nie.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Szybki czas reakcji</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Średni czas dojazdu to zaledwie 30-60 minut. W nagłych przypadkach staramy się być jeszcze szybciej.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Profesjonalny sprzęt</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Dysponujemy najnowocześniejszym sprzętem diagnostycznym i narzędziami najwyższej jakości.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Gwarancja i ubezpieczenie</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Wszystkie nasze usługi objęte są gwarancją. Posiadamy pełne ubezpieczenie OC i NW.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Wykwalifikowana kadra</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Nasi specjaliści posiadają wszystkie wymagane uprawnienia i certyfikaty branżowe.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Konkurencyjne ceny</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Oferujemy przejrzyste kosztorysy bez ukrytych opłat. Najlepsza jakość w rozsądnej cenie.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Nasze realizacje
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Zobacz przykłady naszych prac i przekonaj się o jakości usług
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src="/images/bathroom-install.jpg"
                    alt="Instalacja łazienki Kalisz"
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                    <p className="text-foreground font-semibold">Łazienka pod klucz</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src="/images/heating-system.jpg"
                    alt="Pompa ciepła Kalisz"
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                    <p className="text-foreground font-semibold">Pompa ciepła</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src="/images/pipe-repair.jpg"
                    alt="Naprawa instalacji Kalisz"
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                    <p className="text-foreground font-semibold">Modernizacja rur</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src="/images/kitchen-plumbing.jpg"
                    alt="Instalacja kuchenna Kalisz"
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                    <p className="text-foreground font-semibold">Kuchnia</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group md:col-span-2">
                  <Image
                    src="/images/emergency-service.jpg"
                    alt="Pogotowie hydrauliczne Kalisz"
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                    <p className="text-foreground font-semibold">Interwencja awaryjna 24/7</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden group md:col-span-2">
                  <Image
                    src="/images/water-heater.jpg"
                    alt="Bojler Kalisz"
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                    <p className="text-foreground font-semibold">Montaż bojlera</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Opinie klientów
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Zaufało nam ponad 1000 zadowolonych klientów
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {'"Szybka reakcja w nocy gdy pękła rura. Pan hydraulik przyjechał w 40 minut i wszystko naprawił profesjonalnie. Gorąco polecam!"'}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Anna K.</p>
                    <p className="text-sm text-muted-foreground">Kalisz</p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {'"Montaż całej instalacji w nowym domu. Terminowo, solidnie i w dobrej cenie. Nie spodziewałem się aż tak profesjonalnej obsługi."'}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Marek W.</p>
                    <p className="text-sm text-muted-foreground">Opatówek</p>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {'"Pompa ciepła zainstalowana bez zarzutu. Fachowe doradztwo i rzetelna praca. Bardzo polecam tę firmę!"'}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Piotr S.</p>
                    <p className="text-sm text-muted-foreground">Koźminek</p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Emergency Services Detail Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                    Pogotowie hydrauliczne 24/7
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Awarie hydrauliczne nie wybierają pory dnia ani nocy. Dlatego nasza ekipa jest gotowa do działania przez całą dobę, siedem dni w tygodniu, włącznie ze świętami i weekendami.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Szybka reakcja</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Nasz średni czas dojazdu to zaledwie 30-60 minut od momentu zgłoszenia. W sytuacjach krytycznych, takich jak zalanie czy pęknięcie rury, staramy się być na miejscu jeszcze szybciej.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Settings className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Profesjonalny sprzęt</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Nasi specjaliści dysponują pełnym wyposażeniem do usuwania awarii na miejscu. Samochody serwisowe wyposażone są w specjalistyczne narzędzia i części zamienne.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Gwarancja usług</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Wszystkie nasze interwencje awaryjne objęte są gwarancją. Posiadamy pełne ubezpieczenie OC i NW, dzięki czemu możesz być spokojny o bezpieczeństwo swojego mienia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                    <Phone className="h-5 w-5 mr-2" />
                    Zadzwoń w sprawie awarii
                  </Button>
                </div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/emergency-service.jpg"
                    alt="Pogotowie hydrauliczne Kalisz - szybka pomoc"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Services with Images */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Szczegółowy zakres usług
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Kompleksowa obsługa hydrauliczna od A do Z
                </p>
              </div>
              
              {/* Bathroom Installations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1">
                  <Image
                    src="/images/bathroom-install.jpg"
                    alt="Instalacje łazienkowe Kalisz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Droplet className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Kompleksowe instalacje łazienkowe</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Zajmujemy się pełnym zakresem prac hydraulicznych w łazienkach - od projektowania po wykonanie końcowe. Montujemy wanny, kabiny prysznicowe, umywalki, sedesy oraz kompletną armaturę sanitarną.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Projekty na wymiar</p>
                        <p className="text-sm text-muted-foreground">Doradzimy najlepsze rozwiązania dostosowane do Twoich potrzeb i budżetu</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Nowoczesna armatura</p>
                        <p className="text-sm text-muted-foreground">Współpracujemy z renomowanymi producentami armatury sanitarnej</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Montaż systemów podtynkowych</p>
                        <p className="text-sm text-muted-foreground">Nowoczesne rozwiązania podtynkowe dla estetyki i funkcjonalności</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Heating Systems */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Pompy ciepła i systemy grzewcze</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Specjalizujemy się w montażu i serwisie nowoczesnych pomp ciepła oraz systemów ogrzewania. Pompy ciepła to ekologiczne i ekonomiczne rozwiązanie, które pozwala obniżyć koszty ogrzewania nawet o 70%.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Pompy powietrzne i gruntowe</p>
                        <p className="text-sm text-muted-foreground">Dobierzemy optymalny typ pompy ciepła do Twojej nieruchomości</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Pełna dokumentacja i rozruch</p>
                        <p className="text-sm text-muted-foreground">Kompleksowa obsługa wraz z uruchomieniem i przeszkoleniem</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Serwis i przeglądy okresowe</p>
                        <p className="text-sm text-muted-foreground">Regularne przeglądy zapewniające optymalną wydajność systemu</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/heating-system.jpg"
                    alt="Pompy ciepła Kalisz - montaż i serwis"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Pipe Repairs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1">
                  <Image
                    src="/images/leak-repair.jpg"
                    alt="Naprawa przecieków Kalisz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Naprawa przecieków i rur</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Przecieki i uszkodzone rury to problemy wymagające natychmiastowej reakcji. Dysponujemy profesjonalnym sprzętem do lokalizacji i usuwania przecieków, w tym kamerami endoskopowymi i detektorami wilgoci.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Lokalizacja bezniszcząca</p>
                        <p className="text-sm text-muted-foreground">Precyzyjna lokalizacja przecieków bez zbędnego kucia ścian</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Wymiana i naprawa rur</p>
                        <p className="text-sm text-muted-foreground">Pracujemy na nowoczesnych materiałach - PEX, miedź, polipropylen</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Próby szczelności</p>
                        <p className="text-sm text-muted-foreground">Każda naprawa kończy się profesjonalną próbą ciśnieniową</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Drain Cleaning */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Udrażnianie rur i kanalizacji</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Zapchane rury i kanalizacja to częsty problem w każdym gospodarstwie. Oferujemy profesjonalne usługi udrażniania z wykorzystaniem najnowszych technologii i specjalistycznego sprzętu.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Mechaniczne udrażnianie</p>
                        <p className="text-sm text-muted-foreground">Profesjonalne sprężyny hydrauliczne do usuwania uporczywych zatorów</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Inspekcja kamerą TV</p>
                        <p className="text-sm text-muted-foreground">Precyzyjna diagnostyka stanu rur i lokalizacja problemów</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Czyszczenie wysokociśnieniowe</p>
                        <p className="text-sm text-muted-foreground">Skuteczne usuwanie osadów i kamienia z instalacji</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/drain-cleaning.jpg"
                    alt="Udrażnianie rur Kalisz"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Water Heaters */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1">
                  <Image
                    src="/images/boiler-service.jpg"
                    alt="Serwis bojlerów Kalisz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Bojlery i podgrzewacze wody</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Montaż, naprawa i serwis bojlerów elektrycznych, gazowych oraz podgrzewaczy przepływowych. Zapewniamy ciągły dostęp do ciepłej wody użytkowej w Twoim domu lub firmie.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Montaż i wymiana</p>
                        <p className="text-sm text-muted-foreground">Profesjonalny dobór i instalacja optymalnego urządzenia</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Serwis i konserwacja</p>
                        <p className="text-sm text-muted-foreground">Regularne przeglądy i czyszczenie zapobiegające awariom</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Naprawa awarii</p>
                        <p className="text-sm text-muted-foreground">Wymiana grzałek, termostatów i innych komponentów</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Jak działamy?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Prosty proces od zgłoszenia do realizacji
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Kontakt</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Zadzwoń lub napisz. Opisz problem i umów się na wizytę
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                </div>
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Dojazd</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Szybki przyjazd naszego specjalisty na miejsce
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                </div>
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Diagnoza</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Profesjonalna ocena problemu i wycena naprawy
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                </div>
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Realizacja</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Naprawa lub montaż z gwarancją jakości
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Nasz zespół
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Doświadczeni specjaliści gotowi pomóc
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/team.jpg"
                    alt="Zespół Hydro Fix Kalisz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">Certyfikowani</h3>
                    <p className="text-sm text-muted-foreground">Wszyscy posiadamy uprawnienia</p>
                  </div>
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">Doświadczeni</h3>
                    <p className="text-sm text-muted-foreground">Średnio 10+ lat w branży</p>
                  </div>
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">Rzetelni</h3>
                    <p className="text-sm text-muted-foreground">Terminowość i jakość</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Potrzebujesz hydraulika?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
                  Skontaktuj się z nami już teraz. Jesteśmy dostępni 24/7, również w święta i weekendy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14">
                    <Phone className="h-5 w-5 mr-2" />
                    +48 XXX XXX XXX
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg h-14 bg-background text-foreground hover:bg-background/90">
                    <Mail className="h-5 w-5 mr-2" />
                    Wyślij email
                  </Button>
                </div>
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
