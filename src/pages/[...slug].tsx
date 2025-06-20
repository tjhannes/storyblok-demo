import { GetStaticPaths, GetStaticProps } from "next";
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

export default function SlugPage({ story }: Props) {
  return <Page blok={story.content} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "published",
    per_page: 100,
  });

  const paths = data.stories
    .filter((story: { full_slug: string }) => story.full_slug !== "home")
    .map((story: { full_slug: string }) => ({
      params: { slug: story.full_slug.split("/") },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.slug) ? params.slug.join("/") : "home";
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "published",
  });

  return {
    props: {
      story: data.story,
    },
    // revalidate: 60, // Optional: ISR, revalidate every 60 seconds
  };
};
