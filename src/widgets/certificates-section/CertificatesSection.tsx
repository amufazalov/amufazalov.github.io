import React from 'react';
import { certificates } from '../../shared/data';

export const CertificatesSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-white" id="certificates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Сертификации</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные сертификаты, подтверждающие экспертность в современных технологиях
          </p>
        </div>

        <div className="space-y-8">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="bg-white shadow-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Левая часть - Изображение сертификата */}
                <div className="bg-gray-50 p-4 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <img
                      src={certificate.certificateImage}
                      alt={`Сертификат ${certificate.title}`}
                      className="w-full h-auto object-contain shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center shadow-lg">
                            <div class="text-center">
                              <div class="text-6xl mb-4">🏆</div>
                              <div class="text-gray-700 font-medium">${certificate.title}</div>
                              <div class="text-gray-500 text-sm mt-2">${certificate.issuer}</div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Правая часть - Информация о сертификате */}
                <div className="p-8">
                  {/* Header with issuer logo */}
                  <div className="flex flex-wrap items-center mb-6">
                    <img
                      src={certificate.issuerLogo}
                      alt={certificate.issuer}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {certificate.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {certificate.description}
                  </p>

                  {/* Certificate Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Дата получения</dt>
                      <dd className="text-sm text-gray-900">{formatDate(certificate.certifiedDate)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Действует до</dt>
                      <dd className="text-sm text-gray-900">
                        {certificate.expiryDate ? formatDate(certificate.expiryDate) : 'Бессрочно'}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Код верификации</dt>
                      <dd className="text-sm text-gray-900 font-mono">{certificate.verificationCode}</dd>
                    </div>
                    {certificate.credentialId && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">ID сертификата</dt>
                        <dd className="text-sm text-gray-900 font-mono">{certificate.credentialId}</dd>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {certificate.verificationUrl && (
                      <a
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Проверить подлинность
                      </a>
                    )}
                    
                    <a
                      href={certificate.certificateImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Открыть в полном размере
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Все сертификаты проверены и актуальны. Верификация доступна по официальным ссылкам.
          </p>
        </div>
      </div>
    </section>
  );
}; 