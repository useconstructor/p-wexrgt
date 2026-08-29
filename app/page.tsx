"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Scale,
  FileSearch,
  FileText,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Clock,
  BarChart3,
  Lock,
  Plug,
  Calculator,
  MessageSquare,
  Building2,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navLinks = [
    { label: "Funciones", href: "#features" },
    { label: "Servicios", href: "#services" },
    { label: "Precios", href: "#pricing" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Preguntas Frecuentes", href: "#faq" },
  ];

  const stats = [
    { value: "500+", label: "Bufetes Confían en Nosotros" },
    { value: "2M+", label: "Documentos Analizados" },
    { value: "85%", label: "Tiempo Ahorrado en Investigación" },
    { value: "99.9%", label: "Garantía de Disponibilidad" },
  ];

  const features = [
    {
      icon: FileSearch,
      title: "Análisis de Contratos",
      description:
        "La IA identifica riesgos, cláusulas inusuales y problemas potenciales en segundos. Obtén anotaciones resaltadas y resúmenes en lenguaje sencillo.",
      size: "large",
    },
    {
      icon: Scale,
      title: "Motor de Investigación Legal",
      description:
        "Busca jurisprudencia, estatutos y regulaciones con consultas en lenguaje natural. Encuentra precedentes relevantes más rápido que los métodos tradicionales.",
      size: "medium",
    },
    {
      icon: FileText,
      title: "Redacción de Documentos",
      description:
        "Genera primeros borradores de contratos, mociones y escritos usando plantillas personalizables basadas en mejores prácticas.",
      size: "medium",
    },
    {
      icon: Lock,
      title: "Almacenamiento Seguro",
      description:
        "Encriptación de nivel bancario para todos los documentos con controles de acceso granulares.",
      size: "small",
    },
    {
      icon: Plug,
      title: "Integraciones Sin Problemas",
      description:
        "Conéctate con Clio, MyCase, PracticePanther y más.",
      size: "small",
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Informes de Evaluación de Riesgos",
      description:
        "Análisis integral de riesgos contractuales con calificaciones de severidad y acciones recomendadas para cada problema identificado.",
    },
    {
      icon: Zap,
      title: "Due Diligence Instantáneo",
      description:
        "Acelera fusiones, adquisiciones y transacciones corporativas con revisión de documentos impulsada por IA que procesa miles de páginas en horas.",
    },
    {
      icon: Calculator,
      title: "Facturación por Uso",
      description:
        "Solo paga por lo que usas. Nuestro modelo de precios transparente escala con tu práctica sin cargos sorpresa.",
    },
    {
      icon: Users,
      title: "Colaboración en Equipo",
      description:
        "Comparte documentos, anotaciones e investigaciones en todo tu bufete con permisos basados en roles y registros de auditoría.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Sube Tus Documentos",
      description:
        "Sube de forma segura contratos, escritos o cualquier documento legal a través de nuestro portal encriptado o integraciones.",
    },
    {
      step: "02",
      title: "Análisis de IA",
      description:
        "Nuestros modelos analizan tus documentos, identificando términos clave, riesgos y jurisprudencia relevante automáticamente.",
    },
    {
      step: "03",
      title: "Revisa los Hallazgos",
      description:
        "Obtén información accionable con secciones resaltadas, puntuaciones de riesgo y explicaciones en lenguaje sencillo.",
    },
    {
      step: "04",
      title: "Toma Acción",
      description:
        "Exporta informes, redacta respuestas o colabora con tu equipo directamente dentro de la plataforma.",
    },
  ];

  const pricingPlans = [
    {
      name: "Profesional Independiente",
      price: "$199",
      period: "/mes",
      description: "Perfecto para abogados individuales y prácticas pequeñas",
      features: [
        "Hasta 100 análisis de documentos por mes",
        "Acceso básico a investigación legal",
        "5 plantillas de documentos",
        "Soporte por correo electrónico",
        "Almacenamiento seguro de documentos (10GB)",
      ],
      popular: false,
    },
    {
      name: "Bufete en Crecimiento",
      price: "$499",
      period: "/mes",
      description: "Ideal para bufetes medianos que escalan su práctica",
      features: [
        "Hasta 500 análisis de documentos por mes",
        "Investigación legal avanzada con jurisprudencia",
        "25 plantillas de documentos",
        "Soporte prioritario",
        "Almacenamiento seguro de documentos (50GB)",
        "Colaboración en equipo (hasta 10 usuarios)",
        "Integración con herramientas de gestión de práctica",
      ],
      popular: true,
    },
    {
      name: "Empresarial",
      price: "Personalizado",
      period: "",
      description: "Para grandes bufetes con requisitos complejos",
      features: [
        "Análisis de documentos ilimitados",
        "Suite completa de investigación legal",
        "Plantillas de documentos personalizadas",
        "Gerente de cuenta dedicado",
        "Almacenamiento seguro ilimitado",
        "Miembros de equipo ilimitados",
        "Integraciones personalizadas y acceso API",
        "Opciones de implementación en sitio",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "JurisAI ha transformado cómo manejamos la revisión de contratos. Lo que antes tomaba días a nuestros asociados ahora toma horas. Solo la función de resaltado de riesgos nos ha salvado de pasar por alto cláusulas críticas.",
      author: "Socio Director",
      firm: "Thompson Sterling LLP",
      initials: "SD",
    },
    {
      quote:
        "Como profesional independiente, necesitaba una ventaja para competir con bufetes más grandes. JurisAI me da capacidades de investigación de nivel empresarial a una fracción del costo. Mis clientes están impresionados con la rapidez con que puedo entregar análisis completos.",
      author: "Abogado Independiente",
      firm: "Meridian Law Office",
      initials: "AI",
    },
    {
      quote:
        "La integración con nuestro software de gestión de práctica existente fue perfecta. Nuestro equipo adoptó JurisAI en una semana y hemos visto una mejora medible en nuestros tiempos de entrega de documentos.",
      author: "Director de Operaciones",
      firm: "Blackwell & Associates",
      initials: "DO",
    },
  ];

  const faqs = [
    {
      question: "¿Cómo garantiza JurisAI la seguridad de mis documentos?",
      answer:
        "Todos los documentos están encriptados tanto en tránsito como en reposo usando encriptación AES 256. Mantenemos cumplimiento SOC 2 Tipo II, y nuestra infraestructura está alojada en servidores cloud seguros con auditorías de seguridad regulares. Tú retienes la propiedad total de tus datos, y nunca usamos tus documentos para entrenar nuestros modelos sin consentimiento explícito.",
    },
    {
      question: "¿Puede JurisAI reemplazar a mi equipo de investigación legal?",
      answer:
        "JurisAI está diseñado para potenciar a tu equipo, no para reemplazarlo. Maneja la investigación inicial y revisión de documentos que consume tiempo, permitiendo que tus abogados se enfoquen en estrategia, relaciones con clientes y análisis legal complejo que requiere juicio humano.",
    },
    {
      question: "¿Qué tipos de documentos puede analizar JurisAI?",
      answer:
        "JurisAI puede analizar una amplia gama de documentos legales incluyendo contratos, acuerdos de confidencialidad, contratos de empleo, arrendamientos, documentos corporativos, documentos de litigio y materiales de cumplimiento regulatorio. Soportamos formatos PDF, Word y texto plano.",
    },
    {
      question: "¿Qué tan preciso es el análisis de contratos de la IA?",
      answer:
        "Nuestro análisis de contratos logra más del 95% de precisión en identificar cláusulas clave, riesgos y obligaciones. Sin embargo, siempre recomendamos la revisión por abogados de los hallazgos generados por IA. JurisAI proporciona la base para un análisis más rápido y exhaustivo, con tu experiencia proporcionando el juicio final.",
    },
    {
      question: "¿Ofrecen capacitación para nuestro equipo?",
      answer:
        "Sí, todos los planes incluyen sesiones de incorporación. Los planes Bufete en Crecimiento y Empresarial incluyen programas de capacitación integrales, y los clientes Empresariales reciben capacitación continua a medida que lanzamos nuevas funciones. También ofrecemos una amplia base de conocimientos y tutoriales en video.",
    },
    {
      question: "¿Cuáles son las opciones de precios y hay una prueba gratis?",
      answer:
        "Ofrecemos tres planes: Profesional Independiente ($199/mes), Bufete en Crecimiento ($499/mes) y Empresarial (precios personalizados). Todos los planes incluyen una prueba gratis de 14 días sin necesidad de tarjeta de crédito. No hay contratos a largo plazo y puedes cancelar cuando quieras. Para prácticas más grandes con requisitos específicos, contacta a nuestro equipo de ventas para opciones personalizadas.",
    },
  ];

  return (
    <main className="min-h-screen bg-navy-deep">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-sm border-b border-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-gold" />
              <span className="font-serif text-2xl text-light">JurisAI</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-blue hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-light hover:text-gold hover:bg-navy"
                asChild
              >
                <a href="#contact">Solicitar Demo</a>
              </Button>
              <Button className="bg-gold text-navy-deep hover:bg-gold-light" asChild>
                <a href="#pricing">Comenzar</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-light"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-navy-deep border-b border-navy transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-light hover:text-gold transition-all duration-300"
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 60}ms` : "0ms",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-navy-deep"
                  asChild
                >
                  <a href="#contact">Solicitar Demo</a>
                </Button>
                <Button className="w-full bg-gold text-navy-deep hover:bg-gold-light" asChild>
                  <a href="#pricing">Comenzar</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" style={{ backgroundColor: '#0d4f4f' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d4f4f] via-[#0d4f4f] to-[#0b4545] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-navy border-gold text-gold mb-6">
            Inteligencia Legal Impulsada por IA
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Trabajo Legal a la{" "}
            <span className="text-gold">Velocidad del Pensamiento</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-blue max-w-2xl mx-auto mb-10">
            Transforma tu práctica con análisis de contratos impulsado por IA,
            investigación legal y redacción de documentos. Confiado por más de 500
            bufetes de abogados en todo el mundo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold-light px-8 py-6 text-lg"
              asChild
            >
              <a href="#pricing">
                Iniciar Prueba Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-muted-blue text-light hover:bg-navy hover:border-gold px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">Agendar Demo</a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-2xl blur-xl" />
            <div className="relative rounded-xl overflow-hidden border border-navy shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="Panel de JurisAI mostrando análisis de contratos e interfaz de investigación legal"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-navy border-y border-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-blue text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 lg:py-32 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-navy border-gold text-gold mb-4">
              Capacidades
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Funciones Potentes para la Práctica Legal Moderna
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Todo lo que necesitas para optimizar tu flujo de trabajo legal, desde
              análisis de documentos hasta investigación y redacción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <Card className="lg:col-span-2 lg:row-span-2 bg-navy border-navy-deep hover:border-gold/50 transition-colors group">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <FileSearch className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl text-light mb-4 font-serif">
                  {features[0].title}
                </CardTitle>
                <p className="text-muted-blue text-lg mb-8 flex-grow">
                  {features[0].description}
                </p>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/feature.png"
                    alt="Función de análisis de contratos mostrando resaltado de riesgos"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medium Feature Cards */}
            {features.slice(1, 3).map((feature, index) => (
              <Card
                key={index}
                className="bg-navy border-navy-deep hover:border-gold/50 transition-colors group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <CardTitle className="text-xl text-light mb-3 font-serif">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-blue">{feature.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Small Feature Cards */}
            {features.slice(3).map((feature, index) => (
              <Card
                key={index}
                className="bg-navy border-navy-deep hover:border-gold/50 transition-colors group"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-light mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-muted-blue text-sm">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-navy-deep border-gold text-gold mb-4">
              Servicios
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Cómo JurisAI Potencia Tu Práctica
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Desde profesionales independientes hasta bufetes empresariales, nuestra
              IA se adapta a tu flujo de trabajo y escala con tus necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-navy-deep border-navy hover:border-gold/50 transition-all hover:-translate-y-1 group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-colors">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-light mb-4 font-serif">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-blue leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-navy border-gold text-gold mb-4">
              Cómo Funciona
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Comienza en Minutos
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Nuestra incorporación optimizada te lleva del registro a los
              hallazgos más rápido que cualquier herramienta tradicional de investigación legal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gold/50 to-transparent -translate-x-8" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy border-2 border-gold mb-6">
                    <span className="font-serif text-2xl text-gold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-blue text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-navy-deep border-gold text-gold mb-4">
              Precios
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Precios Transparentes para Cada Práctica
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Sin tarifas ocultas. Sin contratos a largo plazo. Comienza con una
              prueba gratis y escala a medida que creces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-navy-deep border-2 transition-all ${
                  plan.popular
                    ? "border-gold scale-105 lg:scale-110"
                    : "border-navy hover:border-gold/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gold text-navy-deep px-4 py-1">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl text-light mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-blue text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="font-serif text-4xl lg:text-5xl text-gold">
                      {plan.price}
                    </span>
                    <span className="text-muted-blue">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-light text-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gold text-navy-deep hover:bg-gold-light"
                        : "bg-navy border border-gold text-gold hover:bg-gold hover:text-navy-deep"
                    }`}
                    asChild
                  >
                    <a href="#contact">
                      {plan.price === "Personalizado" ? "Contactar Ventas" : "Iniciar Prueba Gratis"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-navy border-gold text-gold mb-4">
              Testimonios
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Confiado por Bufetes Líderes
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Descubre cómo profesionales legales están transformando su práctica
              con JurisAI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-navy border-navy-deep hover:border-gold/30 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <p className="text-light mb-8 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="text-light font-medium">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-blue text-sm">
                        {testimonial.firm}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 lg:py-32 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-navy-deep border-gold text-gold mb-4">FAQ</Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-blue">
              Todo lo que necesitas saber sobre JurisAI y cómo puede ayudar a tu
              práctica.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-navy-deep rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between bg-navy-deep hover:bg-navy transition-colors text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="text-light font-medium pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-blue shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 bg-navy-deep transition-all duration-300 ease-out ${
                    openFaq === index
                      ? "max-h-96 py-5 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-muted-blue leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-gold/20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-16">
              <div>
                <Badge className="bg-gold/20 border-gold text-gold mb-6">
                  Comienza Hoy
                </Badge>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-6">
                  ¿Listo para Transformar Tu Práctica Legal?
                </h2>
                <p className="text-muted-blue text-lg mb-8">
                  Únete a más de 500 bufetes que ya usan JurisAI para trabajar de
                  manera más inteligente, rápida y eficiente. Inicia tu prueba
                  gratis o agenda una demo personalizada.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-light">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    14 días de prueba gratis, sin tarjeta de crédito
                  </div>
                  <div className="flex items-center gap-3 text-light">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Incorporación y capacitación personalizadas
                  </div>
                  <div className="flex items-center gap-3 text-light">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Cancela cuando quieras, sin compromiso a largo plazo
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-navy-deep/80 border-navy backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-light font-serif text-2xl">
                    Solicitar una Demo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Nombre"
                        className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                      />
                      <Input
                        placeholder="Apellido"
                        className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Correo de Trabajo"
                      className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                    />
                    <Input
                      placeholder="Nombre del Bufete"
                      className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                    />
                    <Textarea
                      placeholder="Cuéntanos sobre tu práctica y qué buscas lograr"
                      rows={4}
                      className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold resize-none"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gold text-navy-deep hover:bg-gold-light"
                    >
                      Enviar Solicitud <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-navy border-t border-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <Scale className="w-8 h-8 text-gold" />
                <span className="font-serif text-2xl text-light">JurisAI</span>
              </a>
              <p className="text-muted-blue text-sm mb-6">
                Inteligencia legal impulsada por IA para bufetes modernos. Transforma
                tu práctica con análisis de contratos más inteligente, investigación
                y redacción de documentos.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:contact@jurisai.com"
                  className="w-10 h-10 rounded-full bg-navy-deep flex items-center justify-center text-muted-blue hover:text-gold hover:bg-gold/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-deep flex items-center justify-center text-muted-blue hover:text-gold hover:bg-gold/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-deep flex items-center justify-center text-muted-blue hover:text-gold hover:bg-gold/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-light mb-4">Producto</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Funciones
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Precios
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Casos de Estudio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-light mb-4">Empresa</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-light mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Seguridad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-navy-deep flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-blue text-sm">
              &copy; {new Date().getFullYear()} JurisAI. Todos los derechos reservados.
            </p>
            <p className="text-muted-blue text-sm">
              Creado para profesionales legales que exigen excelencia.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
