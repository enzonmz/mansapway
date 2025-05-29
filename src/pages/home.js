import { motion } from 'framer-motion';
import ChatBot from '../components/ChatBot';

// Данные для секций
const features = [
  { title: "Профориентация с умом", description: "Мы анализируем ваши интересы, навыки и тренды рынка, чтобы рекомендовать лучшие профессии.", image: "/images/card1.jpg" },
  { title: "Анализ рынка труда", description: "Узнай, какие специальности востребованы в Казахстане прямо сейчас.", image: "/images/card2.jpg" },
  { title: "Персональные рекомендации", description: "На основе введённых данных система подберёт направления, в которых ты можешь реализоваться.", image: "/images/card3.jpg" },
];

const stats = [
  { value: "120+", text: "Рекомендованных профессий" },
  { value: "4 500+", text: "Пройдено анкет" },
  { value: "87%", text: "Точность рекомендаций" },
  { value: "1 500+", text: "Успешно трудоустроено" },
];

const futureProfessions = [
  { title: 'UX/UI-дизайнер', desc: 'Создаёт удобные и красивые интерфейсы для пользователей.', img: '/images/profession-ux.jpg' },
  { title: 'Data Analyst', desc: 'Анализирует данные и выстраивает отчёты для принятия решений.', img: '/images/profession-data.jpg' },
  { title: 'Техник по IT-безопасности', desc: 'Обеспечивает защиту систем от киберугроз.', img: '/images/profession-security.jpg' },
  { title: 'Специалист по умным устройствам', desc: 'Разрабатывает и настраивает IoT-решения.', img: '/images/profession-iot.png' },
];

// Компонент карточки
const Card = ({ title, description, image, alt }) => (
  <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={alt} className="w-full h-60 object-cover" loading="lazy" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HomePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="relative min-h-screen">
         <ChatBot />
      {/* Геройская секция */}
      <motion.div
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/back.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="p-6 sm:p-8 rounded-lg text-center max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl sm:text-5xl font-bold mb-2" variants={fadeInUp}>
            Найди своё направление с
          </motion.h1>
          <motion.h1 className="text-4xl sm:text-5xl font-bold mb-4" variants={fadeInUp}>
            <b className="text-yellow-300">MansapWay</b>
          </motion.h1>
          <motion.p className="text-lg sm:text-xl max-w-xl mx-auto" variants={fadeInUp}>
            Мы помогаем студентам колледжей определить подходящую профессию на основе их навыков, интересов и трендов рынка труда Казахстана.
          </motion.p>
 
        </motion.div>
      </motion.div>

      {/* Секция "Почему это важно" */}
      <motion.div
        className="text-center px-4 md:px-20 lg:px-60 mt-10 sm:mt-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Почему это важно</h1>
        <p className="text-lg leading-8 text-gray-700">
          Более 60% студентов выбирают профессию случайно <br />
          70% молодых специалистов меняют профессию в первые 3 года <br />
          MansapWay помогает принять осознанное решение.
        </p>
      </motion.div>

      {/* Секция "Наши возможности" */}
      <motion.section
        className="py-8 sm:py-16 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 sm:mb-12">Наши возможности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {features.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                alt={`card-${index}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Секция "Как работает сервис" */}
      <motion.div
        className="py-8 sm:py-16 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div className="md:w-1/2 text-center md:text-left" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">🚀 Как работает сервис</h2>
            <p className="text-lg mb-2 sm:mb-3">
              <strong>📝 Заполни анкету</strong><br />
              Укажи свои интересы, навыки, любимые предметы и предпочтения. Мы не требуем тестов — просто честные ответы.
            </p>
            <p className="text-lg mb-2 sm:mb-3">
              <strong>🤖 Алгоритм анализирует</strong><br />
              Наш искусственный интеллект сопоставляет твои данные с актуальными трендами рынка труда Казахстана и анализирует, в чём ты силён.
            </p>
            <p className="text-lg mb-2 sm:mb-3">
              <strong>🎯 Получи рекомендации</strong><br />
              Мы предложим тебе наиболее подходящие профессии и шаги, которые помогут уверенно двигаться вперёд.
            </p>
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <img
              src="/images/laptop.jpg"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
              alt="Laptop"
              loading="lazy"
              style={{ minHeight: '200px', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Секция "Ключевые цифры" */}
      <motion.section
        className="py-8 sm:py-16 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 sm:mb-12">Ключевые цифры</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow">
                <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="mt-1 sm:mt-2 text-gray-700">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Секция "Профессии будущего" */}
      <motion.section
        className="py-8 sm:py-16 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 sm:mb-12">Профессии будущего</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {futureProfessions.map((prof, index) => (
              <Card
                key={index}
                title={prof.title}
                description={prof.desc}
                image={prof.img}
                alt={prof.title}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;