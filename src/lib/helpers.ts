import { FetchPageProps } from '../types';
import axios from 'axios';
import { RefObject, useEffect, useState } from 'react';

export async function fetchPage(props: FetchPageProps) {
  const headers = applyAuthorisationHeader(props.token);
  const response = await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_URL}${props.path}`,
    params: {
      ...props.params,
    },
    headers,
  });
  return {
    data: response.data.data,
    errorCode: response.data.length === 0 ? 404 : response.status,
  };
}

export async function sendContact(props: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/contacts`,
    {
      data: { ...props },
    }
  );
  return {
    data: response.data.data,
    errorCode: response.data.length === 0 ? 404 : response.status,
  };
}

export function applyAuthorisationHeader(token: string) {
  if (token && token !== '') {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
  return {};
}

export function useScrollDirection() {
  const [scroll, setScroll] = useState({
    direction: 'up',
    y: 0,
  });
  useEffect(() => {
    let lastScrollY = 0;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setScroll({
        ...{
          direction,
          y: lastScrollY,
        },
      });
    };
    if (window) {
      lastScrollY = window.scrollY;
      window.addEventListener('scroll', updateScrollDirection);
    }
    return () => {
      if (window) {
        window.removeEventListener('scroll', updateScrollDirection);
      }
    };
  }, [scroll]);

  return scroll;
}

export function useIsMobile() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth > 981) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    if (window) {
      checkMobile();
      window.addEventListener('orientationchange', checkMobile);
      window.addEventListener('resize', checkMobile);
      return () => {
        window.removeEventListener('orientationchange', checkMobile);
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, []);
  return mobile;
}
