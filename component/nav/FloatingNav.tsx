import { useEffect, useState } from 'react';
import { useMediaQuery } from '../common/useMediaQuery';

interface NavItem {
  id: string;
  title: string;
}

export function FloatingNav() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    const sections = document.querySelectorAll('section[aria-labelledby]');
    const navItems: NavItem[] = [];
    sections.forEach((section) => {
      const labelId = section.getAttribute('aria-labelledby');
      if (labelId) {
        const heading = document.getElementById(labelId);
        if (heading) {
          navItems.push({
            id: labelId,
            title: heading.textContent || '',
          });
        }
      }
    });
    setItems(navItems);
  }, []);

  useEffect(() => {
    if (!isDesktop || items.length === 0) {
      return undefined;
    }

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => !!heading);

    const resolveActiveId = () => {
      // 페이지 하단 도달 시 마지막 섹션 활성화
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (atBottom && headings.length > 0) {
        return headings[headings.length - 1].id;
      }

      const activationTop = 24;
      const viewportMid = window.innerHeight / 2;
      const passed: { id: string; top: number }[] = [];

      headings.forEach((heading) => {
        const top = heading.getBoundingClientRect().top;
        if (top <= activationTop) {
          passed.push({ id: heading.id, top });
        }
      });

      if (passed.length > 0) {
        passed.sort((a, b) => b.top - a.top);
        const candidate = passed[0];

        // 현재 후보 섹션 이후의 다음 섹션이 뷰포트 중앙 위에 있으면 그 섹션을 활성화
        const candidateIdx = headings.findIndex((h) => h.id === candidate.id);
        if (candidateIdx < headings.length - 1) {
          const nextTop = headings[candidateIdx + 1].getBoundingClientRect().top;
          if (nextTop <= viewportMid) {
            return headings[candidateIdx + 1].id;
          }
        }

        return candidate.id;
      }

      return headings[0]?.id || items[0].id;
    };

    let rafId = 0;
    const updateActiveId = () => {
      const id = resolveActiveId();
      if (id) {
        setActiveId(id);
      }
    };

    const requestUpdate = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        updateActiveId();
        rafId = 0;
      });
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [isDesktop, items]);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const heading = document.getElementById(id);
    if (heading) {
      setActiveId(id);
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isDesktop || items.length === 0) return null;

  return (
    <nav
      className="floating-nav"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-label="Section navigation"
    >
      <ul className="floating-nav-list">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="floating-nav-item">
              <button
                onClick={() => handleClick(item.id)}
                className={`floating-nav-button ${isActive ? 'is-active' : ''}`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
