import { withStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const StyledButton = withStyles({
  root: {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '1.5rem',
    borderRadius: '0',
  },
})(Button);

export default function SearchButton() {
  return (
    <StyledButton type="submit" variant="contained" color="primary">
      <SearchIcon fontSize="large" />
    </StyledButton>
  );
}
