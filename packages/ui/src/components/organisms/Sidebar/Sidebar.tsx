import React, { useState } from 'react';
import type { SidebarProps, SidebarItem } from './Sidebar.types';

interface SidebarNodeProps {
  item: SidebarItem;
  activeId?: string;
  collapsed?: boolean;
  depth?: number;
}

const SidebarNode: React.FC<SidebarNodeProps> = ({
  item,
  activeId,
  collapsed,
  depth = 0,
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children && item.children.length > 0);
  const isActive = item.id === activeId;

  const handleClick = () => {
    if (hasChildren) setOpen((v) => !v);
    item.onClick?.();
  };

  const inner = (
    <>
      {item.icon && (
        <span className="sj-sidebar__icon" aria-hidden="true">
          {item.icon}
        </span>
      )}
      {!collapsed && (
        <span className="sj-sidebar__label">{item.label}</span>
      )}
      {!collapsed && item.badge !== undefined && (
        <span className="sj-sidebar__badge">{item.badge}</span>
      )}
      {!collapsed && hasChildren && (
        <span className="sj-sidebar__chevron" aria-hidden="true">
          {open ? '▴' : '▾'}
        </span>
      )}
    </>
  );

  return (
    <li
      className={`sj-sidebar__item${isActive ? ' sj-sidebar__item--active' : ''}`}
      style={{ paddingLeft: depth * 12 }}
    >
      {item.href ? (
        <a
          href={item.href}
          className="sj-sidebar__link"
          aria-current={isActive ? 'page' : undefined}
          onClick={handleClick}
        >
          {inner}
        </a>
      ) : (
        <button
          className="sj-sidebar__link"
          aria-current={isActive ? 'page' : undefined}
          aria-expanded={hasChildren ? open : undefined}
          onClick={handleClick}
        >
          {inner}
        </button>
      )}

      {hasChildren && open && !collapsed && (
        <ul className="sj-sidebar__children" role="group">
          {item.children!.map((child) => (
            <SidebarNode
              key={child.id}
              item={child}
              activeId={activeId}
              collapsed={collapsed}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  items = [],
  activeId,
  collapsed = false,
  onCollapse,
  header,
  footer,
  className = '',
}) => {
  return (
    <aside
      className={`sj-sidebar${collapsed ? ' sj-sidebar--collapsed' : ''} ${className}`}
      aria-label="Sidebar navigation"
    >
      {header && <div className="sj-sidebar__header">{header}</div>}

      <nav>
        <ul className="sj-sidebar__list" role="tree">
          {items.map((item) => (
            <SidebarNode
              key={item.id}
              item={item}
              activeId={activeId}
              collapsed={collapsed}
            />
          ))}
        </ul>
      </nav>

      {footer && <div className="sj-sidebar__footer">{footer}</div>}

      {onCollapse && (
        <button
          className="sj-sidebar__toggle"
          onClick={() => onCollapse(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '→' : '←'}
        </button>
      )}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';