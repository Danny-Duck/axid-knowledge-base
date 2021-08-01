import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

/** TODO
 *  - add unit tests
 *  - add suggestion box, content and logic
 *  - add status updates state. Will be an Enum of Success, Loading, Error (No content/404/401?)
 *  - add Search icon
 *  - add debounce logic for searching
 *  - add input sanitation, ( text only, min 3 chars, ?security risks?)
 */

export const SearchField = () => {
  const SearchInputField = styled(TextField)({});

  return (
    <Paper elevation={3}>
      <form noValidate autoComplete="off" style={{ width: "400px" }}>
        <SearchInputField
          fullWidth
          id="outlined-basic"
          label="Search Field"
          variant="outlined"
        />
      </form>
    </Paper>
  );
};
