import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; 
import ReCAPTCHA from 'react-google-recaptcha';
import { personalInfo } from '../../shared/data';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  readonly mode?: 'section' | 'modal';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ mode = 'section' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Проверяем reCAPTCHA
      const recaptchaValue = recaptchaRef.current?.getValue();
      if (!recaptchaValue) {
        throw new Error('Пожалуйста, подтвердите, что вы не робот');
      }

      // Отправляем email через EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        'g-recaptcha-response': recaptchaValue
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      recaptchaRef.current?.reset();
      
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Email',
      url: `mailto:${personalInfo.contact.email}`,
      icon: '📧',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'Telegram',
      url: `https://t.me/${personalInfo.contact.telegram.replace('@', '')}`,
      icon: '📱',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'VK',
      url: personalInfo.contact.vk,
      icon: '🌐',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/${personalInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: '💬',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  if (mode === 'modal') {
    return (
      <div className="card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Отправить сообщение</h3>
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✅ Сообщение успешно отправлено! Спасибо за обращение.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            ❌ Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь другим способом.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="Введите ваше имя"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
              placeholder="Расскажите о вашем проекте..."
            />
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY!}
              theme="light"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Отправка...
              </span>
            ) : (
              'Отправить сообщение'
            )}
          </button>
        </form>
      </div>
    );
  }
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Свяжитесь со мной</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готов обсудить ваш проект или ответить на вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Отправить сообщение</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✅ Сообщение успешно отправлено! Спасибо за обращение.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ❌ Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь другим способом.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              
              {/* Добавляем reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY!}
                  theme="light"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Отправка...
                  </span>
                ) : (
                  'Отправить сообщение'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Другие способы связи</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Местоположение</h4>
                  <p className="text-gray-600">Набережные Челны, Республика Татарстан, Россия</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Время ответа</h4>
                  <p className="text-gray-600">Обычно отвечаю в течение 24 часов</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Работа</h4>
                  <p className="text-gray-600">Открыт для новых проектов</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Социальные сети</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-4 rounded-lg text-white transition-colors ${social.color}`}
                  >
                    <span className="text-2xl mr-2">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 