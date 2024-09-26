import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { mockSubmissions } from "../mockData";
import * as Yup from "yup";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Validação do formulário com Yup
const SubmissionSchema = Yup.object().shape({
  title: Yup.string().required("Título é obrigatório"),
  author: Yup.string().required("Autor é obrigatório"),
  abstract: Yup.string().required("Resumo é obrigatório"),
  email: Yup.string().required("Email é obrigatório").email("Email inválido"),
  file: Yup.mixed().required("Arquivo é obrigatório"),
});

// Estilizações usando styled-components
const PageContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FormContainer = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const InputField = styled(Field)`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const GuideSection = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const PolicySection = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 8px;
  line-height: 1.6;
`;

const SubmissionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SubmissionItem = styled.li`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
`;

const DownloadButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 1.5rem;

  &:hover {
    color: #0056b3;
  }
`;
const submissions = mockSubmissions;

const Submissions = () => {
  return (
    <PageContainer>
      <Section>
        <Title>Guia de Submissão</Title>
        <GuideSection>
          <p>
            Para submeter seu manuscrito para avaliação, siga as diretrizes
            abaixo:
          </p>
          <ul>
            <li>O manuscrito deve ser formatado conforme o seguinte padrão:</li>
            <ul>
              <li>Fonte: Times New Roman, tamanho 12</li>
              <li>Espaçamento entre linhas: 1.5</li>
              <li>Margens: 2,5 cm em todos os lados</li>
              <li>
                Página de título contendo o nome do manuscrito e dos autores
              </li>
              <li>Referências no estilo APA</li>
            </ul>
            <li>O arquivo deve ser enviado nos formatos PDF ou DOCX.</li>
          </ul>
        </GuideSection>
      </Section>

      <Section>
        <Title>Formulário de Submissão</Title>
        <FormContainer>
          <Formik
            initialValues={{
              title: "",
              author: "",
              abstract: "",
              email: "",
              file: null,
            }}
            validationSchema={SubmissionSchema}
          >
            {({ setFieldValue }) => (
              <Form>
                <div>
                  <Label>Título:</Label>
                  <InputField name="title" type="text" />
                  <ErrorMessage name="title" component={Error} />
                </div>
                <div>
                  <Label>Autor(es):</Label>
                  <InputField name="author" type="text" />
                  <ErrorMessage name="author" component={Error} />
                </div>
                <div>
                  <Label>Resumo:</Label>
                  <TextArea name="abstract" />
                  <ErrorMessage name="abstract" component={Error} />
                </div>
                <div>
                  <Label>Email:</Label>
                  <InputField name="email" type="text" />
                  <ErrorMessage name="email" component={Error} />
                </div>
                <div>
                  <Label>Arquivo:</Label>
                  <input
                    name="file"
                    type="file"
                    onChange={(event) =>
                      setFieldValue("file", event.currentTarget.files[0])
                    }
                  />
                  <ErrorMessage name="file" component={Error} />
                </div>
                <SubmitButton type="submit">Enviar</SubmitButton>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </Section>

      <Section>
        <Title>Política Editorial</Title>
        <PolicySection>
          <p>
            A revisão dos manuscritos será feita de forma anônima por pelo menos
            dois avaliadores. Os autores devem garantir que os manuscritos
            seguem as normas éticas de publicação, e a submissão implica que os
            direitos autorais serão transferidos para a revista após a
            aprovação.
          </p>
        </PolicySection>
      </Section>

      <Section>
        <Title>Listagem de Submissões</Title>
        <SubmissionList>
          {submissions.map((submission) => (
            <SubmissionItem key={submission.id}>
              <div>
                <h3>{submission.title}</h3>
                <p>
                  <strong>Autor(es):</strong> {submission.author}
                </p>
                <p>
                  <strong>Resumo:</strong> {submission.abstract}
                </p>
                <p>
                  <strong>Email:</strong> {submission.email}
                </p>
              </div>
              <DownloadButton title="Baixar arquivo">
                <FontAwesomeIcon icon={faDownload} />
              </DownloadButton>
            </SubmissionItem>
          ))}
        </SubmissionList>
      </Section>
    </PageContainer>
  );
};

export default Submissions;
