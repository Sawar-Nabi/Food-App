import React from "react";
import styled from "styled-components";

const HomeFoodItems = () => {
  return (
    <Card>
      <div className="card_items_img">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png"
          alt=""
        />
      </div>
      <div className="card_content">
        <h1>Hello</h1>
      </div>
    </Card>
  );
};

export default HomeFoodItems;

const Card = styled.div`
  background: red;
`;
