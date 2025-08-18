interface VolunteerCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export default function VolunteerCard({ name, role, description, imageUrl }: VolunteerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src={imageUrl}
        alt={`${name} volunteering`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{name}</h4>
        <p className="text-ngo-orange font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
