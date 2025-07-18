import React from 'react';
import { Heart, Users, Target, Award, Globe, Shield, Lightbulb, ArrowRight } from 'lucide-react';



export const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Archita Bajpai',
      role: 'Student',
      image: '/src/assets/archita.jpeg',
      bio: 'A passionate animal lover and tech enthusiast, committed to using code for compassion and creating safer spaces for strays.'
    },
    {
      name: 'Shruti Jain',
      role: 'Stuent',
      image: '/src/assets/shruti.jpeg',
      bio: 'Deeply driven by empathy for animals, combining a love for tech and tails to make real-world impact.'
    },
    {
      name: 'Mansi Kapse',
      role: 'Student',
      image: '/src/assets/mansi.jpeg',
      bio: 'Believes every life matters—coding for a cause to give stray animals the safety and care they deserve.'
    },
    {
      name: 'Vaishnavi Parashar',
      role: 'Student',
      image: '/src/assets/vaishnavi.jpeg',
      bio: 'A dedicated animal advocate, building digital solutions to bring rescue and relief to voiceless companions.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'Every decision we make prioritizes the wellbeing and dignity of animals in need.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We believe in the power of collective action and community collaboration.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Open communication and accountability in all our rescue operations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging technology to create more efficient and effective rescue solutions.'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Animals Rescued' },
    { number: '50+', label: 'NGO Partners' },
    { number: '25,000+', label: 'Community Members' },
    { number: '95%', label: 'Success Rate' }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'StraySafe Founded',
      description: 'Started as a small project to coordinate stray animal rescues in VIT Bhopal.'
    },
    {
      year: '2025',
      title: 'First Case Reported',
      description: 'Reached our first major milestone by reporting a Case.'
    },
    {
      year: '2025',
      title: 'Turning Followers into Family',
      description: 'Expanding our Instagram community to bring hope to stray souls.'
    },
    {
      year: '2026',
      title: 'NGOs Expansion',
      description: 'Will Connect with NGOs to help the strays on a large scale.'
    },
    {
      year: '2027',
      title: 'AI-Powered Features',
      description: 'Introduced smart matching and predictive analytics for faster rescues.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary-500 rounded-full">
                <Heart className="h-12 w-12 text-white" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About StraySafe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize animal welfare through technology, community, and compassion. 
              Every stray animal deserves a chance at safety, care, and love.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To create a world where no stray animal suffers alone. We connect communities, 
                NGOs, and volunteers through technology to ensure every report leads to rescue, 
                and every rescue leads to a loving home.
              </p>
              
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-secondary-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A future where technology and compassion work hand in hand to eliminate animal 
                homelessness, creating safer communities for both animals and humans through 
                coordinated, efficient rescue operations.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Veterinarian caring for rescued animal"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-primary-100 rounded-lg p-4 w-fit mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Growth Plan: Numbers That Drive Us</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Every number speaks to the lives we will touch and the communities we aim to uplift.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small idea to a global movement - here's how we've grown together.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals dedicated to making a difference in animal welfare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you're an individual who wants to help or an organization looking to partner with us, 
            there's a place for you in the StraySafe community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Users className="h-6 w-6 mr-3" />
              Get Involved
              <ArrowRight className="h-5 w-5 ml-3" />
            </a>
            <a
              href="/ngo"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              <Award className="h-6 w-6 mr-3" />
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};