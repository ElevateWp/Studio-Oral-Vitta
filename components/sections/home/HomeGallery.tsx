import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#0A2472] block mb-2 font-medium uppercase tracking-wider">
            Nosso Consultório
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#111827]">
            Nosso Consultório em Manaus — Ambiente Seguro e Acolhedor
          </h2>
        </AnimateOnScroll>

        {/* Asymmetric Grid Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {/* Item 1: Dr. Marcelo portrait */}
          <AnimateOnScroll animation="fade-right" duration={0.85} className="md:col-span-5 min-h-[380px] md:min-h-[440px] relative bg-[#D9F3FC] overflow-hidden border border-[#D7E1E8] shadow-sm">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="/images/dr-marcelo.png"
                alt="Dr. Marcelo de Souza Bezerra — Cirurgião-Dentista Especialista em Implantes"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#0A2472]/90 backdrop-blur-sm text-white font-body text-12 px-3 py-1 font-medium">
              Dr. Marcelo de Souza Bezerra
            </div>
          </AnimateOnScroll>

          {/* Item 2: Treatment room */}
          <AnimateOnScroll animation="fade-down" duration={0.85} className="md:col-span-7 min-h-[380px] md:min-h-[440px] relative bg-[#D7E1E8] overflow-hidden border border-[#D7E1E8] shadow-sm">
            <MediaParallax speed={0.08} className="w-full h-full">
              <Image
                src="/images/interior-operatory.png"
                alt="Sala de tratamento odontológico — Consultório Dr. Marcelo de Souza Bezerra"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#0A2472]/90 backdrop-blur-sm text-white font-body text-12 px-3 py-1 font-medium">
              Sala de Tratamento Odontológico
            </div>
          </AnimateOnScroll>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Item 3: Consultation office */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} className="aspect-[4/3] relative bg-[#D7E1E8] overflow-hidden border border-[#D7E1E8] shadow-sm">
            <MediaParallax speed={0.05} className="w-full h-full">
              <Image
                src="/images/interior-office.png"
                alt="Consultório Dr. Marcelo — Sala de atendimento e planejamento"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#0A2472]/90 backdrop-blur-sm text-white font-body text-12 px-3 py-1 font-medium">
              Sala de Atendimento
            </div>
          </AnimateOnScroll>

          {/* Item 4: Another view of the operatory */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1} className="aspect-[4/3] relative bg-[#D7E1E8] overflow-hidden border border-[#D7E1E8] shadow-sm">
            <MediaParallax speed={0.07} className="w-full h-full">
              <Image
                src="/images/interior-operatory.png"
                alt="Vista da sala de tratamento — Consultório Dr. Marcelo"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#0A2472]/90 backdrop-blur-sm text-white font-body text-12 px-3 py-1 font-medium">
              Vista do Consultório
            </div>
          </AnimateOnScroll>

          {/* Item 5: Dr. Marcelo portrait again (card) */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2} className="aspect-[4/3] relative bg-[#D9F3FC] overflow-hidden border border-[#D7E1E8] shadow-sm sm:col-span-2 md:col-span-1">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="/images/dr-marcelo.png"
                alt="Dr. Marcelo de Souza Bezerra — Especialista CRO-AM"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#0A2472]/90 backdrop-blur-sm text-white font-body text-12 px-3 py-1 font-medium">
              Dr. Marcelo — CRO-AM Verificado
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
