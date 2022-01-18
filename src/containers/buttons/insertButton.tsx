import React from 'react';
import { InsertButton } from '../../components';
// import { FormItContext } from "../../context/FormItContext";

export default function InsertButtonContainer() {
  // const { state, dispatch } = useContext(FormItContext);
  return (
    <InsertButton>
      <InsertButton.Insert>add me</InsertButton.Insert>
    </InsertButton>
  );
}
