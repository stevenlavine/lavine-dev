import React from 'react';

export interface PageTitleInterface {
  id: number;
  largeText: string;
  smallText: string;
  subTitle: string;
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
  heroImage: MediaDataInterface;
  pageTitle: PageTitleInterface;
  metaData?: SeoMetaInterface;
  aboutMe: AboutMeInterface;
  work: WorkInterface;
}
export interface MediaDataInterface {
  data: {
    attributes: MediaInterface;
  };
}
export interface MediaInterface {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width?: number;
  height?: number;
  formats: MediaFormatsInterface;
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
export interface AboutMeInterface {
  id?: number;
  heading: string;
  biography: string;
  image: {
    data: {
      id: number;
      attributes: MediaInterface;
    };
  };
  skills: SkillInterface[];
  isMobile: boolean;
}
export interface SkillInterface {
  id: number;
  skill: string;
}
export interface WorkInterface {
  id: number;
  heading: string;
  introduction: string;
  projects: ProjectDataInterface;
}
export interface ProjectDataInterface {
  data: [
    {
      attributes: ProjectInterface;
    }
  ];
}
export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  url?: string;
  tags: TagsDataInterface;
  agency: AgencyInterface;
  updatedAt: string;
}
export interface AgencyInterface {
  id: number;
  name: string;
  url: string;
}
export interface TagsDataInterface {
  data: [
    {
      attributes: TagInterface;
    }
  ];
}
export interface TagInterface {
  id: number;
  name: string;
}
