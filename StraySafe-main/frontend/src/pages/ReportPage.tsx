import React, { useState, useRef } from 'react';
import { Camera, MapPin, Upload, AlertTriangle, Heart, CheckCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createReport } from '../utils/api';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    urgency: 'medium' as 'low' | 'medium' | 'high' | 'critical',
    tags: [] as string[],
    reportedBy: ''
  });

  const urgencyLevels = [
    { value: 'low', label: 'Low Priority', color: 'bg-green-100 text-green-800', description: 'Animal appears healthy, needs rehoming' },
    { value: 'medium', label: 'Medium Priority', color: 'bg-yellow-100 text-yellow-800', description: 'Needs attention but not urgent' },
    { value: 'high', label: 'High Priority', color: 'bg-orange-100 text-orange-800', description: 'Injured or in distress' },
    { value: 'critical', label: 'Critical', color: 'bg-red-100 text-red-800', description: 'Life-threatening condition' }
  ];

  const commonTags = [
    'injured', 'dehydrated', 'malnourished', 'lost-pet', 'needs-adoption',
    'friendly', 'aggressive', 'pregnant', 'with-babies', 'elderly',
    'dog', 'cat', 'puppy', 'kitten', 'disabled'
  ];

  const getCurrentLocation = () => {
    setLocationLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          setCurrentLocation({
            lat: latitude,
            lng: longitude,
            address
          });
          setLocationLoading(false);
        },
        (error) => {
          console.error('Location error:', error);
          setLocationLoading(false);
          alert('Unable to get your location. Please enable location services.');
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setLocationLoading(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setPhotos(prev => [...prev, e.target.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const toggleTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentLocation) {
      alert('Please add your location before submitting.');
      return;
    }

    if (photos.length === 0) {
      alert('Please add at least one photo.');
      return;
    }

    if (!formData.title.trim()) {
      alert('Please enter a title.');
      return;
    }

    if (!formData.reportedBy.trim()) {
      alert('Please enter your name.');
      return;
    }

    const token = localStorage.getItem('straysafe_token');

    if (!token) {
      alert('You must be logged in to submit a report.');
      return;
    }

    setIsSubmitting(true);

    try {
      await createReport(
        {
          ...formData,
          location: currentLocation,
          photos,
        },
        token
      );

      alert('Report submitted successfully! NGOs have been notified.');
      navigate('/tracking');
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-warm-50 to-earth-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary-500 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report a Stray Animal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us save a life by reporting stray animals in your area. Your report will immediately notify nearby NGOs and volunteers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6">
            <div className="flex items-center text-white">
              <AlertTriangle className="h-6 w-6 mr-3" />
              <span className="font-semibold">Emergency? Call our 24/7 hotline: +91-800-STRAY-HELP</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">

            {/* Title */}
            <div>
              <label htmlFor="title" className="block font-semibold mb-1">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Brief title for the report"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Reported By */}
            <div>
              <label htmlFor="reportedBy" className="block font-semibold mb-1">Your Name</label>
              <input
                id="reportedBy"
                name="reportedBy"
                type="text"
                value={formData.reportedBy}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block font-semibold mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Detailed description of the situation"
                required
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Urgency */}
            <div>
              <label className="block font-semibold mb-2">Urgency Level</label>
              <div className="flex gap-4">
                {urgencyLevels.map(level => (
                  <label key={level.value} className={`cursor-pointer flex items-center space-x-2 px-3 py-1 rounded-md ${formData.urgency === level.value ? level.color : 'bg-gray-100 text-gray-700'}`}>
                    <input
                      type="radio"
                      name="urgency"
                      value={level.value}
                      checked={formData.urgency === level.value}
                      onChange={() => setFormData(prev => ({ ...prev, urgency: level.value }))}
                      className="hidden"
                    />
                    <span>{level.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block font-semibold mb-1">Location</label>
              {currentLocation ? (
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>{currentLocation.address}</span>
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    disabled={locationLoading}
                    className="ml-auto text-sm text-primary-600 underline"
                  >
                    {locationLoading ? 'Locating...' : 'Update Location'}
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  disabled={locationLoading}
                  className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md"
                >
                  {locationLoading ? 'Locating...' : (
                    <>
                      <MapPin className="w-5 h-5 mr-2" />
                      Get Current Location
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Photos Upload */}
            <div>
              <label className="block font-semibold mb-1">Photos</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md"
              >
                <Camera className="w-5 h-5 mr-2" />
                Upload Photos
              </button>

              {photos.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {photos.map((photo, idx) => (
                    <div key={idx} className="relative group">
                      <img src={photo} alt={`Uploaded ${idx + 1}`} className="w-full h-32 object-cover rounded-md" />
                      <button
                        type="button"
                        onClick={() => removePhoto(idx)}
                        className="absolute top-1 right-1 bg-white bg-opacity-70 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Remove photo"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tags */}
            <div>
              <label className="block font-semibold mb-1">Tags</label>
              <div className="flex flex-wrap gap-2">
                {commonTags.map(tag => {
                  const selected = formData.tags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full border ${
                        selected ? 'bg-primary-600 text-white border-primary-600' : 'bg-gray-100 text-gray-700 border-gray-300'
                      } hover:bg-primary-500 hover:text-white transition`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-md transition"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Report'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
