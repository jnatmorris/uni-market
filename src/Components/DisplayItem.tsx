import React from "react";
import Image from "next/image";
import { shimmer, toBase64,PostProps } from "@ImageDisplay/index";


export const DisplayItem: React.FC<PostProps> = ({
    index,
    username,
    author,
    itemName,
    itemDesc,
    price,
    imageWidth,
    imageHeight,
    imageURL,
}) => {
    return (
        <div className="pb-2 shadow-xl rounded-2xl space-y-[1vh] h-fit  bg-slate-200">
            {/* temp image */}
            <Image
                className="rounded-b-none rounded-t-2xl"
                layout="responsive"
                priority={index <= 4 ? true : false}
                quality={75}
                src={imageURL}
                lazyBoundary={"300px"}
                alt={itemName}
                height={imageHeight}
                width={imageWidth}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                )}`}
            />

            <div className="px-[1vh] space-y-2">
                {/* https://stackoverflow.com/q/40242378 */}
                <h3 className="pr-1 font-semibold text-lg inline relative overflow-hidden after:right-[100%] after:ease-out after:duration-500 after:bg-slate-600 after:h-0.5 hover:after:right-0 after:absolute after:left-0 after:bottom-[-3px] w-fit">
                    {itemName}
                </h3>

                <div className="space-y-2">
                    <h4 className="text-base font-normal leading-tight">
                        <span className="font-semibold">Sold by:</span>{" "}
                        {username}
                    </h4>
                    <h4 className="text-base font-normal leading-tight">
                        <span className="font-semibold">Price:</span> ${price}
                    </h4>
                    <h4 className="text-base font-normal leading-tight">
                        <span className="font-semibold">Item Discription:</span>{" "}
                        {itemDesc}
                    </h4>
                </div>
            </div>
        </div>
    );
};
