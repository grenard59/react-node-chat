import React, { ComponentType, ReactNode } from 'react';
import { Field, ErrorMessage } from 'formik';

type InputFormProps = {
  label: string;
  name: string;
  type: string;
};

type TextErrorProps = {
  children: ReactNode;
};

const TextError = (props: TextErrorProps) => {
  return <div className="error">{props.children}</div>;
};

const InputForm = (props: InputFormProps) => {
  const { label, name, type, ...rest } = props;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <label htmlFor={name}>{label}</label>
        <Field Required id={name} name={name} type={type} {...rest} />
      </div>
      <ErrorMessage component={TextError as ComponentType} name={name} />
    </div>
  );
};
export default InputForm;
