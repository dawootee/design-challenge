import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <section className="tag-collection">
      <ul className="tag-list">
        {tags.regular.map((t) => (
          <li key={t.tag.name}>{t.tag.name}</li>
        ))}
      </ul>

      {tags.lowConfidence.length > 0 && (
        <>
          <h3>Maybe</h3>
          <ul className="tag-list">
            {tags.lowConfidence.map((t) => (
              <li key={t.tag.name}>{t.tag.name}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
