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
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const stats = [
    { value: "500+", label: "Law Firms Trust Us" },
    { value: "2M+", label: "Documents Analyzed" },
    { value: "85%", label: "Research Time Saved" },
    { value: "99.9%", label: "Uptime Guarantee" },
  ];

  const features = [
    {
      icon: FileSearch,
      title: "Contract Analysis",
      description:
        "AI identifies risks, unusual clauses, and potential issues in seconds. Get highlighted annotations and plain-language summaries.",
      size: "large",
    },
    {
      icon: Scale,
      title: "Legal Research Engine",
      description:
        "Search case law, statutes, and regulations with natural language queries. Find relevant precedents faster than traditional methods.",
      size: "medium",
    },
    {
      icon: FileText,
      title: "Document Drafting",
      description:
        "Generate first drafts of contracts, motions, and briefs using customizable templates based on best practices.",
      size: "medium",
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description:
        "Bank-level encryption for all documents with granular access controls.",
      size: "small",
    },
    {
      icon: Plug,
      title: "Seamless Integrations",
      description:
        "Connect with Clio, MyCase, PracticePanther, and more.",
      size: "small",
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Risk Assessment Reports",
      description:
        "Comprehensive contract risk analysis with severity ratings and recommended actions for each identified issue.",
    },
    {
      icon: Zap,
      title: "Instant Due Diligence",
      description:
        "Accelerate mergers, acquisitions, and corporate transactions with AI-powered document review that processes thousands of pages in hours.",
    },
    {
      icon: Calculator,
      title: "Usage-Based Billing",
      description:
        "Only pay for what you use. Our transparent pricing model scales with your practice without surprise charges.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share documents, annotations, and research across your firm with role-based permissions and audit logs.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Upload Your Documents",
      description:
        "Securely upload contracts, briefs, or any legal document through our encrypted portal or integrations.",
    },
    {
      step: "02",
      title: "AI Analysis",
      description:
        "Our models analyze your documents, identifying key terms, risks, and relevant case law automatically.",
    },
    {
      step: "03",
      title: "Review Findings",
      description:
        "Get actionable insights with highlighted sections, risk scores, and plain-language explanations.",
    },
    {
      step: "04",
      title: "Take Action",
      description:
        "Export reports, draft responses, or collaborate with your team directly within the platform.",
    },
  ];

  const pricingPlans = [
    {
      name: "Solo Practitioner",
      price: "$199",
      period: "/month",
      description: "Perfect for individual attorneys and small practices",
      features: [
        "Up to 100 document analyses per month",
        "Basic legal research access",
        "5 document templates",
        "Email support",
        "Secure document storage (10GB)",
      ],
      popular: false,
    },
    {
      name: "Growing Firm",
      price: "$499",
      period: "/month",
      description: "Ideal for mid-sized firms scaling their practice",
      features: [
        "Up to 500 document analyses per month",
        "Advanced legal research with case law",
        "25 document templates",
        "Priority support",
        "Secure document storage (50GB)",
        "Team collaboration (up to 10 users)",
        "Practice management tool integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large firms with complex requirements",
      features: [
        "Unlimited document analyses",
        "Full legal research suite",
        "Custom document templates",
        "Dedicated account manager",
        "Unlimited secure storage",
        "Unlimited team members",
        "Custom integrations and API access",
        "On-premise deployment options",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "JurisAI has transformed how we handle contract review. What used to take our associates days now takes hours. The risk highlighting feature alone has saved us from overlooking critical clauses.",
      author: "Managing Partner",
      firm: "Thompson Sterling LLP",
      initials: "MP",
    },
    {
      quote:
        "As a solo practitioner, I needed an edge to compete with larger firms. JurisAI gives me enterprise-level research capabilities at a fraction of the cost. My clients are impressed with how quickly I can deliver thorough analyses.",
      author: "Solo Attorney",
      firm: "Meridian Law Office",
      initials: "SA",
    },
    {
      quote:
        "The integration with our existing practice management software was seamless. Our team adopted JurisAI within a week, and we've seen measurable improvement in our document turnaround times.",
      author: "Director of Operations",
      firm: "Blackwell & Associates",
      initials: "DO",
    },
  ];

  const faqs = [
    {
      question: "How does JurisAI ensure my documents are secure?",
      answer:
        "All documents are encrypted both in transit and at rest using AES 256 encryption. We maintain SOC 2 Type II compliance, and our infrastructure is hosted on secure cloud servers with regular security audits. You retain full ownership of your data, and we never use your documents to train our models without explicit consent.",
    },
    {
      question: "Can JurisAI replace my legal research team?",
      answer:
        "JurisAI is designed to augment your team, not replace it. It handles time-consuming initial research and document review, allowing your attorneys to focus on strategy, client relationships, and complex legal analysis that requires human judgment.",
    },
    {
      question: "What types of documents can JurisAI analyze?",
      answer:
        "JurisAI can analyze a wide range of legal documents including contracts, NDAs, employment agreements, leases, corporate documents, litigation documents, and regulatory compliance materials. We support PDF, Word, and plain text formats.",
    },
    {
      question: "How accurate is the AI contract analysis?",
      answer:
        "Our contract analysis achieves over 95% accuracy in identifying key clauses, risks, and obligations. However, we always recommend attorney review of AI-generated findings. JurisAI provides the foundation for faster, more thorough analysis, with your expertise providing the final judgment.",
    },
    {
      question: "Do you offer training for our team?",
      answer:
        "Yes, all plans include onboarding sessions. Growing Firm and Enterprise plans include comprehensive training programs, and Enterprise customers receive ongoing training as we release new features. We also offer an extensive knowledge base and video tutorials.",
    },
    {
      question: "What are the pricing options, and is there a free trial?",
      answer:
        "We offer three plans: Solo Practitioner ($199/month), Growing Firm ($499/month), and Enterprise (custom pricing). All plans include a 14-day free trial with no credit card required. There are no long-term contracts, and you can cancel anytime. For larger practices with specific requirements, contact our sales team for customized options.",
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
                <a href="#contact">Request Demo</a>
              </Button>
              <Button className="bg-gold text-navy-deep hover:bg-gold-light" asChild>
                <a href="#pricing">Get Started</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-light"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                  <a href="#contact">Request Demo</a>
                </Button>
                <Button className="w-full bg-gold text-navy-deep hover:bg-gold-light" asChild>
                  <a href="#pricing">Get Started</a>
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
            AI-Powered Legal Intelligence
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Legal Work at the{" "}
            <span className="text-gold">Speed of Thought</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-blue max-w-2xl mx-auto mb-10">
            Transform your practice with AI-powered contract analysis,
            legal research, and document drafting. Trusted by over 500
            law firms worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gold text-navy-deep hover:bg-gold-light px-8 py-6 text-lg"
              asChild
            >
              <a href="#pricing">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-muted-blue text-light hover:bg-navy hover:border-gold px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">Schedule Demo</a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-2xl blur-xl" />
            <div className="relative rounded-xl overflow-hidden border border-navy shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="JurisAI dashboard showing contract analysis and legal research interface"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-blue text-sm mb-8">
            Trusted by leading law firms worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="w-40 h-16 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-muted-blue text-sm font-medium">Thompson Sterling</span>
            </div>
            <div className="w-40 h-16 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-muted-blue text-sm font-medium">Blackwell & Associates</span>
            </div>
            <div className="w-40 h-16 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-muted-blue text-sm font-medium">Meridian Law</span>
            </div>
            <div className="w-40 h-16 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-muted-blue text-sm font-medium">Harrison Legal</span>
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
              Capabilities
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Powerful Features for Modern Legal Practice
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Everything you need to streamline your legal workflow, from
              document analysis to research and drafting.
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
                    alt="Contract analysis feature showing risk highlighting"
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
              Services
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              How JurisAI Empowers Your Practice
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              From solo practitioners to enterprise firms, our AI adapts
              to your workflow and scales with your needs.
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
              How It Works
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Our streamlined onboarding takes you from signup to insights
              faster than any traditional legal research tool.
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
              Pricing
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Transparent Pricing for Every Practice
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              No hidden fees. No long-term contracts. Start with a free trial
              and scale as you grow.
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
                      Most Popular
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
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
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
              Testimonials
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-4">
              Trusted by Leading Firms
            </h2>
            <p className="text-muted-blue max-w-2xl mx-auto">
              Discover how legal professionals are transforming their practice
              with JurisAI.
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
              Frequently Asked Questions
            </h2>
            <p className="text-muted-blue">
              Everything you need to know about JurisAI and how it can help your
              practice.
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
                  Get Started Today
                </Badge>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-light mb-6">
                  Ready to Transform Your Legal Practice?
                </h2>
                <p className="text-muted-blue text-lg mb-8">
                  Join over 500 firms already using JurisAI to work smarter,
                  faster, and more efficiently. Start your free trial or
                  schedule a personalized demo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-light">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    14-day free trial, no credit card required
                  </div>
                  <div className="flex items-center gap-3 text-light">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Personalized onboarding and training
                  </div>
                  <div className="flex items-center gap-3 text-light">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Cancel anytime, no long-term commitment
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-navy-deep/80 border-navy backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-light font-serif text-2xl">
                    Request a Demo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                    />
                    <Input
                      placeholder="Firm Name"
                      className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold"
                    />
                    <Textarea
                      placeholder="Tell us about your practice and what you're looking to achieve"
                      rows={4}
                      className="bg-navy border-navy text-light placeholder:text-muted-blue focus:border-gold resize-none"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gold text-navy-deep hover:bg-gold-light"
                    >
                      Submit Request <ArrowRight className="ml-2 w-4 h-4" />
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
                AI-powered legal intelligence for modern law firms. Transform
                your practice with smarter contract analysis, research,
                and document drafting.
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
              <h4 className="font-semibold text-light mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-light mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Contact
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
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-blue hover:text-gold transition-colors text-sm"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-navy-deep flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-blue text-sm">
              &copy; {new Date().getFullYear()} JurisAI. All rights reserved.
            </p>
            <p className="text-muted-blue text-sm">
              Built for legal professionals who demand excellence.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
