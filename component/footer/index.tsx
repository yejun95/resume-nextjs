import { HrefTargetBlank } from '../common';
import { FooterPayload } from '../../types/footer';
import { Section } from '../common/Section';

type Payload = FooterPayload;

export function FooterSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <FooterContent payload={payload} />
    </Section>
  );
}

function FooterContent({ payload }: { payload: Payload }) {
  return (
    <footer className="resume-footer">
      <small>
        v.{`${payload.version} / `}
        <HrefTargetBlank url={payload.github} text="Github" />
      </small>
      <small style={{ display: 'block', marginTop: '8px', color: '#aaa' }}>
        {'이 이력서는 요우님의 멋진 오픈소스 템플릿을 기반으로 제작되었습니다. '}
        <HrefTargetBlank url="https://github.com/uyu423" text="@uyu423" />
      </small>
    </footer>
  );
}
