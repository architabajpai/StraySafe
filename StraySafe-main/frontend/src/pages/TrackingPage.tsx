import React, { useState } from 'react';
import { Search, Filter, Clock, MapPin, User, Camera, MessageCircle, Heart, CheckCircle, AlertTriangle } from 'lucide-react';
import { useReports, type StrayReport } from '../contexts/ReportsContext';
import { useLocation } from 'react-router-dom';

export const TrackingPage: React.FC = () => {
  const { reports } = useReports();
  const location = useLocation();
  const [selectedReport, setSelectedReport] = useState<StrayReport | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Show success message if redirected from report submission
  const successMessage = location.state?.message;

  const filteredReports = reports.filter(report => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      report.title.toLowerCase().includes(searchLower) ||
      report.description.toLowerCase().includes(searchLower) ||
      report.reportedBy?.name?.toLowerCase().includes(searchLower);
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'reported':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'in-progress':
        return <AlertTriangle className="h-5 w-5 text-blue-500" />;
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reported': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in_progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'rescued': return 'bg-green-100 text-green-800 border-green-200';
      case 'adopted': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      critical: 'bg-red-100 text-red-800'
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[urgency as keyof typeof colors]}`}>
        {urgency} priority
      </span>
    );
  };

  const formatDate = (date: string | Date) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(d);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <p className="ml-3 text-sm text-green-700">{successMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Track Cases</h1>
              <p className="text-gray-600 mt-1">Follow rescue progress and success stories</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                  <span>Reported: {reports.filter(r => r.status === 'reported').length}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <span>Active: {reports.filter(r => r.status === 'in_progress').length}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                  <span>Rescued: {reports.filter(r => r.status === 'rescued').length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Filters & Case List */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search & Filters */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Cases</h3>

              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by title, description, or reporter..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Cases</option>
                    <option value="reported">Reported</option>
                    <option value="in_progress">In Progress</option>
                    <option value="rescued">Rescued</option>
                    <option value="adopted">Adopted</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Case List */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Cases ({filteredReports.length})
                </h3>
              </div>

              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    onClick={() => setSelectedReport(report)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                      selectedReport?.id === report.id ? 'bg-primary-50 border-r-4 border-primary-500' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 line-clamp-1">{report.title}</h4>
                      {getStatusIcon(report.status)}
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(report.status)}`}>
                        {report.status.replace('_', ' ')}
                      </span>
                      {getUrgencyBadge(report.urgency)}
                    </div>

                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{report.location.address?.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{report.reportedBy?.name || "Unknown"}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredReports.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No cases found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Case Details */}
          <div className="lg:col-span-2">
            {selectedReport ? (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedReport.title}</h2>
                      <div className="flex items-center space-x-4 text-primary-100">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{selectedReport.location.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Reported {formatDate(selectedReport.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end mb-2">
                        {getStatusIcon(selectedReport.status)}
                        <span className="ml-2 font-medium">
                          {selectedReport.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      {getUrgencyBadge(selectedReport.urgency)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Basic Info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Details</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedReport.description}</p>

                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Reported by:</span>
                        <p className="text-gray-600">{selectedReport.reportedBy?.name || "Unknown"}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Last Updated:</span>
                        <p className="text-gray-600">{formatDate(selectedReport.updatedAt)}</p>
                      </div>
                    </div>

                    {selectedReport.assignedNGO && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                          <span className="font-medium text-blue-900">Assigned to: {selectedReport.assignedNGO}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Photos */}
                  {selectedReport.photos.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Camera className="h-5 w-5 mr-2" />
                        Photos ({selectedReport.photos.length})
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedReport.photos.map((photo, index) => (
                          <div key={index} className="aspect-square overflow-hidden rounded-lg">
                            <img
                              src={photo}
                              alt={`${selectedReport.title} ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {selectedReport.tags.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedReport.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tag.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Updates Timeline */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Updates Timeline ({selectedReport.updates.length})
                    </h3>

                    {selectedReport.updates.length > 0 ? (
                      <div className="space-y-4">
                        {selectedReport.updates.map((update) => (
                          <div key={update.id} className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                <MessageCircle className="h-4 w-4 text-primary-600" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium text-gray-900">{update.author}</span>
                                  <span className="text-sm text-gray-500">
                                    {formatDate(update.timestamp)}
                                  </span>
                                </div>
                                <p className="text-gray-700">{update.message}</p>

                                {update.photos && update.photos.length > 0 && (
                                  <div className="mt-3 flex space-x-2">
                                    {update.photos.map((photo, index) => (
                                      <img
                                        key={index}
                                        src={photo}
                                        alt={`Update ${index + 1}`}
                                        className="w-16 h-16 object-cover rounded-lg"
                                      />
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>No updates yet. Check back later for progress updates.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Select a case to view details</h3>
                <p className="text-gray-600">Choose a case from the list to see detailed information and updates.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
