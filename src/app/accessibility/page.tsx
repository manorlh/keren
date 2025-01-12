export default function AccessibilityPage() {
  return (
    <main className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto bg-white">
      <h1 className="text-3xl font-bold mb-8 text-right text-black">הצהרת נגישות</h1>
      
      <div className="space-y-6 text-right">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-black">מבוא</h2>
          <p className="text-black">
            אתר זה מונגש לאנשים עם מוגבלויות על פי תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), 
            תשע״ג-2013 והתקן הישראלי (ת״י 5568) לנגישות תכנים באינטרנט ברמת AA.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-black">אמצעי נגישות</h2>
          <p className="text-black">
            האתר כולל את אמצעי הנגישות הבאים:
          </p>
          <ul className="list-disc list-inside mr-6 mt-2 text-black space-y-1">
            <li>התאמה לניווט מקלדת</li>
            <li>תיאורי תמונות חלופיים</li>
            <li>ניגודיות צבעים מותאמת</li>
            <li>אפשרות להגדלת טקסט</li>
            <li>מבנה עמוד ברור וקבוע</li>
            <li>תמיכה בתוכנות הקראה</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-black">הצהרת נגישות</h2>
          <p className="text-black">
            אנו מאמינים שהאינטרנט צריך להיות נגיש לכולם. אנו פועלים באופן מתמיד לשיפור נגישות האתר 
            בהתאם לתקנים המקובלים. האתר נבדק על ידי יועצי נגישות מוסמכים ונמצא תואם לדרישות התקן הישראלי.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-black">תפריט נגישות</h2>
          <p className="text-black">
            באתר קיים תפריט נגישות המאפשר:
          </p>
          <ul className="list-disc list-inside mr-6 mt-2 text-black space-y-1">
            <li>שינוי גודל הטקסט</li>
            <li>שינוי ניגודיות צבעים</li>
            <li>הדגשת קישורים</li>
            <li>שינוי גופן לקריא יותר</li>
            <li>הגדלת סמן העכבר</li>
            <li>הפסקת אנימציות</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-black">דיווח על בעיות נגישות</h2>
          <p className="text-black">
            נתקלתם בבעיית נגישות באתר? נשמח לקבל משוב. ניתן לפנות לרכז הנגישות שלנו:
          </p>
          <div className="mt-2 text-black">
            <p>שם: קרן להגאני</p>
            <p>טלפון: 054-7932398</p>
            <p>דוא״ל: keren@klh-law.co.il</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-black">תאריך עדכון ההצהרה</h2>
          <p className="text-black">
            הצהרת הנגישות עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
          </p>
        </section>
      </div>
    </main>
  );
} 