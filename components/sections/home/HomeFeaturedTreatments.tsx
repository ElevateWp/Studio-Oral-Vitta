import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#2C2925] block mb-2 font-medium uppercase tracking-wider">
            Casos em Destaque
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#2C2925]">
            Tratamentos e reconstruções clínicas
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured Case 1: Guided Dental Implantology & Immediate Load */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#2C2925] uppercase tracking-wider block mb-2 font-medium">
                Dr. Fernando • Implantes & Carga Imediata
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#2C2925] mb-4">
                Implantes Carga Imediata: Seu Sorriso Recuperado em 1 Dia
              </h3>
              <p className="font-body text-15 md:text-17 text-[#2C2925]/80 leading-relaxed mb-6">
                Com a técnica de carga imediata, o Dr. Fernando restabelece dentes perdidos e a segurança do sorriso em apenas 1 dia, proporcionando agilidade, estética e recuperação rápida.
              </p>
              <div className="p-4 bg-[#F1EEE8] border-l-4 border-[#2C2925] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#2C2925]/80">
                  <strong className="text-[#2C2925] font-semibold">Destaque:</strong> Recuperação rápida da função mastigatória e autoestima sem esperas prolongadas.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Saiba mais sobre Implantes
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/dr-fernando.png"
                  alt="Dr. Fernando"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Featured Case 2: Orthodontics and Specialized Care */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/vitta-consultation-room.jpg"
                  alt="Sala de consulta da Studio Oral Vitta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#2C2925] uppercase tracking-wider block mb-2 font-medium">
                Dr. Fernando • Ortodontia & Especialidades
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#2C2925] mb-4">
                Aparelhos Ortodônticos e Cuidado Minucioso
              </h3>
              <p className="font-body text-15 md:text-17 text-[#2C2925]/80 leading-relaxed mb-6">
                Planejamento ortodôntico de precisão e tratamentos restauradores conduzidos com extrema atenção e competência pelo Dr. Fernando, garantindo alinhamento e saúde bucal completa.
              </p>
              <div className="p-4 bg-[#F1EEE8] border-l-4 border-[#2C2925] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#2C2925]/80">
                  <strong className="text-[#2C2925] font-semibold">Resultado:</strong> Harmonia do sorriso, mordida equilibrada e atendimento acolhedor.
                </span>
              </div>
              <Button href="/braces/" variant="ghost" size="md">
                Saiba mais sobre Aparelhos
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
