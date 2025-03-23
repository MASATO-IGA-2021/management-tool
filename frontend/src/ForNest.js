import React from "react";
import ForItem from "./ForItem";

export default function ForNest({ src }) {
    return (
        <dl>
            {src.map((item) => (
                <ForItem key={item.isbn} item={item} />
            )
            )}
        </dl>
    );
}