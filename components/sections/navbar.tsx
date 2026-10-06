'use client';

import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { WhatsappLink } from '@/components/ui/whatsapp-link';
import { GlassSurface } from '@/components/ui/glass-surface';
import { navLinks, siteConfig } from '@/lib/constants';

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-full md:border md:transition-all md:ease-out',
        {
          'bg-black/85 supports-[backdrop-filter]:bg-black/60 border-white/15 backdrop-blur-xl md:top-4 md:max-w-4xl shadow-2xl':
            scrolled && !open,
          'bg-black/95': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-6 md:h-14 md:transition-all md:ease-out text-white',
          {
            'md:px-4': scrolled,
          },
        )}
      >
        <a
          href="#inicio"
          id="nav-logo"
          className="font-heading font-extrabold text-xl tracking-tight hover:opacity-80 transition-opacity"
          aria-label={`${siteConfig.name} — início`}
        >
          STARTIN
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={buttonVariants({
                variant: 'ghost',
                className: 'text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-4 text-sm font-medium',
              })}
            >
              {link.name}
            </a>
          ))}

          <div className="ml-3">
            <GlassSurface
              variant="primary"
              borderRadius={999}
              className="cursor-pointer"
            >
              <WhatsappLink
                id="nav-whatsapp"
                source="navbar"
                className="px-5 py-2 text-white text-sm font-semibold hover:text-zinc-200 transition-colors inline-flex items-center"
              >
                Falar no WhatsApp
              </WhatsappLink>
            </GlassSurface>
          </div>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-full size-10"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'bg-black/95 backdrop-blur-2xl fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t border-white/10 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-4 p-6 text-white',
          )}
        >
          <div className="grid gap-y-3 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-heading font-bold py-2 text-gray-200 hover:text-white transition-colors"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pb-8">
            <WhatsappLink
              id="mobile-menu-whatsapp"
              source="mobile-menu"
              onClick={() => setOpen(false)}
              className="w-full text-center py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Falar no WhatsApp
            </WhatsappLink>
            <p className="text-center text-xs text-gray-500 pt-2">{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
