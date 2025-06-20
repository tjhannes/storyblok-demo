import {
  storyblokEditable,
  StoryblokServerComponent,
  SbBlokData,
} from "@storyblok/react/rsc";

interface GridBlok extends SbBlokData {
  columns: SbBlokData[];
}

export default function Grid({ blok }: { blok: GridBlok }) {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
