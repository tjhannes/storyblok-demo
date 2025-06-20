export interface StoryblokBlok {
  _uid: string;
  component: string;
  [key: string]: unknown;
}

export interface PageBlok extends StoryblokBlok {
  body?: StoryblokBlok[];
}

export interface FeatureBlok extends StoryblokBlok {
  name: string;
}

export interface TeaserBlok extends StoryblokBlok {
  headline: string;
}

export interface GridBlok extends StoryblokBlok {
  columns: StoryblokBlok[];
}
