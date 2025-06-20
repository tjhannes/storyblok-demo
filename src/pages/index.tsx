import { GetStaticProps } from "next";
import Page from "@/components/Page";
import { SbBlokData } from "@storyblok/react";
import { getStoryblokApi } from "@/lib/storyblok";

interface PageBlok extends SbBlokData {
  body?: SbBlokData[];
}

interface Props {
  story: {
    content: PageBlok;
  };
}

export default function HomePage({ story }: Props) {
  return <Page blok={story.content} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: "published",
  });

  return {
    props: {
      story: data.story,
    },
  };
};
