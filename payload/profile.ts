import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { ProfilePayload } from '../types/profile';

const image = '/profile.jpg';

const profile: ProfilePayload = {
  disable: false,

  image,
  name: {
    title: '김예준',
    small: '(YJun)',
  },
  tagline: '소통을 중시하는 백엔드 개발자',
  contact: [
    {
      title: 'xodlf100@gmail.com',
      link: 'mailto:xodlf100@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/yejun95',
      icon: faGithub,
    },
    {
      title: '@yejun-kim',
      link: 'https://www.linkedin.com/in/yejun-kim-aa4242279/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '휴대전화나 링크드인 메시지가 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
