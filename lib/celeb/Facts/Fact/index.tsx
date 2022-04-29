import Link from 'next/link';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact as TFact } from '~/lib/components/types';

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <div className="fact">
      <div className="text-right">
        <p>{value.date}</p>
      </div>

      <div>
        {(value.type === 'quote' && (
          <div>
            <p>
              {value.context}, {name} said
            </p>

            <blockquote>
              <p>{value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == 'fact' && (
            <div>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

      <div className="fact-tags">
        {value.tags.map((t) => {
          return (
            <p key={t.tag.name}>
              # {t.isLowConfidence && 'Possibly '}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div className="btn-group">
        <Link href={value.source}>
          <button className="btn btn-primary">Source</button>
        </Link>
        <Link href={value.forumLink}>
          <button className="btn btn-secondary">Forum link</button>
        </Link>
      </div>
    </div>
  );
};
