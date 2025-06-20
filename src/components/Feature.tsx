import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface FeatureBlok extends SbBlokData {
  name: string;
}

export default function Feature({ blok }: { blok: FeatureBlok }) {
  return (
    <div className="feature" {...storyblokEditable(blok)}>
      <span>{blok.name}</span>
    </div>
  );
}
