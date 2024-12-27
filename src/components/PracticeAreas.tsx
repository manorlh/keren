'use client';

import { motion } from 'framer-motion';
import { HeartIcon, BeakerIcon, UserGroupIcon, ClipboardDocumentCheckIcon, BuildingOfficeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const practices = [
  {
    title: 'Surgical Errors',
    description: 'Representation for victims of surgical mistakes, wrong-site surgery, and post-operative negligence',
    icon: HeartIcon,
  },
  {
    title: 'Misdiagnosis',
    description: 'Cases involving delayed, missed, or incorrect diagnosis of serious conditions',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Birth Injuries',
    description: 'Advocacy for families affected by negligence during pregnancy, labor, and delivery',
    icon: UserGroupIcon,
  },
  {
    title: 'Medication Errors',
    description: 'Cases involving wrong medication, dosage errors, and dangerous drug interactions',
    icon: BeakerIcon,
  },
  {
    title: 'Hospital Negligence',
    description: 'Claims against hospitals for systemic failures and negligent care',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Emergency Room Errors',
    description: 'Cases involving ER mistakes, delayed treatment, and improper patient discharge',
    icon: ExclamationTriangleIcon,
  },
];

export default function PracticeAreas() {
  return (
    <section className="py-20 bg-gray-50" id="practice-areas">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Focus</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in all types of medical malpractice cases, fighting for patients who have suffered due to healthcare negligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <practice.icon className="h-12 w-12 text-gray-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 