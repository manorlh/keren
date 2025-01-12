'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  oppositeContrast: boolean;
  reducedMotion: boolean;
  highlightLinks: boolean;
  dyslexicFont: boolean;
  grayscale: boolean;
  cursor: 'default' | 'large' | 'larger';
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  oppositeContrast: false,
  reducedMotion: false,
  highlightLinks: false,
  dyslexicFont: false,
  grayscale: false,
  cursor: 'default',
};

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applySettings(parsedSettings);
    }
  }, []);

  // Update settings
  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applySettings(updatedSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  };

  // Apply settings to the document
  const applySettings = (settings: AccessibilitySettings) => {
    // Font size
    document.documentElement.style.fontSize = `${settings.fontSize}%`;

    // High contrast
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Opposite contrast
    if (settings.oppositeContrast) {
      document.documentElement.classList.add('opposite-contrast');
    } else {
      document.documentElement.classList.remove('opposite-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Highlight links
    if (settings.highlightLinks) {
      document.documentElement.classList.add('highlight-links');
    } else {
      document.documentElement.classList.remove('highlight-links');
    }

    // Dyslexic font
    if (settings.dyslexicFont) {
      document.documentElement.classList.add('dyslexic-font');
    } else {
      document.documentElement.classList.remove('dyslexic-font');
    }

    // Grayscale
    if (settings.grayscale) {
      document.documentElement.classList.add('grayscale');
    } else {
      document.documentElement.classList.remove('grayscale');
    }

    // Cursor size
    document.documentElement.classList.remove('cursor-large', 'cursor-larger');
    if (settings.cursor !== 'default') {
      document.documentElement.classList.add(`cursor-${settings.cursor}`);
    }
  };

  const resetSettings = () => {
    updateSettings(defaultSettings);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
        aria-label="פתח תפריט נגישות"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6.5V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 10L12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14L12 18L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-medium">נגישות</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-gray-50 rounded-lg shadow-xl p-6 w-full max-w-md relative text-right">
                  <div className="flex items-center mb-6 border-b border-gray-200 pb-4">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                      aria-label="סגור"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <h2 className="text-xl font-bold text-gray-900 flex-1 text-right mr-4">הגדרות נגישות</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Font Size Control */}
                    <div>
                      <label className="block mb-2 font-medium text-gray-900">גודל טקסט</label>
                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                        <button
                          onClick={() => updateSettings({ fontSize: settings.fontSize - 10 })}
                          className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 w-10 h-10 flex items-center justify-center text-xl font-bold"
                          disabled={settings.fontSize <= 90}
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-medium text-gray-900 text-lg">{settings.fontSize}%</span>
                        <button
                          onClick={() => updateSettings({ fontSize: settings.fontSize + 10 })}
                          className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 w-10 h-10 flex items-center justify-center text-xl font-bold"
                          disabled={settings.fontSize >= 150}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Cursor Size */}
                    <div>
                      <label className="block mb-2 font-medium text-gray-900">גודל סמן</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => updateSettings({ cursor: 'default' })}
                          className={`p-2 rounded-lg border shadow-sm transition-colors ${
                            settings.cursor === 'default' ? 'bg-blue-100 border-blue-300 text-blue-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          רגיל
                        </button>
                        <button
                          onClick={() => updateSettings({ cursor: 'large' })}
                          className={`p-2 rounded-lg border shadow-sm transition-colors ${
                            settings.cursor === 'large' ? 'bg-blue-100 border-blue-300 text-blue-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          גדול
                        </button>
                        <button
                          onClick={() => updateSettings({ cursor: 'larger' })}
                          className={`p-2 rounded-lg border shadow-sm transition-colors ${
                            settings.cursor === 'larger' ? 'bg-blue-100 border-blue-300 text-blue-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          גדול מאוד
                        </button>
                      </div>
                    </div>

                    {/* Toggles */}
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-900">ניגודיות גבוהה</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.oppositeContrast}
                          onChange={(e) => updateSettings({ oppositeContrast: e.target.checked })}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-900">ניגודיות הפוכה</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-900">הפחתת אנימציות</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.highlightLinks}
                          onChange={(e) => updateSettings({ highlightLinks: e.target.checked })}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-900">הדגשת קישורים</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.dyslexicFont}
                          onChange={(e) => updateSettings({ dyslexicFont: e.target.checked })}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-900">גופן ידידותי לדיסלקציה</span>
                      </label>

                      <label className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.grayscale}
                          onChange={(e) => updateSettings({ grayscale: e.target.checked })}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-900">מצב שחור-לבן</span>
                      </label>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-6">
                      <button
                        onClick={resetSettings}
                        className="w-full py-3 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-bold text-lg shadow-sm"
                      >
                        איפוס הגדרות
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 