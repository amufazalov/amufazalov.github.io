import React, { useState } from 'react';
import { personalInfo } from '../../shared/data';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет отправка на сервер
    alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
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
              
              <button type="submit" className="w-full btn-primary">
                Отправить сообщение
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
                  <p className="text-gray-600">Москва, Россия</p>
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