// app/products/page.tsx
import { ProductsType } from "@/@types/products";
import { takeProducts } from "@/app/actions/takeProducts"; // la tua funzione 'use server'
import Image from "next/image";

export const dynamic = "force-dynamic"; // ➜ SSR ad ogni richiesta
// oppure usa:
// export const revalidate = 3600; // ➜ ISR ogni ora

export default async function ProductPage({
    classCarousel,
    classCarouselImg
}: ProductsType) {
  const products = await takeProducts(); // chiamata diretta
  
  return (
    <div className={classCarousel}>
        
    </div>
  );
}
