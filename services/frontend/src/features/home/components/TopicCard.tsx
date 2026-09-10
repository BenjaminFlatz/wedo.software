interface TopicCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function TopicCard({ title, description, icon }: TopicCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up">
      <div className="text-blue-600 text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
