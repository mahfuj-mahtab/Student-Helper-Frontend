import SideBar from '@/components/SideBar';
import React from 'react'

export default function layout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <SideBar options={[{"name":"pdf To Docx","url":"/pdf-tools/pdftodocx"}]}/>
        
        {children}
      </body>
    </html>
  );
}

