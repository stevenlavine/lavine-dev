import React from 'react';

export interface PageTitleInterface {
  id: number;
  largeText: string;
  smallText: string;
}
export interface FetchPageProps {
  token: string;
  locale: string;
  path: string;
  params?: object;
}
export interface HomeProps {
  cookies: object;
  data: {
    attributes: HomePageInterface;
  };
}
export interface HomePageInterface {
  introduction: string;
  pageTitle: PageTitleInterface;
  metaData?: SeoMetaInterface;
}
export interface MediaInterface {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width?: number;
  height?: number;
  formats?: MediaFormatsInterface;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}
export interface ErrorCodeInterface {
  errorCode: number;
}
export interface MediaFormatsInterface {
  large: MediaFormatInterface;
  small: MediaFormatInterface;
  medium: MediaFormatInterface;
  thumbnail: MediaFormatInterface;
}
export interface MediaFormatInterface {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
}
export interface SeoMetaInterface {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  metaRobots?: string;
  structuredData?: string;
  metaViewport?: string;
  metaSocial?: SocialMetaInterface[];
  canonicalURL?: string;
}
export interface SocialMetaInterface {
  socialNetwork: string;
  title: string;
  description: string;
  image: MediaInterface;
}
export interface LayoutInterface {
  children: React.ReactNode;
}
