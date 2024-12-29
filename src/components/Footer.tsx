export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">קרן להגאני - משרד עורכי דין</h3>
            <p className="text-gray-400">
              שירותים משפטיים מקצועיים עם מומחיות ויושרה
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">אודות</a></li>
              <li><a href="#practice-areas" className="text-gray-400 hover:text-white">תחומי התמחות</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white">למה אנחנו</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">צור קשר</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">פרטי התקשרות</h3>
            <address className="text-gray-400 not-italic">
              רחוב המשפט 123<br />
              קומה 10<br />
              תל אביב, ישראל<br />
              <a href="tel:+97255123456" className="hover:text-white" dir="ltr">+972 (55) 123-4567</a><br />
              <a href="mailto:contact@kerenlahagani.co.il" className="hover:text-white" dir="ltr">contact@kerenlahagani.co.il</a>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} קרן להגאני - משרד עורכי דין. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
} 