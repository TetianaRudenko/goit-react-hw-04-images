import { ThreeDots  } from 'react-loader-spinner';
import { LoaderSpinner } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderSpinner>
      
      <ThreeDots 
        height="100" 
        width="100" 
        radius="50"
        color="#3f51b5" 
        /* ariaLabel="three-dots-loading" */
        visible={true}
      /> 

    </LoaderSpinner>
  )
}

export { Loader };