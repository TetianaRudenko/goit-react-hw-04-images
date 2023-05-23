import PropTypes from "prop-types";
import { Button } from "./Button.styled";

const LoadMoreButton = ({ handleLoadMore }) => {
  return (
    <Button
      type="button"
      onClick={handleLoadMore}
    >
      Load more
    </Button>
  );
}

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
}

export { LoadMoreButton }