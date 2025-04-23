import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    //we can give header and footer here
    <div className="px-5 md:px-0 max-w-4xl mx-auto prose dark:prose-invert">{children}</div>
  );
}
