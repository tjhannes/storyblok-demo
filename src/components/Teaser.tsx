import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface TeaserBlok extends SbBlokData {
  headline: string;
}

export default function Teaser({ blok }: { blok: TeaserBlok }) {
  return (
    <div className="teaser" {...storyblokEditable(blok)}>
      <h2>{blok.headline}</h2>
    </div>
  );
}
