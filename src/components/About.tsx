'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Our Practice</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            With extensive experience in medical malpractice law, Keren Lahagani has dedicated her career 
            to advocating for patients who have suffered due to medical negligence. Our firm combines deep 
            medical knowledge with legal expertise to build strong cases for our clients.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Expertise</h3>
              <p className="text-gray-600">Focused exclusively on medical malpractice cases with proven results</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Knowledge</h3>
              <p className="text-gray-600">Deep understanding of medical procedures and standards of care</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Support</h3>
              <p className="text-gray-600">Compassionate guidance through complex medical legal cases</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 