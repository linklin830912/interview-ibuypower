export type productDetails = {
  name: string;
  version: string;
  pcType: string;
  image: string;
  cpu: string;
  gb: string;
  ssd: string;
  ram: string;
  price: number;
  discount?: number;
  isBuyNow: boolean;
  pricePerMonth?: number;
  shippingFee?: number;
  deliveryDate?: string;
  estimatedDeliveryDate?: string;
};
