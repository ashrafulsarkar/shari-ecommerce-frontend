import React from "react";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import BlogDetailsArea from "@/components/blog-details/blog-details-area";

async function getBlogDetails(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog_post/blog_details/${id}`, {
      next: { revalidate: 10 },
    });

  if (!response.ok) {
      return [];
  }
  const data = await response.json();
  return data ;
}


const BlogDetails = async({ params }) => {
  const {id} = await params
  const result = await getBlogDetails(id);
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <BlogDetailsArea blog={result} />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default BlogDetails;
