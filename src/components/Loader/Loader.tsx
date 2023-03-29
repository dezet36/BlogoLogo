import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import React from "react";

export const LoaderCustom = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);
