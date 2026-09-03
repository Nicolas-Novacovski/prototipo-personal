/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Check, Star, ArrowRight, Dumbbell, Instagram, Youtube, Menu } from 'lucide-react';

const getWaUrl = (message: string) => `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const BeforeAfterCard = ({ beforeImg, afterImg, name, desc }: { beforeImg: string, afterImg: string, name: string, desc: string }) => (
  <div className="group relative rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-800 hover:border-orange-500/50 transition-colors flex flex-col h-full">
    <div className="flex aspect-square">
       <div className="w-1/2 relative border-r border-zinc-950">
          <img src={beforeImg} alt={`Antes ${name}`} className="w-full h-full object-cover grayscale opacity-70" />
          <div className="absolute top-2 left-2 bg-zinc-900/80 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-zinc-300">ANTES</div>
       </div>
       <div className="w-1/2 relative">
          <img src={afterImg} alt={`Depois ${name}`} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-orange-500 text-zinc-950 text-[10px] font-bold px-2 py-1 rounded">DEPOIS</div>
       </div>
    </div>
    <div className="p-5 bg-zinc-900 z-10 flex-1">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-zinc-400">{desc}</p>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-orange-500/30 font-sans">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase">
            <Dumbbell className="text-orange-500 h-6 w-6" />
            <span>PRO<span className="text-orange-500">TRAINER</span></span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-zinc-400">
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href={getWaUrl("Olá! Gostaria de conhecer mais sobre a consultoria.")} target="_blank" rel="noreferrer" className="hidden sm:flex bg-[#25D366] hover:bg-[#1ebd50] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_-3px_rgba(37,211,102,0.4)] items-center gap-2 hover:-translate-y-0.5">
              <MessageCircle className="h-5 w-5" />
              <span>Falar no WhatsApp</span>
            </a>
            
            {/* Mobile menu toggle */}
            <button className="md:hidden p-2 text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-zinc-800 py-4 px-4 flex flex-col gap-4 font-bold uppercase tracking-wider text-sm">
            <a href="#resultados" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white">Resultados</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white">Depoimentos</a>
            <a href="#planos" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 hover:text-white">Planos</a>
            <a href={getWaUrl("Olá! Gostaria de conhecer mais sobre a consultoria.")} onClick={() => setIsMenuOpen(false)} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 mt-2">
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent blur-3xl" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-2xl">
            <motion.div initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} transition={{duration: 0.7}}>
              <div className="inline-block px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-wide">
                CONSULTORIA ESPORTIVA ONLINE
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 uppercase tracking-tight">
                Alcance o melhor <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">shape da sua vida</span>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
                Sem dietas malucas ou treinos intermináveis. Um método comprovado, ajustado para a sua rotina, para você queimar gordura e ganhar massa muscular de verdade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={getWaUrl("Olá! Gostaria de começar minha transformação agora mesmo!")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd50] text-white font-black text-lg px-8 py-4 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_-5px_rgba(37,211,102,0.7)] hover:-translate-y-1">
                  <MessageCircle className="h-6 w-6" />
                  Começar Transformação
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Aluno" className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover" />
                   ))}
                </div>
                <div className="text-sm text-zinc-400">
                  <div className="flex items-center text-orange-500 mb-1">
                    <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                  </div>
                  Mais de <span className="font-bold text-white">500+</span> alunos transformados
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.7, delay: 0.2}} className="relative lg:h-[600px] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Personal Trainer" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800" id="resultados">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Resultados <span className="text-orange-500">Reais</span></h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Não prometemos milagres, mostramos resultados. Arraste e veja a evolução de quem confiou no método.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <BeforeAfterCard 
                name="Lucas M." 
                desc="Ganhou 8kg de massa muscular em 6 meses, saindo do biotipo ectomorfo."
                beforeImg="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=600&auto=format&fit=crop"
                afterImg="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <BeforeAfterCard 
                name="Mariana S." 
                desc="Transformou o corpo com foco em membros inferiores e postura estrutural."
                beforeImg="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop"
                afterImg="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <BeforeAfterCard 
                name="Rafael C." 
                desc="Definição extrema. Ajuste fino de calorias e treino de força intenso."
                beforeImg="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=600&auto=format&fit=crop"
                afterImg="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">O que dizem os <span className="text-orange-500">Alunos</span></h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Tiago S.", text: "Já tinha tentado várias academias e sempre desistia. Com a consultoria online, a flexibilidade e os treinos focados me fizeram mudar de vida. Acompanhamento surreal pelo WhatsApp!" },
              { name: "Fernanda L.", text: "Treino em casa por falta de tempo. O coach montou um planejamento perfeito para a minha rotina usando apenas halteres. Em 3 meses vi resultados que não tive em anos." },
              { name: "Marcos V.", text: "Meu objetivo era hipertrofia. O treino é pesado, técnico e direto ao ponto. A área de vídeos explicativos tirou todas as minhas dúvidas. Recomendo de olhos fechados." }
            ].map((dep, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative h-full flex flex-col">
                   <div className="text-orange-500 mb-4 flex">
                      {[1,2,3,4,5].map(star => <Star key={star} className="h-5 w-5 fill-current" />)}
                   </div>
                   <p className="text-zinc-300 italic mb-8 flex-1">"{dep.text}"</p>
                   <div className="flex items-center gap-4 mt-auto">
                     <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-lg text-zinc-400 border border-zinc-700">
                       {dep.name.charAt(0)}
                     </div>
                     <div>
                       <p className="font-bold text-white">{dep.name}</p>
                       <p className="text-xs text-orange-500 font-semibold uppercase tracking-wider">Aluno da Consultoria</p>
                     </div>
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800" id="planos">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Escolha seu <span className="text-orange-500">Plano</span></h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Planos transparentes, sem fidelidade escondida. Comece hoje a sua transformação.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Basic */}
            <FadeIn delay={0.1}>
              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 text-zinc-300">Mensal</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">R$ 149</span><span className="text-zinc-500">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-zinc-600 shrink-0" /> <span className="text-zinc-300">Treino personalizado pelo app</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-zinc-600 shrink-0" /> <span className="text-zinc-300">Avaliação via questionário</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-zinc-600 shrink-0" /> <span className="text-zinc-300">Suporte WhatsApp horário comercial</span></li>
                </ul>
                <a href={getWaUrl("Olá, me interessei no plano Mensal. Pode me passar mais informações?")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 text-center rounded-xl font-bold bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20">
                  <MessageCircle className="h-5 w-5" />
                  Assinar Mensal
                </a>
              </div>
            </FadeIn>

            {/* Pro (Highlighted) */}
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-b from-orange-500/10 to-zinc-950 rounded-3xl p-8 border-2 border-orange-500 relative transform md:-translate-y-4 shadow-[0_0_30px_-5px_rgba(249,115,22,0.15)] flex flex-col h-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-zinc-950 font-black text-xs uppercase px-4 py-1.5 rounded-full tracking-wider">
                  Mais Escolhido
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">Trimestral</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black">R$ 119</span><span className="text-zinc-400">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-500 shrink-0" /> <span className="text-zinc-200">Tudo do plano mensal</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-500 shrink-0" /> <span className="text-zinc-200 font-bold">Análise de vídeos da execução</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-500 shrink-0" /> <span className="text-zinc-200">Ajustes quinzenais de rotina</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-500 shrink-0" /> <span className="text-zinc-200">Planilha de evolução de cargas</span></li>
                </ul>
                <a href={getWaUrl("Olá, me interessei no plano Trimestral. Pode me passar mais informações?")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 text-center rounded-xl font-black bg-[#25D366] text-white hover:bg-[#1ebd50] transition-all shadow-lg hover:shadow-[0_0_20px_-5px_rgba(37,211,102,0.5)] hover:-translate-y-1">
                  <MessageCircle className="h-5 w-5" />
                  Assinar Trimestral
                </a>
              </div>
            </FadeIn>

            {/* Elite */}
            <FadeIn delay={0.3}>
              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 text-zinc-300">Semestral</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">R$ 99</span><span className="text-zinc-500">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-zinc-600 shrink-0" /> <span className="text-zinc-300">Tudo do plano trimestral</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-zinc-600 shrink-0" /> <span className="text-zinc-300">Chamada de vídeo inicial (30min)</span></li>
                  <li className="flex items-start gap-3"><Check className="h-5 w-5 text-zinc-600 shrink-0" /> <span className="text-zinc-300">Suporte prioritário final de semana</span></li>
                </ul>
                <a href={getWaUrl("Olá, me interessei no plano Semestral. Pode me passar mais informações?")} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 text-center rounded-xl font-bold bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20">
                  <MessageCircle className="h-5 w-5" />
                  Assinar Semestral
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-multiply"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-zinc-950 tracking-tight mb-6">Pronto para dar o primeiro passo?</h2>
          <p className="text-zinc-900 text-xl mb-10 font-medium max-w-2xl mx-auto">As vagas para a consultoria são limitadas para garantir a máxima qualidade e personalização do seu acompanhamento.</p>
          <a href={getWaUrl("Olá! Estou pronto para dar o primeiro passo e garantir minha vaga na consultoria.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd50] text-white font-black text-xl px-10 py-5 rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(37,211,102,0.6)] hover:-translate-y-1 group">
            <MessageCircle className="h-7 w-7" />
            QUERO GARANTIR MINHA VAGA
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase">
            <Dumbbell className="text-zinc-700 h-6 w-6" />
            <span className="text-zinc-300">PRO<span className="text-zinc-700">TRAINER</span></span>
          </div>
          <div className="text-zinc-500 text-sm text-center">
            &copy; {new Date().getFullYear()} ProTrainer Consultoria.<br className="md:hidden" /> Direitos deste protótipo reservados para Nicolas Novacovski e Thiago Ribeiro.
          </div>
          <div className="flex gap-4 text-zinc-600">
            <a href="#" className="hover:text-orange-500 transition-colors"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Youtube className="h-6 w-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

