const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#050505]">
      <div className="container mx-auto px-6 text-center text-white/50 text-sm">
        <p>© {new Date().getFullYear()} Rutwik Wakale. All rights reserved.</p>
        <p className="mt-2 text-white/30">Built with React, Three.js & Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
