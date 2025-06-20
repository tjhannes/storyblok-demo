import {
  storyblokEditable,
  StoryblokServerComponent,
  SbBlokData,
} from "@storyblok/react/rsc";

interface PageBlok extends SbBlokData {
  body?: SbBlokData[];
}

export default function Page({ blok }: { blok: PageBlok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
