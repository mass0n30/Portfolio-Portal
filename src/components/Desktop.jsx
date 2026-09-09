import {X, Minimize2, Maximize2, Minus, Plus} from "lucide-react";
import { useState, useEffect } from 'react';

export default function Desktop() {
  const [toggled, setToggled] = useState(null);


  return (
    <div className="min-h-screen bg-desktop px-2 py-4 font-sans text-ink sm:px-6 lg:py-8">
    </div>
  );
}

function Window({ title, children, toggled, window, setToggled }) {

  const handleMaximize = () => {
    setToggled(window);
  };

  const handleMinimize = () => {
    setToggled(null);
  };

  return (
    <div className={`window ${toggled === window ? 'active' : ''}`}>
      <div className="titlebar">
        <div className="title">{title}</div>
        <div className="controls">
          <button onClick={handleMinimize}><Minus size={12} /></button>
          <button onClick={handleMaximize}><Plus size={12} /></button>
          <button onClick={() => setToggled(null)}><X size={12} /></button>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}