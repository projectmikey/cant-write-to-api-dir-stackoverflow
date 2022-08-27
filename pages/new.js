import Form from '../components/Form'

const New = () => {
  const demoForm = {
    fileBody: [],
  }

  return <Form formId="add-demo-form" demoForm={demoForm} />
}

export default New
