
'use client';

export default function TeamSection() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20CEO%20in%20business%20suit%20with%20confident%20smile%2C%20modern%20office%20background%2C%20executive%20portrait%20with%20warm%20lighting%20and%20professional%20appearance&width=300&height=300&seq=ceo-portrait&orientation=squarish',
      description: 'Leading PDF Convert Master with 15+ years of experience in tech innovation and digital transformation.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20CTO%20in%20casual%20business%20attire%2C%20technology%20expert%20with%20glasses%2C%20modern%20office%20setting%20with%20warm%20professional%20lighting&width=300&height=300&seq=cto-portrait&orientation=squarish',
      description: 'Architecting our cutting-edge conversion technology with expertise in cloud computing and AI systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20product%20manager%20with%20friendly%20smile%2C%20modern%20business%20casual%20attire%2C%20clean%20office%20background%20with%20natural%20lighting&width=300&height=300&seq=product-head&orientation=squarish',
      description: 'Ensuring our tools meet user needs through innovative design and user experience optimization.'
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20security%20expert%20in%20business%20attire%2C%20confident%20expression%2C%20modern%20office%20environment%20with%20professional%20lighting&width=300&height=300&seq=security-head&orientation=squarish',
      description: 'Protecting user data with advanced security protocols and industry-leading encryption standards.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-inter">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            The passionate professionals behind PDF Convert Master
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-inter">{member.name}</h3>
              <p className="text-red-600 font-semibold mb-3 font-inter">{member.role}</p>
              <p className="text-gray-600 text-sm font-inter">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
