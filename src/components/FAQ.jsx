import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaRocket, FaHeadset } from 'react-icons/fa';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo comenzar a usar TechPro?",
      answer: "Es muy sencillo. Simplemente regístrate con tu correo electrónico, elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de todas las funcionalidades inmediatamente. Ofrecemos 14 días de prueba gratuita sin necesidad de tarjeta de crédito.",
      icon: <FaRocket className="w-5 h-5" />
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, absolutamente. Puedes actualizar o degradar tu plan en cualquier momento desde tu panel de control. Los cambios se aplicarán inmediatamente y ajustaremos tu facturación de manera proporcional.",
      icon: <FaQuestionCircle className="w-5 h-5" />
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las principales tarjetas de crédito (Visa, Mastercard, American Express), PayPal y transferencias bancarias para planes empresariales. Todos los pagos son procesados de forma segura con encriptación SSL.",
      icon: <FaQuestionCircle className="w-5 h-5" />
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer: "Sí, todos nuestros planes incluyen soporte por email con respuesta en menos de 24 horas. Los planes Profesional y Empresarial tienen acceso a soporte 24/7 por chat en vivo y teléfono. El plan Empresarial también incluye un gerente de cuenta dedicado para asistencia personalizada.",
      icon: <FaHeadset className="w-5 h-5" />
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "La seguridad es nuestra máxima prioridad. Utilizamos encriptación de nivel empresarial AES-256, cumplimos con GDPR, SOC 2 y realizamos auditorías de seguridad periódicas. Tus datos están respaldados diariamente en múltiples ubicaciones geográficas y contamos con recuperación ante desastres.",
      icon: <FaQuestionCircle className="w-5 h-5" />
    },
    {
      question: "¿Puedo cancelar mi suscripción?",
      answer: "Por supuesto. Puedes cancelar tu suscripción en cualquier momento sin penalizaciones ni preguntas incómodas. Si cancelas, tendrás acceso completo hasta el final de tu período de facturación actual. No realizamos cargos automáticos después de la cancelación y puedes exportar todos tus datos.",
      icon: <FaQuestionCircle className="w-5 h-5" />
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaQuestionCircle className="w-4 h-4" />
            <span>Centro de Ayuda</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Preguntas
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas rápidas a las preguntas más comunes sobre TechPro
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl shadow-md hover:shadow-xl 
                  transition-all duration-300 overflow-hidden
                  border-2 
                  ${isActive 
                    ? 'border-blue-500 ring-4 ring-blue-100' 
                    : 'border-transparent hover:border-gray-200'
                  }
                `}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                  aria-expanded={isActive}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`
                      p-3 rounded-xl transition-all duration-300 shrink-0
                      ${isActive 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }
                    `}>
                      {faq.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`
                        text-lg font-bold transition-colors duration-300
                        ${isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}
                      `}>
                        {faq.question}
                      </h3>
                      {!isActive && (
                        <p className="text-sm text-gray-500 mt-1">
                          Haz clic para ver la respuesta
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className={`
                    shrink-0 ml-4 p-2 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-blue-100 text-blue-600 rotate-180' 
                      : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500'
                    }
                  `}>
                    {isActive ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <div
                  className={`
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isActive 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                    }
                  `}
                >
                  {isActive && (
                    <div className="px-6">
                      <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>
                    </div>
                  )}
                  
                  <div className="px-6 pb-6 pt-4">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-4 text-sm text-blue-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">¿Necesitas más información? Contacta a soporte</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¿Aún tienes preguntas?
            </h3>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contactar al Equipo de Soporte
          </button>
        </div>

      </div>
    </section>
  );
}

export default FAQ;