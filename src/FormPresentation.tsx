import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from 'antd';

interface Props {
  onSubmit: (data: any) => void;
}

const InputFieldAdapter = ({ input, meta, ...rest }: { input: any, meta: any }) => {
  return (
    <Input
      {...input}
      {...rest}
      onChange={(event: any) => input.onChange(event.currentTarget.value)}
      value={input.value}
    />
  );
};

export const FormPresentation: React.FC<Props> = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, values }) => (
      <form onSubmit={handleSubmit} data-testid="form">
        <Field
          name="firstName"
          component={InputFieldAdapter}
          data-testid="firstName"
        />
        {
          values.firstName === 'first name' && (
            <Field
              name="lastName"
              component={InputFieldAdapter}
              data-testid="lastName"
            />
          )
        }
      </form>
    )}
  />
);
