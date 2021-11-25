import React from "react";
import { CaptionHeading } from "@components";
import SectionContainer from "src/components/sectorContainer";

export default function ProductsRangePage() {
    return (
        <React.Fragment>
            <CaptionHeading
                title="Markets We Serve"
                caption="Our Products Range"
                titleClassName="mt-5 uppercase font-bold"
            />
            <SectionContainer
                imgLink={"hola"}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae iusto nostrum itaque maxime quam optio, voluptate minima praesentium, at ea necessitatibus quidem? Odio exercitationem iure explicabo commodi molestias eius repellendus. Fugiat corporis quod voluptate eos. Odio blanditiis reiciendis aperiam. Unde ut soluta obcaecati deleniti vero iure, fugiat voluptatum repellat eos!"
                }
            />
        </React.Fragment>
    );
}
