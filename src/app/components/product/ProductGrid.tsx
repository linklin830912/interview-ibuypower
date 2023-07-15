import { productDetails } from "@/app/models/product/productDetails";
import style from "./styles/productGridStyle.module.css";
import React from "react";
import Image from "next/image";
import Panel from "../styling/panels/Panel";
import RoundLabel from "../styling/labels/RoundLabel";

type productGridProps = { productDetails: productDetails };

function ProductGrid(props: productGridProps) {
  return (
    <div className={style.container_div}>
      <Panel>
        <div className={style.content_div}>
          <div>
            <RoundLabel label={props.productDetails.pcType} />
          </div>
          <div className={style.image_div}>
            <div className={style.frame_div}>
              <Image src={props.productDetails.image} alt={`product`} fill />
            </div>
          </div>

          <div>
            <h3>{props.productDetails.name}</h3>
          </div>

          <div>
            <h4>{props.productDetails.cpu}</h4>
            <h4>{props.productDetails.gb}</h4>
            <h4>{props.productDetails.ssd}</h4>
            <h4>{props.productDetails.ram}</h4>
          </div>

          <div className={style.price_div}>
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
            <h5>
              {`Starting at `}
              <span>{`$${props.productDetails.pricePerMonth}/mo`}</span> with
            </h5>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default ProductGrid;
