import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const SubmissionSchema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  author: Yup.string().required('Autor é obrigatório'),
  file: Yup.mixed().required('Arquivo é obrigatório')
});

const Section = styled.section`
  padding: 2rem;
`;

const Submissions = () => {
  return (
    <Section>
      <h1>Submissão de Manuscritos</h1>
      <Formik
        initialValues={{ title: '', author: '', file: null }}
        validationSchema={SubmissionSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label>Título:</label>
              <Field name="title" type="text" />
            </div>
            <div>
              <label>Autor:</label>
              <Field name="author" type="text" />
            </div>
            <div>
              <label>Arquivo:</label>
              <input 
                name="file" 
                type="file" 
                onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
              />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Submissions;
