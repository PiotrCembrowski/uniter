import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border py-6 px-6 mt-12">
      <div className="max-w-4xl mx-auto text-center text-sidebar-foreground">
        <p className="text-sm">
          Real-time exchange rates •{" "}
          <a href="#" className="text-sidebar-primary hover:underline">
            FAQ
          </a>{" "}
          •{" "}
          <a href="#" className="text-sidebar-primary hover:underline">
            Support
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
