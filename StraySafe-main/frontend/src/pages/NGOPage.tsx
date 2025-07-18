import React, { useState } from 'react';
import { Users, Shield, Bell, BarChart3, MapPin, Clock, CheckCircle, Star, ArrowRight, Heart } from 'lucide-react';

export const NGOPage: React.FC = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    description: '',
    servicesOffered: [] as string[],
    operatingHours: '',
    capacity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: Bell,
      title: 'Real-time Alerts',
      description: 'Receive instant notifications when animals are reported in your service area.'
    },
    {
      icon: MapPin,
      title: 'Geographic Targeting',
      description: 'Get cases based on your location and service radius for efficient response.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your rescue statistics, response times, and success rates.'
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with other NGOs, volunteers, and animal welfare organizations.'
    },
    {
      icon: Shield,
      title: 'Verified Status',
      description: 'Build trust with our verification badge and transparent rating system.'
    },
    {
      icon: Clock,
      title: 'Case Management',
      description: 'Streamlined tools to manage cases from report to successful rescue.'
    }
  ];

  const services = [
    'Emergency Rescue',
    'Medical Treatment',
    'Temporary Shelter',
    'Adoption Services',
    'Spay/Neuter Programs',
    'Rehabilitation',
    'Transport Services',
    'Foster Care Network'
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Martinez',
      organization: 'NYC Animal Rescue',
      content: 'StraySafe has transformed how we operate. We\'ve increased our rescue rate by 300% since joining the platform.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      organization: 'Paws & Hearts Foundation',
      content: 'The real-time alerts and case management tools have made our team incredibly more efficient.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      organization: 'Safe Haven Animal Sanctuary',
      content: 'Being part of the StraySafe network has connected us with amazing volunteers and other organizations.',
      rating: 5
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesOffered: prev.servicesOffered.includes(service)
        ? prev.servicesOffered.filter(s => s !== service)
        : [...prev.servicesOffered, service]
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary-500 rounded-full">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Partner with StraySafe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our network of verified NGOs and rescue organizations. Get real-time alerts, 
              manage cases efficiently, and save more lives together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#application"
                className="inline-flex items-center bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Heart className="h-6 w-6 mr-3" />
                Join Our Network
                <ArrowRight className="h-5 w-5 ml-3" />
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Partner NGOs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15,000+</div>
              <div className="text-gray-600">Animals Rescued</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2.5hrs</div>
              <div className="text-gray-600">Avg Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with StraySafe?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything you need to streamline operations and maximize your impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-primary-100 rounded-lg p-4 w-fit mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start receiving and managing rescue cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apply & Get Verified</h3>
              <p className="text-gray-600">
                Submit your application with organization details. Our team verifies your credentials and approves qualified NGOs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Set Your Service Area</h3>
              <p className="text-gray-600">
                Define your geographic coverage and service capabilities. Receive alerts only for cases you can handle.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-warm-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-warm-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Saving Lives</h3>
              <p className="text-gray-600">
                Receive real-time alerts, manage cases through our dashboard, and track your rescue success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from NGOs already making a difference with StraySafe.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Network
            </h2>
            <p className="text-xl text-gray-600">
              Complete the application below to become a verified StraySafe partner.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in partnering with StraySafe. Our team will review your application 
                  and contact you within 3-5 business days.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Next Steps:</strong> You'll receive an email confirmation shortly. 
                    Our verification team will contact you to schedule a brief interview and facility review.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Organization Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                    Organization Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your organization's legal name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="https://yourorganization.org"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Describe your organization's mission, history, and animal welfare activities..."
                      required
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Street address, city, state, zip code"
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                    Primary Contact
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Primary contact person"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="contact@yourorganization.org"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                {/* Services Offered */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                    Services Offered
                  </h3>
                  
                  <p className="text-gray-600 mb-4">Select all services your organization provides:</p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.servicesOffered.includes(service)}
                          onChange={() => toggleService(service)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Operational Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                    Operational Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="operatingHours" className="block text-sm font-medium text-gray-700 mb-2">
                        Operating Hours
                      </label>
                      <input
                        type="text"
                        id="operatingHours"
                        name="operatingHours"
                        value={formData.operatingHours}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., Mon-Fri 9AM-6PM, 24/7 emergency"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Rescue Capacity
                      </label>
                      <select
                        id="capacity"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select capacity</option>
                        <option value="1-10">1-10 animals</option>
                        <option value="11-25">11-25 animals</option>
                        <option value="26-50">26-50 animals</option>
                        <option value="51-100">51-100 animals</option>
                        <option value="100+">100+ animals</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Users className="h-6 w-6 mr-3" />
                        Submit Application
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center mt-3">
                    By submitting, you agree to our partner terms and verification process.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};