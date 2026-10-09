"use client";

import { useState } from "react";

export function DropdownBasicPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ln-dropdown">
      <button
        className="ln-dropdown__toggle"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen(!open)}
      >
        Actions ▾
      </button>
      <div className="ln-dropdown__menu">
        <a className="ln-dropdown__item" href="#">Edit</a>
        <a className="ln-dropdown__item" href="#">Duplicate</a>
        <div className="ln-dropdown__divider"></div>
        <a className="ln-dropdown__item ln-dropdown__item--danger" href="#">Delete</a>
      </div>
    </div>
  );
}

export function DropdownHeadingsPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ln-dropdown">
      <button
        className="ln-dropdown__toggle"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen(!open)}
      >
        More ▾
      </button>
      <div className="ln-dropdown__menu">
        <div className="ln-dropdown__heading">Navigate</div>
        <a className="ln-dropdown__item" href="#">
          <span className="ln-dropdown__label">Go to file</span>
          <span className="ln-dropdown__shortcut">⌘P</span>
        </a>
        <a className="ln-dropdown__item" href="#">
          <span className="ln-dropdown__label">Go to line</span>
          <span className="ln-dropdown__shortcut">⌘G</span>
        </a>
        <div className="ln-dropdown__divider"></div>
        <div className="ln-dropdown__heading">Actions</div>
        <a className="ln-dropdown__item" href="#">
          <span className="ln-dropdown__label">Copy link</span>
        </a>
      </div>
    </div>
  );
}
