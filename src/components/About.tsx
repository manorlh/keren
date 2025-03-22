export default function About() {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 md:text-4xl text-3xl">אודות המשרד</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed md:text-xl text-lg">
                            משרדנו בעל ניסיון רב בייצוג בתביעות רשלנות רפואית ונזקי גוף עם רזומה עשיר של הצלחות.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-16">
                        <div className="p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">ניסיון בייצוג מהצד השני</h3>
                            <p className="text-sm md:text-base text-gray-600">יייצוג קודם של המוסדות הרפואיים, הרופאים, חברות הביטוח, מעניק לנו יתרון משמעותי בניהול התיק</p>
                        </div>
                        <div className="p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">רשת מומחים</h3>
                            <p className="text-sm md:text-base text-gray-600">שיתוף פעולה מתמשך עם טובי המומחים הרפואיים בישראל</p>
                        </div>
                        <div className="p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">ניתוח מעמיק</h3>
                            <p className="text-sm md:text-base text-gray-600">יכולת מוכחת בפיצוח תיקים מורכבים והבנת הליבה הרפואית והמשפטית של כל מקרה ומקרה</p>
                        </div>
                        <div className="p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">ליווי אישי ויחס אנושי</h3>
                            <p className="text-sm md:text-base text-gray-600">
                               משרדנו שם דגש על ליווי אישי, קשוב ומותאם לצרכים הייחודיים של כל לקוח. אנו מתחייבים ליחס אנושי ומסור
                            </p>
                        </div>
                        <div className="p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">שכר טרחת עו״ד על בסיס הצלחה בלבד</h3>
                            <p className="text-sm md:text-base text-gray-600">{'תשלום דמי שכר הטרחה בסוף ההליך ומהצלחה בלבד. ללא תשלום שכ"ט מראש או דמי פתיחת תיק'}</p>
                        </div>
                        <div className="p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">מימון</h3>
                            <p className="text-sm md:text-base text-gray-600">למשרדנו שיתוף פעולה פורה עם חברות מימון משפטיות למקרים של העדר יכולת כלכלית לשאת בעלות חוות הדעת הרפואיות או הוצאות אחרות הדרושות לניהול ההליך</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 