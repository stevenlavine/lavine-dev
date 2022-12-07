import { FetchPageProps } from '../types'
import axios from 'axios'

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
export function applyAuthorisationHeader(token: string) {
  if (token && token !== '') {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
  return {};
}
