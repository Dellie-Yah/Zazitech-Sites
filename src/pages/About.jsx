// src/pages/About.jsx
export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center bg-[url('/assets/images/about-preview.jpg')]">
        <div className="absolute h-full inset-0 bg-black/80" />
          <div className="relative z-40 text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
            <p className="text-l md:text-xl mx-12 w-1/2 mx-auto">
              Zazi Tech Solutions aims to bridge the digital divide, support local organisations, schools, businesses, and foster economic growth by providing high-quality, affordable digital solutions for individuals and companies alike.
            </p>
          </div>
      </section>
\
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses and individuals with innovative technology
                solutions that drive growth, efficiency, and success. We're
                committed to bridging the digital divide and making technology
                accessible to all.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading technology solutions provider in South Africa,
                recognized for our excellence, innovation, and commitment to
                customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ValueCard
              title="Innovation"
              description="We constantly seek new ways to improve and innovate in everything we do"
            />
            <ValueCard
              title="Excellence"
              description="We strive for excellence in all our services and customer interactions"
            />
            <ValueCard
              title="Integrity"
              description="We conduct our business with the highest level of integrity and transparency"
            />
            <ValueCard
              title="Collaboration"
              description="Working together to share ideas and skills to achieve a common goal."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our People</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Vusumzi Mqoboli"
              position="CEO & Founder"
              image="/assets/images/team/placeholder.jpg"
            />
            <TeamMember
              name="Dumisani Thobela"
              position="Operational Manager"
              image="/assets/images/team/placeholder.jpg"
              />
            <TeamMember
              name="Delron Claassen"
              position="Technical Director"
              image="/assets/images/team/placeholder.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ name, position, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
}
