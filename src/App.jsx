// built-in package
// component deep 0,1,2,3 alphabet
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/SOLIDPrinciple/Button";
import UserProfileList from "@/components/SOLIDPrinciple/userProfile";
// data
import USERPROFILES from "@/data/SOLIDPrinciple/userProfiles.json";
// custom package
import logger from "@/helpers/logger";
import Quotes from "@/services/useFetchData";
import { Joke } from "@/services/useFetchData";
import UncontrolledFeedbackForm from "@/components/ControlledVsUncontrolledForm/UncontrolledForm";
import Counter from "./components/useRef/Counter";
import AutoFocusInput from "./components/useRef/AutoFocusInput";
import ControlledForm from "./components/ControlledVsUncontrolledForm/ControlledForm";


//**
// Thinking in react
// import FilterableProductTable from '@components/ThinkingInReact/FilterableProductTable';
// import PRODUCTS from '@data/ThinkingInReact/products.json';
//  */

function App() {
  return (
    <>
      {/* Thinking in react */}
      {/* <FilterableProductTable products={PRODUCTS} /> */}

      {/* SOLID principle */}
      {/* SRP */}
      {/* <UserProfileList users={USERPROFILES} /> */}

      {/* OCP */}
      {/* <PrimaryButton
        onClick={() => logger.info(`[${PrimaryButton.name}] Button clicked`)}
        children={<p>Primary buttton</p>}
      />
      <SecondaryButton
        onClick={() => logger.info(`[${SecondaryButton.name}] Button clicked`)}
        children={<h6>Secondary buttton</h6>}
      />
      <SecondaryButton
        onClick={() => logger.info(`[${SecondaryButton.name}] Button clicked`)}
        children={"Hello world"}
      /> */}

      {/* DIP */}
      {/* <Quotes />
      <Joke/> */}

      {/* Controlled vs uncontrolled */}
      <p>Uncontrolled form</p>
      <UncontrolledFeedbackForm>
      </UncontrolledFeedbackForm>
      <p>Controlled form</p>
      <ControlledForm></ControlledForm>
      <Counter/>
      <AutoFocusInput/>
    </>
  );
}

export default App;
