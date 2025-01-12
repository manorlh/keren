'use client';

import {useEffect, useState} from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

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
      <button
        onClick={handleOpen}
        type="button"
        className="fixed bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center z-50"
        aria-label="הגדרות נגישות"
      >
        <AccessibilityNewIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen flex items-end sm:items-center justify-center p-0 sm:p-4">
              <div className="bg-gray-50 rounded-t-2xl sm:rounded-lg shadow-xl p-4 sm:p-6 w-full sm:max-w-md relative text-right">
                <div className="flex items-center mb-4 sm:mb-6 border-b border-gray-200 pb-3 sm:pb-4">
                  <button
                    onClick={handleClose}
                    className="text-gray-600 hover:text-gray-800 transition-colors p-2"
                    aria-label="סגור"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex-1 text-right mr-2 sm:mr-4">הגדרות נגישות</h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Font Size Control */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-900 text-sm sm:text-base">גודל טקסט</label>
                    <div className="flex items-center gap-3 bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                      <button
                        onClick={() => updateSettings({ fontSize: settings.fontSize - 10 })}
                        className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold"
                        disabled={settings.fontSize <= 90}
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-medium text-gray-900 text-base sm:text-lg">{settings.fontSize}%</span>
                      <button
                        onClick={() => updateSettings({ fontSize: settings.fontSize + 10 })}
                        className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold"
                        disabled={settings.fontSize >= 150}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Cursor Size */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-900 text-sm sm:text-base">גודל סמן</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => updateSettings({ cursor: 'default' })}
                        className={`p-2 rounded-lg border shadow-sm transition-colors text-sm sm:text-base ${
                          settings.cursor === 'default' ? 'bg-blue-100 border-blue-300 text-blue-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        רגיל
                      </button>
                      <button
                        onClick={() => updateSettings({ cursor: 'large' })}
                        className={`p-2 rounded-lg border shadow-sm transition-colors text-sm sm:text-base ${
                          settings.cursor === 'large' ? 'bg-blue-100 border-blue-300 text-blue-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        גדול
                      </button>
                      <button
                        onClick={() => updateSettings({ cursor: 'larger' })}
                        className={`p-2 rounded-lg border shadow-sm transition-colors text-sm sm:text-base ${
                          settings.cursor === 'larger' ? 'bg-blue-100 border-blue-300 text-blue-800' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        גדול מאוד
                      </button>
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900 text-sm sm:text-base">ניגודיות גבוהה</span>
                    </label>

                    <label className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.oppositeContrast}
                        onChange={(e) => updateSettings({ oppositeContrast: e.target.checked })}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900 text-sm sm:text-base">ניגודיות הפוכה</span>
                    </label>

                    <label className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900 text-sm sm:text-base">הפחתת אנימציות</span>
                    </label>

                    <label className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highlightLinks}
                        onChange={(e) => updateSettings({ highlightLinks: e.target.checked })}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900 text-sm sm:text-base">הדגשת קישורים</span>
                    </label>

                    <label className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.dyslexicFont}
                        onChange={(e) => updateSettings({ dyslexicFont: e.target.checked })}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900 text-sm sm:text-base">גופן ידידותי לדיסלקציה</span>
                    </label>

                    <label className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.grayscale}
                        onChange={(e) => updateSettings({ grayscale: e.target.checked })}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900 text-sm sm:text-base">מצב שחור-לבן</span>
                    </label>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4 sm:mt-6">
                    <button
                      onClick={resetSettings}
                      className="w-full py-2.5 sm:py-3 px-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-bold text-base sm:text-lg shadow-sm"
                    >
                      איפוס הגדרות
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
} 