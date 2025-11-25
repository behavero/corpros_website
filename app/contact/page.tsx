'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Select from '@/components/Select';
import FAQAccordion from '@/components/FAQAccordion';

type ProfileType = 'Start' | 'Croissance' | 'Performance' | '';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    companySize: '',
    profile: '' as ProfileType,
    message: '',
    conditionalField: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const companySizeOptions = [
    { value: '1-5', label: '1-5 employés' },
    { value: '6-20', label: '6-20 employés' },
    { value: '21-50', label: '21-50 employés' },
    { value: '51+', label: '51+ employés' },
  ];

  const profileOptions = [
    { value: 'Start', label: 'Start' },
    { value: 'Croissance', label: 'Croissance' },
    { value: 'Performance', label: 'Performance' },
  ];

  const getConditionalFieldLabel = () => {
    switch (formData.profile) {
      case 'Start':
        return 'Quel est votre principal défi actuel ?';
      case 'Croissance':
        return 'Quel levier souhaitez-vous prioriser ? (Clients / Marges / Orga / RH)';
      case 'Performance':
        return 'Souhaitez-vous un audit complet ou ciblé ?';
      default:
        return '';
    }
  };

  // Real-time validation helper
  const isFieldValid = (field: string): boolean => {
    const value = formData[field as keyof typeof formData];
    
    switch (field) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value));
      case 'firstName':
      case 'lastName':
      case 'company':
      case 'city':
      case 'message':
        return String(value).trim().length > 0;
      case 'companySize':
      case 'profile':
        return Boolean(value);
      case 'conditionalField':
        return formData.profile ? String(value).trim().length > 0 : true;
      default:
        return true;
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'profile' && value !== prev.profile) {
        updated.conditionalField = '';
      }
      return updated;
    });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.company.trim()) newErrors.company = 'Le nom de l\'entreprise est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.city.trim()) newErrors.city = 'La ville est requise';
    if (!formData.companySize) newErrors.companySize = 'La taille de l\'entreprise est requise';
    if (!formData.profile) newErrors.profile = 'Le profil est requis';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    if (formData.profile && !formData.conditionalField.trim()) {
      newErrors.conditionalField = 'Ce champ est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        companySize: '',
        profile: '',
        message: '',
        conditionalField: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-40 pb-40">
      <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-massive mb-24"
          >
            contact.
          </motion.h1>

          {/* FAQ Section */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-display mb-12 text-center">Questions fréquentes</h2>
            <FAQAccordion />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-display mb-12">Informations</h2>
              <div className="space-y-8 text-body">
                <div>
                  <div className="text-label mb-3">Email</div>
                  <a href="mailto:contact@corpros.fr" className="text-lg hover:text-[#999999] transition-colors">
                    contact@corpros.fr
                  </a>
                </div>
                <div>
                  <div className="text-label mb-3">Téléphone</div>
                  <a href="tel:+33123456789" className="text-lg hover:text-[#999999] transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
                <div>
                  <div className="text-label mb-3">Adresse</div>
                  <p className="text-lg">Paris, France</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isSuccess ? (
                <div className="p-12 border border-white/30 bg-white/5">
                  <h3 className="text-2xl font-display mb-6">
                    Merci pour votre demande !
                  </h3>
                  <p className="text-body text-lg leading-relaxed">
                    Votre demande a bien été transmise. Nous reviendrons vers vous sous 48h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <Input
                      label="Prénom"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      required
                      error={errors.firstName}
                      isValid={isFieldValid('firstName')}
                    />
                    <Input
                      label="Nom"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      required
                      error={errors.lastName}
                      isValid={isFieldValid('lastName')}
                    />
                  </div>

                  <Input
                    label="Nom de l'entreprise"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    required
                    error={errors.company}
                    isValid={isFieldValid('company')}
                  />

                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    error={errors.email}
                    isValid={isFieldValid('email')}
                  />

                  <Input
                    label="Téléphone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    error={errors.phone}
                  />

                  <Input
                    label="Ville"
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    required
                    error={errors.city}
                    isValid={isFieldValid('city')}
                  />

                  <Select
                    label="Taille de l'entreprise"
                    value={formData.companySize}
                    onChange={(e) => handleChange('companySize', e.target.value)}
                    options={companySizeOptions}
                    required
                    error={errors.companySize}
                  />

                  <Select
                    label="Profil souhaité"
                    value={formData.profile}
                    onChange={(e) => handleChange('profile', e.target.value)}
                    options={profileOptions}
                    required
                    error={errors.profile}
                  />

                  {formData.profile && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <Input
                        label={getConditionalFieldLabel()}
                        value={formData.conditionalField}
                        onChange={(e) => handleChange('conditionalField', e.target.value)}
                        required
                        error={errors.conditionalField}
                        isValid={isFieldValid('conditionalField')}
                      />
                    </motion.div>
                  )}

                  <Textarea
                    label="Message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    error={errors.message}
                    isValid={isFieldValid('message')}
                  />

                  {errors.submit && (
                    <p className="text-sm text-red-500">{errors.submit}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-5 border border-white/30 text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-label mt-12"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
  );
}

