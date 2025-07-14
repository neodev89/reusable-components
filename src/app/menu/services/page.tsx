// app/products/page.tsx
import { takeService } from "@/app/actions/takeService"; // la tua funzione 'use server'
import Image from "next/image";

export const dynamic = "force-dynamic"; // ➜ SSR ad ogni richiesta
// oppure usa:
// export const revalidate = 3600; // ➜ ISR ogni ora

export default async function ProductPage() {
  const services = await takeService(); // chiamata diretta
  
  return (
    <div>
        
    </div>
  );
}
