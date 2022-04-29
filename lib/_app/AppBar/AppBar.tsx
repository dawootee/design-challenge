import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const AppBar = () => {
  return (
    <nav className="bg-primary nav">
      <section>
        <div>
          <Link passHref href="/">
            <a>
              <Image
                src="/images/logo.svg"
                width={250}
                height={30}
                alt="Hollowverse"
                layout="fixed"
              />
            </a>
          </Link>
        </div>

        <div>
          {/* Search input */}
          <div>
            <input className="search-input" placeholder="Search for a celebrity" type="search" />
          </div>
        </div>
      </section>
    </nav>
  );
};
