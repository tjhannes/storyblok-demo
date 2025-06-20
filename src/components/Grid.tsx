import { storyblokEditable, SbBlokData } from "@storyblok/react";
import Feature from "./Feature";

interface GridBlok extends SbBlokData {
  columns: SbBlokData[];
}

interface FeatureBlok extends SbBlokData {
  name: string;
}

export default function Grid({ blok }: { blok: GridBlok }) {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => {
        if (nestedBlok.component === "feature") {
          return (
            <Feature key={nestedBlok._uid} blok={nestedBlok as FeatureBlok} />
          );
        }
        return (
          <div key={nestedBlok._uid}>
            Unknown component: {nestedBlok.component}
          </div>
        );
      })}
    </div>
  );
}
