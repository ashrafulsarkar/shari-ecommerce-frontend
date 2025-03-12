import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import BlogBreadcrumb from "@/components/breadcrumb/blog-breadcrumb";
import BlogPostboxArea from "@/components/blog/blog-postox/blog-postbox-area";
import Footer from "@/layout/footers/footer";
import { constructApiUrl } from "@/lib/constructApiUrl";


export const metadata = {
  title: "Shofy - Blog Page",
};

export default async function BlogPage({ params, searchParams }) {
  searchParams = await searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const filters = {
    title: await searchParams?.title || "",
    tag: await searchParams?.tag || "",
    category: await searchParams?.category || "",
  };

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <BlogBreadcrumb />
      <BlogPostboxArea
      query={{
        apiUrl: constructApiUrl(filters, currentPage)
      }}
      />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
