import JewelryBanner from "@/components/banner/jewelry-banner";

async function getAlbum(type) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/slider/slider_data?type=${type}`, {
        next: { revalidate: 10 },
      });

    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data ;
  }

export default async function ServerSLider({type}) {
    const result = await getAlbum(type);
  return (
    <div>
         <JewelryBanner slider_result={result}/>
    </div>
  )
}
