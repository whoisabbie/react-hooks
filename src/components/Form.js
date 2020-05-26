import React, { useContext, useRef } from "react";
import PeopleContext from "../context/peopleContext";

import { useForm } from "../hooks";

// useMemo is used for computationally heavy operations
// useEffect is executed between renders
// useMemo is executed during a render
// useMemo is executed the same as useEffect and takes the same callback but diff is it is executed during the render means before useEffect
// useRef is used to create References it works the same as React.createRef

const Form = () => {
  const context = useContext(PeopleContext);

  const firstNameInput = useRef(null);

  const validatePersonDataForm = (values) => {
    let errors = {};
    if (values.firstName.trim() === "") {
      errors.firstName = "First name must not be empty";
    }
    if (values.lastName.trim() === "") {
      errors.lastName = "Last name must not be empty";
    }
    return errors;
  };

  const addPersonFromForm = () => {
    context.addPerson(values);
    firstNameInput.current.focus();
  };

  const { values, errors, onChange, onSubmit } = useForm(
    addPersonFromForm,
    { firstName: "", lastName: "" },
    validatePersonDataForm
  );

  // const printNumberOfPeople = () =>
  //   console.log(`Number of people: ${context.people.length}`);

  // useMemo(() => printNumberOfPeople(), [context.people]);

  return (
    <div className="col">
      <h2>Add a person:</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors.firstName && "is-invalid"}`}
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            ref={firstNameInput}
            onChange={onChange}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors.lastName && "is-invalid"}`}
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={onChange}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
