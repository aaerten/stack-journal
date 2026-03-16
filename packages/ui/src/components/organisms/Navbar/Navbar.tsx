import React, { useState } from 'react';
import type { NavbarProps } from './Navbar.types';

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  items = [],
  rightSlot,
  variant = 'default',
  className = '',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`sj-navbar sj-navbar--${variant} ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="sj-navbar__inner">
        {logo && <div className="sj-navbar__logo">{logo}</div>}

        <ul className="sj-navbar__items" role="menubar">
          {items.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                className={`sj-navbar__link${item.isActive ? ' sj-navbar__link--active' : ''}`}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.icon && (
                  <span className="sj-navbar__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className="sj-navbar__badge"
                    aria-label={`${item.badge} notifications`}
                  >
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {rightSlot && <div className="sj-navbar__right">{rightSlot}</div>}

        <button
          className="sj-navbar__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <ul className="sj-navbar__mobile" role="menu">
          {items.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                className={`sj-navbar__link${item.isActive ? ' sj-navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon && <span aria-hidden="true">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

Navbar.displayName = 'Navbar';