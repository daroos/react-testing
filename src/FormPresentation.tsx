import React from 'react';
import { Form, Field } from 'react-final-form';

interface Props {
  onSubmit: (data: any) => void;
}

export const FormPresentation: React.FC<Props> = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, values }) => (
      <form onSubmit={handleSubmit} data-testid="form">
        <Field
          name="firstName"
          component="input"
          data-testid="firstName"
        />
        {
          values.firstName === 'first name' && (
            <Field
              name="lastName"
              component="input"
              data-testid="lastName"
            />
          )
        }
      </form>
    )}
  />
);
