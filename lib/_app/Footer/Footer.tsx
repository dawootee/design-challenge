import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <Image
        width={50}
        height={50}
        alt="Hollowverse"
        src="/images/letter-logo.png"
      />

      <p>
        Hollowverse is about the important <br />
        people and their beliefs.
      </p>

      <p className="mb-0">
        Email us at{' '}
        <a href="mailto:hollowverse@hollowverse.com">
          hollowverse@hollowverse.com
        </a>
        .
      </p>
    </footer>
  );
};
