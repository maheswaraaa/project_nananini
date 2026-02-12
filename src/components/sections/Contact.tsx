import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

const Contact = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const waLink = getWhatsAppUrl(t('wa.general'));

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0">

          {/* Left Column — Header */}
          <div
            className={`lg:border-r lg:border-[#5B7F63]/10 lg:pr-12 flex flex-col justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#A8BFA2] mb-4">
              {t('contact.eyebrow')}
            </p>
            <h2 className="font-heading text-[28px] md:text-[34px] font-semibold text-[#3D5A44] leading-[1.2] mb-5">
              {t('contact.heading')}
            </h2>
            <p className="font-body text-[14px] text-[#7A7A7A] font-light leading-relaxed mb-8">
              {t('contact.subtext')}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-body text-[13px] font-medium text-[#5B7F63] hover:text-[#3D5A44] transition-colors duration-300"
            >
              <span className="border-b border-[#5B7F63]/30 group-hover:border-[#3D5A44]/50 pb-0.5 transition-colors duration-300">
                {t('contact.cta')}
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Middle Column — Contact Info */}
          <div
            className={`lg:border-r lg:border-[#5B7F63]/10 lg:px-12 flex flex-col justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            {/* Address */}
            <div className="mb-6">
              <p className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-[#A8BFA2] mb-2">
                {lang === 'en' ? 'ADDRESS' : 'ALAMAT'}
              </p>
              <a
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] text-[#2C2C2C] leading-relaxed hover:text-[#5B7F63] transition-colors duration-300 block"
              >
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.district}<br />
                {SITE_CONFIG.address.city}
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#5B7F63]/10 mb-6" />

            {/* WhatsApp + Instagram side by side */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-[#A8BFA2] mb-2">
                  WhatsApp
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-body text-[13px] text-[#2C2C2C] hover:text-[#5B7F63] transition-colors duration-300"
                >
                  <span className="border-b border-[#5B7F63]/30 group-hover:border-[#5B7F63]/60 pb-0.5 transition-colors duration-300">
                    {t('contact.chatWithUs')}
                  </span>
                  <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </a>
              </div>
              <div>
                <p className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-[#A8BFA2] mb-2">
                  Instagram
                </p>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[13px] text-[#2C2C2C] hover:text-[#5B7F63] transition-colors duration-300"
                >
                  {SITE_CONFIG.instagram}
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#5B7F63]/10 mb-6" />

            {/* Appointment note */}
            <p className="font-body text-[12px] text-[#7A7A7A] italic leading-relaxed">
              {t('contact.appointment')}
            </p>
          </div>

          {/* Right Column — Map */}
          <div
            className={`lg:pl-12 flex items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-full h-full min-h-[240px] lg:min-h-[280px] rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8!2d110.3588!3d-7.8052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4b696e5c0!2sJl.%20Namburan%20Lor%2C%20Panembahan%2C%20Kec.%20Kraton%2C%20Kota%20Yogyakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '240px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nananini Wedding Location"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
