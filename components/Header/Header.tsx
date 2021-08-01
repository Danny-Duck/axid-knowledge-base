import styled from "styled-components";

/** TODO
 * - add unit tests
 */

const StyledHeader = styled.h1`
  font-size: 3rem;
  color: #8a2be2;
`;

export const Header = () => {
  return <StyledHeader>Axid</StyledHeader>;
};
