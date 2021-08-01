import Head from "next/head";
import { Grid, Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Header } from "components/Header";
import { SearchField } from "components/SearchField";

/**  TODO
 * - add unit tests
 * - add little favicon of a purple A
 */

const StyledContainer = styled(Container)({
  height: "100vh",
});

const ContentWrapper = styled(Grid)({
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

const Index = () => {
  return (
    <>
      <Head>
        <title>Axid Knowledge Search</title>
        <meta name="description" content="Search for knowledges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContainer disableGutters>
        <ContentWrapper container direction={"column"}>
          <Header />
          <SearchField />
        </ContentWrapper>
      </StyledContainer>
    </>
  );
};

export default Index;
