import React, { useState } from "react"
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
  let [submitted, changeSubmit] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      position:  "Team Leader",
      phone: ''
    }
  });

  const onSubmit = async data => {
    await axios.post(
      'https://r03zccug99.execute-api.eu-west-2.amazonaws.com/develop/work',
      JSON.stringify(data),
    ).then(response => {
      if (response.status == 200){
        changeSubmit(true)
      }
    })
  };
  return(
    <Layout location={props.location}>
      <SEO title="Apply for work" />
      {submitted ?
        <h4>Thanks for applying. Our team will get in contact with you soon!</h4>
      :
      <div>
      <div className={'apply-text'}>
        Wolfson College May Ball is currently looking for enthusiastic,
        motivated and passionate workers to help make this year's Ball an incredible success.<br/>
        Throughout the night you will/can be assigned a range of changing responsibilities to experience
        different roles and avoid repetitive tasks.
        For your work you will receive a competitive rate of at least £80 the night.<br/>
        <strong>What are we looking for?</strong> Applications should be able to work as part of a team, contribute to its success and show friendliness, motivation, and charisma to all team members and guests. Although previous experience in May Balls or hospitality is beneficial, it is not essential. Convince us with your personality and drive!
        Take this great opportunity, be part of a dynamic team, and make the Wolfson College May Ball one of
        the most exciting nights of the year while earning some money.<br/>
        We are seeking candidates for the following roles:
        <ul style={{padding:'0 25px'}}>
          <li><strong>Team leader</strong>: Supervises a specific team of the May Ball, such as, Food and Drinks, and ensures standards are met.</li>
          <li><strong>Court supervisor</strong>: Responsible for a specific court, for example, West Court, to ensure smooth operation.</li>
          <li><strong>Food and Drinks Worker</strong>: Serve food and drink and keep stalls stocked.
          </li>
          <li><strong>Security steward</strong>: Report any illegal attempts to enter May Ball and ensure health and safety</li>
          <li><strong>Ents runner</strong>: Escort acts to stage at the right time and ensure acts stay on schedule.</li>
          <li><strong>On-Call team</strong>: Staff vacant positions in different teams when required.
          </li>
          <li><strong>Litter collection worker</strong>: Collect litter and ensure appropriate disposal.</li>

          <li><strong>Set-up worker</strong>: Help setting-up Ball on day before (Thursday) and day itself (Friday).</li>
          <li><strong>Clear-up worker</strong>: Assist in clearing-up decorations and removing litter on day after May Ball.</li>
        </ul>
        Please apply <strong>until 7th March</strong> for first consideration. Interviews will be held on March 12th, 13th, and 14th.
        <br/>
        If you wish to apply, please complete our online application form below. <br/>
        <span id={'bur-quer'}>Send any queries to Nermin at <a href="mailto:logistics@wolfsonmayball.com">logistics@wolfsonmayball.com</a>.</span>
      </div>
      <FormContainer onSubmit={handleSubmit(onSubmit)} id={'job-form'}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Full Name </label>
        <input
          name="fullName"
          type={'text'}
          //defaultValue="name"
          ref={register({
            required: true,
          })} />
        <label>CRSID</label>
        <input
          name="CRSID"
          type={'text'}
          //defaultValue="name"
          ref={register({
            required: false,
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
          <option value="Team Leader">Team leader</option>
          <option value="Court Supervisor">Court supervisort</option>
          <option value="Food and Drinks worker">Food and Drinks worker</option>
          <option value="Security steward">Security steward</option>
          <option value="On-call team">On-call team</option>
          <option value="Litter collection worker">Litter collection worker</option>
          <option value="Set-up worker">Set-up worker</option>
          <option value="Clear-up worker">Clear-up worker</option>
        </select>
        <label>Have you worked at a May Ball before or have any other experience in hospitality? Please share any specific information and, if applicable, indicate why you would like to occupy a specific role
        </label>
        <textarea name="Experience" ref={register({required: true})} />
        <label>Please indicate your availability for interviews
        </label>
        <textarea name="Availability" ref={register({required: true})} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </FormContainer>
        </div>}
    </Layout>
  )
}

export default Apply
