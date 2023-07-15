import { productDetails } from "@/app/models/product/productDetails";
import { ProductDetailsService } from "@/mock/products.mock";
import axios from "axios";
import { useQuery } from "react-query";
import { blob } from "stream/consumers";

// interface ImageData {
//   id: number;
//   url: string;
//   description: string;
//   title: string;
// }

export type getProductDetailsParams = {
  start?: number;
  count?: number;
};

export function useGetProductDetails(params: getProductDetailsParams) {
  return useQuery<productDetails[], Error>("images", async () => {
    const result = await getProductDetails(params);
    return result;
  });
}

export async function getProductDetails(params: getProductDetailsParams) {
  // this part should be in the backend
  const service = new ProductDetailsService();
  const data = service.reader(params.start, params.count);
  //

  const imageUrls = (data.map((x) => x?.image) as string[]) || [];
  const images = await getAllImageData(imageUrls);

  return mapToProductDetails(data, images || []);
}
async function getAllImageData(imageUrls: string[]) {
  try {
    const responses = await Promise.all(
      imageUrls.map((url) =>
        fetch(url, { method: "GET" })
          .then((response) => response.blob())
          .then((blob) => URL.createObjectURL(blob))
      )
    );
    return responses;
  } catch (error) {
    console.error(error);
  }
}

function mapToProductDetails(data: any[], images: string[]): productDetails[] {
  if (data.length === 0 || images.length === 0) {
    return [];
  }

  const result = data.map((x, index) => {
    return {
      name: x.name,
      version: x.version,
      image: images[index],
      pcType: x.pcType,
      cpu: x.cpu,
      gb: x.gb,
      ssd: x.ssd,
      ram: x.ram,
      price: x.price,
      discount: x.discount,
      isBuyNow: x.isBuyNow,
      pricePerMonth: x.pricePerMonth,
      shippingFee: x.shippingFee,
      deliveryDate: x.deliveryDate,
      estimatedDeliveryDate: x.estimatedDeliveryDate,
    } as productDetails;
  });
  return result;
}
