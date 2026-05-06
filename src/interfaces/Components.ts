export interface OptimizedImageProps {
  src: string // path without extension (e.g. "/assets/hero")
  alt: string
  className?: string
  placeholder?: string // optional blurred image
  sizes?: string // optional responsive hint for browsers
}


export interface BannerSlideProps {
  videoSrc: string
  title: string
  buttonText: string
  buttonLink: string
}

export interface Service {
  key:string;
  title: string;
  image: string;
  link: string;
}

export interface SeriveProps {
  service: Service;
  index: number;
}

export interface Project {
  category: string;
  categoryLink: string;
  title: string;
  description: string;
  image: string;
  link: string;
}


export interface ProjectSlideProps {
  project: Project;
  index: number;
}

export interface ProjectImageProps {
  image: string;
  link: string;
}

export interface ProjectContentProps {
  category: string;
  categoryLink: string;
  title: string;
  description: string;
  link: string;
}

export interface NewsItem {
  title: string;
  image: string;
  link: string;
  description?: string;
  date: string;
  large?: boolean; // For layout style (left big card vs right small)
}

export interface NewsProps {
  news: NewsItem;
  index?:number
}

export interface Client {
  default: string
}

export interface ClientInterface {
  clients:Client[],
  title:string
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumnProps {
  title: string;
  ariaLabel:string
  links: FooterLink[];
  delay?: number;
}

export interface StatItem {
  value: number;
  label: string;
}

export interface StatsListProps {
  stats: StatItem[];
}

export interface StatCardProps {
  value: number;
  label: string;
  delay: number;
}

export interface FooterLink {
  label: string;
  url: string;
}


export interface pageBannerProps{
  Imageurl:string,
  pageTitle:string,
  currentCrumb:string,
}

export interface AboutCard {
  key:string;
  title: string;
  image: string;
  imageAR: string;
  link: string;
}


export interface TeamMember {
  id: number;
  name: {
    ar:string;
    en:string;
  };
  title: {
    en:string;
    ar:string;
  };
  description: {
    en:string;
    ar:string
  };
  image: string;
}

export interface TeamMemberProps {
  team: TeamMember[];
}

export interface TeamPowerProps {
  title?: string;
  subtitle?: string;
  years?: number;
  imageSrc: string;
  imageAlt?: string;
  subExperience?:string;
}


export interface GlobalReachProps {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface Office {
  name: string;
  address: string;
  tel: string;
  email: string;
  mapEmbedUrl: string;
}


export interface ImageBlockProps {
  src?: string; // optional, will use dummy if not provided
  alt?: string;
  title?:string
  className?: string;
}

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export type Lang = 'en' | 'ar';
