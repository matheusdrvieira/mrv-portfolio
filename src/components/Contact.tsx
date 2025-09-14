import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useMemo, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(() => {
    const nameOk = formData.name.trim().length > 0;
    const emailOk = emailRegex.test(formData.email.trim());
    const msgOk = formData.message.trim().length >= 10; // mínimo útil
    return nameOk && emailOk && msgOk;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (!isValid) {
      alert('Por favor, preencha todos os campos corretamente (mensagem com pelo menos 10 caracteres).');
      return;
    }

    setIsSubmitting(true);
    try {
      const body = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      await fetch("https://script.google.com/macros/s/AKfycbxygUI8tWRVFfPcw31DWbZiYCZcpRGHT55r-4fJQruzrppTRH_fOGpVOrsI5ecBq5v4gw/exec", {
        method: "POST",
        body: body
      });

      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-portfolio-black-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-portfolio-black-dark to-transparent"></div>
      <div className="absolute top-40 right-20 w-56 h-56 rounded-full bg-portfolio-yellow/5 filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-portfolio-yellow/5 filter blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Entre em <span className="highlight">Contato</span>
          </h2>
          <p className="section-subtitle">
            Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-syne font-bold mb-6">
              Informações de <span className="highlight">Contato</span>
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-black-dark flex items-center justify-center text-portfolio-yellow flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="opacity-70 break-words">matheusrochavieira.contato@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-black-dark flex items-center justify-center text-portfolio-yellow flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-semibold mb-1">Telefone</h4>
                  <p className="opacity-70">+55 (51) 9 9851-6699</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-black-dark flex items-center justify-center text-portfolio-yellow flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-semibold mb-1">Localização</h4>
                  <p className="opacity-70">Rio Grande do Sul, Brasil</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-portfolio-yellow/20 rounded-lg bg-portfolio-black-dark">
              <h4 className="text-lg font-semibold mb-3">Horário de disponibilidade</h4>
              <p className="opacity-70 mb-2">Segunda - Sexta: 9h às 18h</p>
              <p className="opacity-70">Fins de semana: Por agendamento</p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-portfolio-black-dark border border-portfolio-yellow/20">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Detalhes do seu projeto ou mensagem..."
                  required
                  minLength={10}
                />
                <p className="text-xs mt-1 opacity-60">
                  Mínimo de 10 caracteres.
                </p>
              </div>
              <button
                type="submit"
                className="w-full button-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={!isValid || isSubmitting}
                aria-disabled={!isValid || isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
