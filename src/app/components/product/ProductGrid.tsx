import { productDetails } from "@/app/models/product/productDetails";
import style from "./styles/productGridStyle.module.css";
import React from "react";
import Image from "next/image";
import Panel from "../styling/panels/Panel";
import RoundLabel from "../styling/labels/RoundLabel";
import RedLabel from "../styling/labels/RedLabel";
import { convertStringToFormatDate } from "@/app/utils/convertStringToFormatDate";
import logo from "../../../../public/icon-affirm.svg";
import RoundButton from "../styling/buttons/RoundButtons";

type productGridProps = { productDetails: productDetails };

function ProductGrid(props: productGridProps) {
  return (
    <div className={style.container_div}>
      <Panel>
        <div className={style.content_div}>
          <div className={style.label_div}>
            <RoundLabel label={props.productDetails.pcType} />
          </div>
          <div className={style.image_div}>
            <div className={style.frame_div}>
              <Image src={props.productDetails.image} alt={`product`} fill />
            </div>
          </div>

          <div>
            <h3 className={style.bold_font}>{props.productDetails.name}</h3>
          </div>

          <div>
            <h4>{props.productDetails.version}</h4>
            <h4>{props.productDetails.cpu}</h4>
            <h4>{props.productDetails.gb}</h4>
            <h4>{props.productDetails.ssd}</h4>
            <h4>{props.productDetails.ram}</h4>
          </div>

          <div className={style.price_div}>
            <div className={style.label_div}>
              <RedLabel label={`SAVE ${props.productDetails?.discount}`} />
            </div>
            <div className={style.discount_div}>
              <h2>
                {`$${
                  props.productDetails.price -
                  (props.productDetails?.discount || 0)
                }`}
              </h2>
              <h4
                className={style.price_h4}
              >{`$${props.productDetails.price}`}</h4>
            </div>

            <div className={style.startat_div}>
              <h5>
                {`Starting at `}
                <span>{`$${props.productDetails.pricePerMonth}/mo`}</span> with
              </h5>
              <div className={style.logo_div}>
                <Image src={logo} alt={`product`} fill />
              </div>
            </div>

            <div className={style.shipping_div}>
              <div>
                <h5 className={style.bold_font}>
                  {props.productDetails.shippingFee
                    ? props.productDetails.shippingFee
                    : "Free Shipping"}
                </h5>

                <h5>
                  {props.productDetails.isBuyNow
                    ? `Delivery By ${
                        convertStringToFormatDate(
                          props.productDetails.deliveryDate
                        ) || ""
                      }`
                    : `Estimate Ship By ${
                        convertStringToFormatDate(
                          props.productDetails.estimatedDeliveryDate
                        ) || ""
                      }`}
                </h5>
              </div>
              <RoundButton
                label={props.productDetails.isBuyNow ? "Buy Now" : "Customise"}
              />
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default ProductGrid;
