import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IntroducePayload } from '../../types/introduce';
import { Section } from '../common/Section';
import { SectionAnimate } from '../common/SectionAnimate';

type Payload = IntroducePayload;

export function IntroduceSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <IntroduceContent payload={payload} />
    </Section>
  );
}

function LatestUpdatedBadge({ dateStr }: { dateStr: string }) {
  const [dDay, setDDay] = useState<number | null>(null);

  useEffect(() => {
    const latestUpdated = DateTime.fromFormat(dateStr, Util.LUXON_DATE_FORMAT.YYYY_LL_DD);
    const diff = Math.floor(
      DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
    );
    setDDay(diff);
  }, [dateStr]);

  const latestUpdated = DateTime.fromFormat(dateStr, Util.LUXON_DATE_FORMAT.YYYY_LL_DD);
  const formatted = latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD);

  return (
    <span className="tag tag--muted">
      {dDay !== null ? `${formatted} (D+${dDay})` : formatted}
    </span>
  );
}

function IntroduceContent({ payload }: { payload: Payload }) {
  const sectionId = 'section-introduce';

  return (
    <SectionAnimate>
      <section className="editorial-section" aria-labelledby={sectionId}>
        <div className="split-row">
          <div className="split-left">
            <h2 id={sectionId} className="section-heading">
              INTRODUCE
            </h2>
          </div>
          <div>
            {payload.contents.map((content, index) => (
              <p key={index.toString()}>{content}</p>
            ))}
            <p className="text-end">
              <small>Latest Updated</small>{' '}
              <LatestUpdatedBadge dateStr={payload.latestUpdated} />
            </p>
            <p className="text-end" style={Style.sign}>
              {payload.sign}
            </p>
          </div>
        </div>
      </section>
    </SectionAnimate>
  );
}
