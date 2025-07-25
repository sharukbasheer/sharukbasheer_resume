import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Building, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  RECIPIENT_EMAIL
} from '../common/emailConfig';

const Contact = () => {
  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Prepare the template parameters
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.firstName,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message
      };
      
      // Send the email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', response);
      
      // Reset the form
      setFormData({
        firstName: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Show success message
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error message
      setSubmitStatus({
        success: false,
        message: 'Failed to send your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter your name',
      icon: User,
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 to-purple-900/20'
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      placeholder: 'Company name',
      icon: Building,
      gradient: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 to-teal-900/20'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'example@mail.com',
      icon: Mail,
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 to-rose-900/20'
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: '+91-9876543210',
      icon: Phone,
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 to-red-900/20'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400/20 to-blue-400/20 dark:from-pink-300/10 dark:to-blue-300/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 animate-gradient-x mb-4">
            Let's Connect
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's start a conversation and create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inputFields.map((field, index) => {
                const Icon = field.icon;
                const isFocused = focusedField === field.name;
                const hasValue = formData[field.name as keyof typeof formData];

                return (
                  <div
                    key={field.name}
                    className="group relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Label */}
                    <label
                      htmlFor={field.name}
                      className={`block mb-3 text-lg font-semibold transition-all duration-300 ${
                        isFocused || hasValue
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${field.gradient}`
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {field.label}
                    </label>

                    {/* Input Container */}
                    <div className="relative">
                      {/* Animated border */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${field.gradient} opacity-0 ${isFocused ? 'opacity-100' : 'group-hover:opacity-50'} transition-opacity duration-500 p-0.5 animate-gradient-x`}>
                        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl"></div>
                      </div>

                      {/* Input field */}
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                          <Icon className={`w-5 h-5 transition-all duration-300 ${
                            isFocused || hasValue
                              ? `text-transparent bg-clip-text bg-gradient-to-r ${field.gradient}`
                              : 'text-gray-400 dark:text-gray-500'
                          }`} />
                        </div>
                        
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          required
                          className={`relative z-10 w-full pl-12 pr-4 py-4 text-gray-900 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:border-transparent focus:outline-none transition-all duration-500 placeholder-gray-400 dark:placeholder-gray-500 ${
                            isFocused ? 'shadow-2xl transform scale-105' : 'hover:shadow-lg hover:border-gray-300/70 dark:hover:border-gray-600/70'
                          }`}
                        />

                        {/* Background glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${field.bgGradient} opacity-0 ${isFocused ? 'opacity-100' : 'group-hover:opacity-50'} transition-opacity duration-500 rounded-2xl blur-xl`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Field */}
            <div className="group relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <label
                htmlFor="message"
                className={`block mb-3 text-lg font-semibold transition-all duration-300 ${
                  focusedField === 'message' || formData.message
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-600'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Your Message
              </label>

              <div className="relative">
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-600 opacity-0 ${focusedField === 'message' ? 'opacity-100' : 'group-hover:opacity-50'} transition-opacity duration-500 p-0.5 animate-gradient-x`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl"></div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-4 z-10">
                    <MessageSquare className={`w-5 h-5 transition-all duration-300 ${
                      focusedField === 'message' || formData.message
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-600'
                        : 'text-gray-400 dark:text-gray-500'
                    }`} />
                  </div>
                  
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Write your message here..."
                    required
                    rows={6}
                    className={`relative z-10 w-full pl-12 pr-4 py-4 text-gray-900 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:border-transparent focus:outline-none transition-all duration-500 placeholder-gray-400 dark:placeholder-gray-500 resize-none ${
                      focusedField === 'message' ? 'shadow-2xl transform scale-105' : 'hover:shadow-lg hover:border-gray-300/70 dark:hover:border-gray-600/70'
                    }`}
                  />

                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 opacity-0 ${focusedField === 'message' ? 'opacity-100' : 'group-hover:opacity-50'} transition-opacity duration-500 rounded-2xl blur-xl`}></div>
                </div>
              </div>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`animate-fade-in rounded-2xl p-4 flex items-center gap-3 ${
                submitStatus.success
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
              }`}>
                {submitStatus.success ? (
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
                )}
                <p>{submitStatus.message}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-500 overflow-hidden animate-gradient-x ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:shadow-2xl hover:scale-110 hover:-translate-y-1'
                }`}
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300'}`} />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-blue-500/50 dark:from-pink-400/50 dark:via-purple-400/50 dark:to-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
              </button>
            </div>
          </form>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-500/10 to-blue-500/10 dark:from-pink-400/10 dark:to-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 dark:from-purple-400/10 dark:to-cyan-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Contact;