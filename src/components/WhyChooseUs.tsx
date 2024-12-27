'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const reasons = [
  {
    title: 'Medical Expertise',
    description: 'Deep understanding of medical procedures, terminology, and standards of care to effectively evaluate your case.',
  },
  {
    title: 'Proven Track Record',
    description: 'Successfully recovered millions in compensation for victims of medical malpractice.',
  },
  {
    title: 'Expert Network',
    description: 'Access to leading medical experts who help build strong cases and provide expert testimony.',
  },
  {
    title: 'No Recovery, No Fee',
    description: 'We work on a contingency basis - you only pay if we win your case.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="why-choose-us">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-300">
              Dedicated exclusively to medical malpractice law, we provide the specialized expertise your case needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircleIcon className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-2xl font-light italic text-gray-300">
              "Fighting for justice when medical care falls short"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 