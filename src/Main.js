/**
 * MAIN
 * ---
 * Instead of dividing all of our components by `route` we rather just put it into a `MAIN` and then
 * start dividing it by `route` this way we have a `global` control over our routes and have a "main"
 * controller if we need to in the near future.
 */

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50vh 1fr;
`;

const Main = () => {
  return <Container>testing</Container>;
};

export default Main;
