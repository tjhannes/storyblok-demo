import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { PageProps } from "../../../.next/types/app/layout";

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const fullSlug = slug ? slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: "draft",
  });

  return <StoryblokStory story={data.story} />;
}
