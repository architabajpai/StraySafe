import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Users, Heart, ArrowRight, Star, CheckCircle, TrendingUp } from 'lucide-react';
import { useReports } from '../contexts/ReportsContext';

export const HomePage: React.FC = () => {
  const { reports } = useReports();
  
  const stats = [
    { label: 'Projected Rescues', value: '2', icon: Heart },
    { label: 'Active Cases', value: reports.length.toString(), icon: MapPin },
    { label: 'Community Members', value: '15', icon: Users },
    { label: 'Success Rate', value: '94%', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Camera,
      title: 'Report a Stray',
      description: 'Quickly report stray animals with GPS location and photos. Our smart system alerts nearby NGOs instantly.',
      link: '/report',
      color: 'bg-primary-500'
    },
    {
      icon: MapPin,
      title: 'Find Cases Nearby',
      description: 'Explore an interactive map showing all reported cases in your area. Join rescue efforts in your community.',
      link: '/map',
      color: 'bg-secondary-500'
    },
    {
      icon: Heart,
      title: 'Track Progress',
      description: 'Follow rescue stories from report to recovery. See real-time updates on cases you care about.',
      link: '/tracking',
      color: 'bg-warm-500'
    }
  ];

  const testimonials = [
    {
      name: 'Manoj Kapse',
      role: 'Business',
      content: 'StraySafe is a beautiful initiative.It is heartwarming to see young minds using technology to protect voiceless animals. Truly inspiring!',
      avatar: '/src/assets/avatar.jpeg'
    },
    {
      name: 'Preeti Bajpai',
      role: 'Teacher',
      content: 'Finally, a platform that makes it easy to report and rescue stray animals. Hats off to the team of compassionate techies behind this!',
      avatar: '/src/assets/avatar.jpeg'
    },
    {
      name: 'Dr.Saurabh Jain',
      role: 'Doctor',
      content: 'I’m amazed by the dedication of the team. Their love for animals reflects in every feature of the website. It’s more than a project—it’s a mission.',
      avatar: '/src/assets/avatar.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-12 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2322c55e%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Saving Lives,{' '}
                <span className="text-primary-600">One Report</span>{' '}
                at a Time
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our community-driven platform to help stray animals find safety, care, and loving homes. 
                Report cases, track rescues, and make a real difference in animal welfare.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/report"
                  className="inline-flex items-center justify-center bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Camera className="h-6 w-6 mr-3" />
                  Report a Stray
                  <ArrowRight className="h-5 w-5 ml-3" />
                </Link>
                
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <Icon className="h-6 w-6 mx-auto mb-2 text-primary-500" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src="/src/assets/dog.jpeg"
                  alt="Happy rescued dog"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Cards */}
                <div className="absolute top-6 right-6 bg-white rounded-lg p-4 shadow-lg animate-bounce-gentle">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Reports</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mt-1">{reports.length}</div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Recently Rescued</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">Brown Indie</div>
                  <div className="text-sm text-gray-600">Bhopal, Madhya Pradesh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How StraySafe Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes it simple for anyone to help stray animals through technology-enabled rescue coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <Link to={feature.link} className="block">
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                      <div className={`${feature.color} rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                      <div className="flex items-center text-primary-600 font-semibold">
                        Get Started
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Rescue Stories
              </h2>
              <p className="text-xl text-gray-600">
                See the latest cases and successful rescues from our community.
              </p>
            </div>
            <Link
              to="/tracking"
              className="hidden md:inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Cases
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reports.slice(0, 3).map((report) => (
              <div key={report.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={report.photos[0]}
                    alt={report.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === 'rescued' ? 'bg-green-100 text-green-800' :
                      report.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status.replace('_', ' ').charAt(0).toUpperCase() + report.status.slice(1)}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {report.location.address?.split(',')[0]}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{report.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Reported by {report.reportedBy}
                    </span>
                    <Link
                      to={`/tracking`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/tracking"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Cases
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories from Our Community
            </h2>
            <p className="text-xl text-gray-600">
              Hear from the people making a difference in animal welfare.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of compassionate people helping stray animals find safety and care. 
            Every report can save a life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/report"
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Camera className="h-6 w-6 mr-3" />
              Report Now
            </Link>
            <Link
              to="/ngo"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              <Users className="h-6 w-6 mr-3" />
              Join as NGO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};