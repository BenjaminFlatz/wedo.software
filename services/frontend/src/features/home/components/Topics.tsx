import TopicCard from './TopicCard';

const topics = [
  {
    title: 'IT-Consulting Grundlagen',
    description: 'Lernen Sie die Prinzipien professioneller IT-Beratung und wie Sie digitale Strategien entwickeln.',
    icon: '🛠️',
  },
  {
    title: 'KI & Machine Learning',
    description: 'Verstehen Sie KI-Konzepte und lernen Sie, eigene Machine Learning Modelle zu trainieren.',
    icon: '🤖',
  },
  {
    title: 'Web Scraping Techniken',
    description: 'Meistern Sie die Kunst der automatisierten Datenextraktion aus Webseiten mit Python.',
    icon: '🌐',
  },
  {
    title: 'Python-Programmierung',
    description: 'Von den Basics bis zu fortgeschrittenen Themen – lernen Sie Python Schritt für Schritt.',
    icon: '🐍',
  },
];

export default function Topics() {
  return (
    <section id="topics" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in">
          Unsere Lernthemen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
