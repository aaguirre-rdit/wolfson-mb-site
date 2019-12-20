import React, {useEffect} from "react"
import useForm from 'react-hook-form';
import styled from 'styled-components';
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from 'axios';
const FormContainer = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  > * {
    margin:5px 0;
  }
`
const Apply = (props) => {
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      fullName: "John Doe",
      email: "bluebill1049@cam.ac.uk",
      position:  "Nima's Slave",
      phone: '01223 1234'
    }
  });

  const onSubmit = async data => {
    alert(JSON.stringify(data));
    console.log({errors});
    await axios.post(
      'https://r03zccug99.execute-api.eu-west-2.amazonaws.com/develop/work',
      JSON.stringify(data),
    ).then(response => console.log({response}))
  };
  return(
    <Layout location={props.location}>
      <SEO title="Apply for work" />
      <h3>
        Application form here
      </h3>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Full Name </label>
        <input
          name="fullName"
          type={'text'}
          //defaultValue="name"
          ref={register({
            required: true,
          })} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Email address</label>
        <input
          name="email"
          type={'text'}
          //defaultValue={'email'}
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })} />
        <label>Mobile number</label>
        <input type="tel" name="Mobile number" ref={register({ required: true, maxLength: 11, minLength: 8 })} />
        {/* errors will return when field validation fails  */}
        <label>Position</label>
        <select name="Position" ref={register({ required: true })}>
          <option value="Nima's Slave">Nima's Slave</option>
          <option value="Silhouette Cropper">Silhouette Specialist</option>
          <option value="Pixel Counter">Pixel Counter</option>
          <option value="Donut Wall Assembler">Donut Wall Assembler</option>
        </select>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </FormContainer>
    </Layout>
  )
}

export default Apply
