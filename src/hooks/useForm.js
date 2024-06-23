/** @format */
import { useState } from "react";
const validationRuleObj = [
  {
    id: "firstName",
    label: "first name",
    required: false,
  },
];

const useForm = () => {
  const [formSate, setFormState] = useState({
    errors: {},
    data: {},
  });
  const onChangeHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    // if (name === "first name") {
    if (!value) {
      setFormState((prevState) => {
        prevState["errors"][name] = "this field cannot be empty";
        prevState["data"][name] = value;
        return { ...prevState };
      });
      return;
    }
    setFormState((prevState) => {
      delete prevState["errors"][name];
      prevState["data"][name] = value;
      return { ...prevState };
    });
    console.log(name, value);
    //  }
  };

  return {
    onChangeHandler,
    formSate,
  };
};

export default useForm;
