import { storyblokEditable, SbBlokData } from "@storyblok/react";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";

interface PageBlok extends SbBlokData {
  body?: SbBlokData[];
}

interface TeaserBlok extends SbBlokData {
  headline: string;
}

interface GridBlok extends SbBlokData {
  columns: SbBlokData[];
}

interface FeatureBlok extends SbBlokData {
  name: string;
}

export default function Page({ blok }: { blok: PageBlok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => {
        switch (nestedBlok.component) {
          case "teaser":
            return (
              <Teaser key={nestedBlok._uid} blok={nestedBlok as TeaserBlok} />
            );
          case "grid":
            return <Grid key={nestedBlok._uid} blok={nestedBlok as GridBlok} />;
          case "feature":
            return (
              <Feature key={nestedBlok._uid} blok={nestedBlok as FeatureBlok} />
            );
          default:
            return (
              <div key={nestedBlok._uid}>
                Unknown component: {nestedBlok.component}
              </div>
            );
        }
      })}
    </main>
  );
}
