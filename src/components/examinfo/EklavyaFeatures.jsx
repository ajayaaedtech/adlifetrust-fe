'use client';

import { useState } from 'react';

const securityData = {
  english: {
    badge: "Enterprise-Grade Security",
    title: "How We Ensure 100% Cheat-Proof & Safe Exams",
    description: "Our multi-layered AI security infrastructure monitors, detects, and prevents exam malpractices in real-time, delivering uncompromised academic integrity.",
    features: [
      {
        title: "Intelligent Video Proctoring",
        subtitle: "Continuous Live Monitoring",
        desc: "Live visual tracking of the candidate during the Moodle online exam, ensuring no unauthorized assistance is present.",
        icon: "📹"
      },
      {
        title: "Automated Image Proctoring",
        subtitle: "Random Snapshot Verification",
        desc: "Captures periodic, time-stamped photos of the student during the test attempt to continuously verify user identity.",
        icon: "📸"
      },
      {
        title: "Advanced Cheating Detection",
        subtitle: "AI Facial Recognition",
        desc: "Identifies exam malpractices instantly using facial recognition algorithms, multi-face detection, and gaze tracking.",
        icon: "🛡️"
      },
      {
        title: "Smart Proctor Management",
        subtitle: "Human-in-the-Loop Oversight",
        desc: "Define custom proctor roles and assign trained invigilators for real-time live exam intervention and chat support.",
        icon: "👥"
      },
      {
        title: "Secure Browser & API Control",
        subtitle: "System-Level Lockdown",
        desc: "Prevents screen switching, tab navigation, or external API leaks with our tightly integrated data management layer.",
        icon: "🔒"
      },
      {
        title: "AI Descriptive Evaluation",
        subtitle: "Tamper-Proof Grading",
        desc: "Automates the evaluation of descriptive answers using AI with up to 98% accuracy, eliminating human bias or alteration.",
        icon: "🧠"
      }
    ]
  },
  hindi: {
    badge: "उच्च-स्तरीय सुरक्षा मानक",
    title: "हम 100% सुरक्षित और नकल-मुक्त परीक्षा कैसे सुनिश्चित करते हैं",
    description: "हमारा बहुस्तरीय एआई (AI) सुरक्षा ढांचा रीयल-टाइम में परीक्षा के दौरान होने वाले किसी भी अनुचित साधन को पहचानता है और रोकता है, जिससे परीक्षा की विश्वसनीयता बनी रहती है।",
    features: [
      {
        title: "इंटेलिजेंट वीडियो प्रॉक्टरिंग",
        subtitle: "लगातार लाइव निगरानी",
        desc: "ऑनलाइन परीक्षा के दौरान उम्मीदवार की लाइव विजुअल ट्रैकिंग की जाती है, जिससे यह सुनिश्चित होता है कि कोई बाहरी मदद न ली जा रही हो।",
        icon: "📹"
      },
      {
        title: "ऑटोमेटेड इमेज प्रॉक्टरिंग",
        subtitle: "रैंडम स्नैपशॉट वेरिफिकेशन",
        desc: "छात्र की पहचान की लगातार पुष्टि करने के लिए परीक्षा के दौरान समय-समय पर लाइव तस्वीरें ली जाती हैं।",
        icon: "📸"
      },
      {
        title: "एडवांस्ड चीटिंग डिटेक्शन",
        subtitle: "एआई फेशियल रिकग्निशन",
        desc: "चेहरे की पहचान, मल्टी-फेस डिटेक्शन (एक से अधिक चेहरे दिखना) और आँखों की मूवमेंट पर नजर रखकर तुरंत नकल की पहचान की जाती है।",
        icon: "🛡️"
      },
      {
        title: "स्मार्ट प्रॉक्टर मैनेजमेंट",
        subtitle: "मानवीय और डिजिटल निगरानी",
        desc: "लाइव परीक्षा में हस्तक्षेप और जरूरत पड़ने पर लाइव चैट सपोर्ट के लिए कस्टम निरीक्षक (Invigilators) नियुक्त किए जा सकते हैं।",
        icon: "👥"
      },
      {
        title: "सिक्योर ब्राउज़र और एपीआई控制",
        subtitle: "सिस्टम-लेवल लॉक डाउन",
        desc: "सुरक्षित ब्राउज़र के माध्यम से परीक्षा के दौरान स्क्रीन बदलने, दूसरे टैब खोलने या किसी भी बाहरी डेटा लीक को पूरी तरह ब्लॉक किया जाता है।",
        icon: "🔒"
      },
      {
        title: "एआई डिस्क्रिप्टिव मूल्यांकन",
        subtitle: "छेड़छाड़-मुक्त ग्रेडिंग",
        desc: "मानवीय पक्षपात या अंकों में किसी भी बदलाव को खत्म करने के लिए एआई (AI) के जरिए 98% तक की सटीकता के साथ उत्तरों का स्वचालित मूल्यांकन किया जाता है।",
        icon: "🧠"
      }
    ]
  },
  telugu: {
    badge: "ఎంటర్‌ప్రైజ్-గ్రేడ్ సెక్యూరిటీ",
    title: "మేము 100% నకలు-రహిత (Cheat-Proof) పరీక్షలను ఎలా నిర్వహిస్తాము",
    description: "మా బహుళ-అంచెల AI భద్రతా వ్యవస్థ నిజసమయంలో పరీక్ష అక్రమాలను పర్యవేక్షిస్తుంది మరియు నిరోధిస్తుంది, పరీక్ష యొక్క నమ్మకత్వాన్ని కాపాడుతుంది.",
    features: [
      {
        title: "ఇంటెలిజెంట్ వీడియో ప్రాక్టరింగ్",
        subtitle: "నిరంతర లైవ్ పర్యవేక్షణ",
        desc: "ఆన్‌లైన్ పరీక్ష సమయంలో అభ్యర్థిని ప్రత్యక్షంగా విజువల్ ట్రాకింగ్ చేయడం ద్వారా ఎలాంటి బాహ్య సహాయం లేకుండా చూస్తుంది.",
        icon: "📹"
      },
      {
        title: "ఆటోమేటెడ్ ఇమేజ్ ప్రాక్టరింగ్",
        subtitle: "రాండమ్ స్నాప్‌షాట్ వెరిఫికేషన్",
        desc: "యూజర్ గుర్తింపును నిరంతరం ధృవీకరించడానికి పరీక్ష సమయంలో విద్యార్థి యొక్క ఫోటోలను క్రమ వ్యవధిలో క్యాప్చర్ చేస్తుంది.",
        icon: "📸"
      },
      {
        title: "అడ్వాన్స్‌డ్ చీటింగ్ డిటెక్షన్",
        subtitle: "AI ఫేషియల్ రికగ్నిషన్",
        desc: "ఫేస్ రికగ్నిషన్ ఆల్గారిథమ్స్, మల్టీ-ఫేస్ డిటెక్షన్ మరియు కంటి కదలికల ద్వారా పరీక్ష అక్రమాలను తక్షణమే గుర్తిస్తుంది.",
        icon: "🛡️"
      },
      {
        title: "స్మార్ట్ ప్రాక్టర్ మేనేజ్‌మెంట్",
        subtitle: "హ్యూమన్-ఇన్-ది-లూప్ పర్యవేక్షణ",
        desc: "నిజసమయ పరీక్ష పర్యవేక్షణ మరియు లైవ్ చాట్ మద్దతు కోసం శిక్షణ పొందిన ఇన్విజిలేటర్లను కేటాయించండి.",
        icon: "👥"
      },
      {
        title: "సెక్యూర్ బ్రౌజర్ & API కంట్రోల్",
        subtitle: "సిస్టమ్-లెవల్ లాక్‌డౌన్",
        desc: "పరీక్ష సమయంలో స్క్రీన్ మారడం, ట్యాబ్ నావిగేషన్ లేదా బాహ్య API లీక్‌లను పూర్తిగా నిరోధిస్తుంది.",
        icon: "🔒"
      },
      {
        title: "AI డిస్క్రిప్టివ్ మూల్యాంకనం",
        subtitle: "ట్యాంపర్-ప్రూఫ్ గ్రేడింగ్",
        desc: "మానవ పక్షపాతాన్ని తోసిరాజని, AI సహాయంతో 98% ఖచ్చితత్వంతో సమాధానాలను ఆటోమేటిక్‌గా మూల్యాంకనం చేస్తుంది.",
        icon: "🧠"
      }
    ]
  },
  marathi: {
    badge: "उच्च-स्तरीय सुरक्षा मानके",
    title: "आम्ही १००% सुरक्षित आणि कॉपी-मुक्त परीक्षा कशी सुनिश्चित करतो",
    description: "आमची बहुस्तरीय एआय (AI) सुरक्षा प्रणाली रीअल-टाइममध्ये परीक्षेदरम्यान होणारे गैरप्रकार शोधून ते रोखते, ज्यामुळे परीक्षेची विश्वासार्हता टिकून राहते.",
    features: [
      {
        title: "इंटेलिजेंट व्हिडिओ प्रॉक्टरिंग",
        subtitle: "सतत लाईव्ह देखरेख",
        desc: "ऑनलाइन परीक्षेदरम्यान विद्यार्थ्याचे लाईव्ह विझ्युअल ट्रॅकिंग केले जाते, जेणेकरून कोणतीही बाह्य मदत घेतली जाणार नाही.",
        icon: "📹"
      },
      {
        title: "ऑटोमेटेड इमेज प्रॉक्टरिंग",
        subtitle: "रँडम स्नॅपशॉट पडताळणी",
        desc: "विद्यार्थ्याची ओळख सतत पडताळण्यासाठी परीक्षा सुरू असताना ठराविक वेळेनंतर त्याचे लाईव्ह फोटो कॅप्चर केले जातात.",
        icon: "📸"
      },
      {
        title: "अ‍ॅडव्हान्स्ड चीटिंग डिटेक्शन",
        subtitle: "एआय फेशियल रेकग्निशन",
        desc: "चेहरा ओळखणे, एकापेक्षा जास्त चेहरे शोधणे आणि डोळ्यांच्या हालचालींवर लक्ष ठेवून कॉपीचे प्रकार त्वरित ओळखले जातात.",
        icon: "🛡️"
      },
      {
        title: "स्मार्ट प्रॉक्टर व्यवस्थापन",
        subtitle: "मानवी आणि डिजिटल नियंत्रण",
        desc: "लाईव्ह परीक्षेदरम्यान पर्यवेक्षण आणि तातडीच्या मदतीसाठी (Live Chat) विशेष पर्यवेक्षक नियुक्त करण्याची सुविधा.",
        icon: "👥"
      },
      {
        title: "सिक्युवर ब्राउझर आणि एपीआय कंट्रोल",
        subtitle: "सिस्टम-लेव्हल लॉकडाऊन",
        desc: "परीक्षेदरम्यान स्क्रीन बदलणे, नवीन टॅब उघडणे किंवा डेटा लीक होणे सुरक्षित ब्राउझर तंत्रज्ञानाद्वारे पूर्णपणे रोखले जाते.",
        icon: "🔒"
      },
      {
        title: "एआय डिस्क्रिप्टिव्ह मूल्यांकन",
        subtitle: "पारदर्शक आणि सुरक्षित ग्रेडिंग",
        desc: "मानवी पूर्वग्रह किंवा गुणांमधील फेरफार टाळण्यासाठी एआय (AI) च्या मदतीने ९८% अचूकतेसह उत्तरांचे स्वयंचलित मूल्यांकन केले जाते.",
        icon: "🧠"
      }
    ]
  }
};

const LANG_LABELS = {
  english: "EN",
  hindi: "हिं",
  telugu: "తె",
  marathi: "मरा"
};

export default function EklavyaSecurityFeatures() {
  const [activeLang, setActiveLang] = useState('english');
  const currentData = securityData[activeLang];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6EF] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* animated gradient mesh */}
      <div className="ekl-mesh pointer-events-none absolute inset-0" />

      <style>{`
        .ekl-mesh {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(191,84,42,0.16), transparent 45%),
            radial-gradient(circle at 80% 15%, rgba(217,140,74,0.16), transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(191,84,42,0.10), transparent 50%);
          background-size: 160% 160%;
          background-position: 0% 0%;
          animation: eklMesh 18s ease-in-out infinite;
        }
        @keyframes eklMesh {
          0%   { background-position: 0% 0%; }
          50%  { background-position: 100% 60%; }
          100% { background-position: 0% 0%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ekl-mesh { animation: none; }
        }
      `}</style>


      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#BF542A]">
            <span className="h-[2px] w-6 rounded-full bg-[#BF542A]/60" />
            {currentData.badge}
            <span className="h-[2px] w-6 rounded-full bg-[#BF542A]/60" />
          </span>

          <h2 className="mb-5 text-balance font-serif text-[28px] font-bold leading-[1.2] tracking-tight text-[#20242B] sm:text-4xl lg:text-[42px]">
            {currentData.title}
          </h2>
          <p className="text-balance text-[15px] leading-relaxed text-[#5C6270] sm:text-lg">
            {currentData.description}
          </p>
        </div>

        {/* Language switcher */}
        <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:mb-16">
          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A9284]">
            <span className="h-px w-4 bg-[#D8CFC0]" />
            Select Language
            <span className="h-px w-4 bg-[#D8CFC0]" />
          </span>

          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 animate-bounce text-[#BF542A]/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4v14" />
            <path d="M6 12l6 6 6-6" />
          </svg>

          <div
            role="tablist"
            aria-label="Language"
            className="flex w-full max-w-md gap-1 rounded-2xl border border-[#E8E1D3] bg-white p-1 shadow-[0_6px_20px_rgba(45,35,20,0.06)] sm:w-auto"
          >
            {Object.keys(securityData).map((lang) => {
              const isActive = activeLang === lang;
              return (
                <button
                  key={lang}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveLang(lang)}
                  className={`relative flex-1 rounded-xl px-3 py-2.5 text-xs font-semibold capitalize transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BF542A] sm:flex-none sm:px-6 sm:text-sm ${
                    isActive
                      ? 'bg-[#BF542A] text-white shadow-[0_4px_14px_rgba(191,84,42,0.3)]'
                      : 'text-[#8A8375] hover:bg-[#FAF6EF] hover:text-[#4A4438]'
                  }`}
                >
                  <span className="sm:hidden">{LANG_LABELS[lang]}</span>
                  <span className="hidden sm:inline">{lang}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {currentData.features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[#EDE6D8] bg-white p-6 shadow-[0_2px_10px_rgba(45,35,20,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BF542A]/25 hover:shadow-[0_14px_32px_rgba(45,35,20,0.09)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF1E6] text-xl transition-colors duration-300 group-hover:bg-[#BF542A]/10">
                  {feature.icon}
                </div>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-[#C9C2B4]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <span className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#BF542A]">
                {feature.subtitle}
              </span>

              <h3 className="mb-2 text-[17px] font-bold leading-snug text-[#20242B] transition-colors duration-200 group-hover:text-[#A6431F]">
                {feature.title}
              </h3>

              <p className="text-[13.5px] leading-relaxed text-[#6B6558]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}