import React from 'react'
import uuid from 'react-uuid'
import StepWizard from 'react-step-wizard'
import Router from 'next/router'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Nav from '../components/nav'
import Dates from '../components/Mycovid/Dates'
import Diagnosis from '../components/Mycovid/Diagnosis'
import DiagnosisIntro from '../components/Mycovid/DiagnosisIntro'
import Questionnaire from '../components/questionnaire'

import Age from '../components/age'
import Gender from '../components/gender'
import Location from '../components/location'

import { updateCalendar } from '../redux/actions/calendarActions'
import { updateDiagnosis } from '../redux/actions/diagnosisActions'
import { updateSymptom } from '../redux/actions/symptomActions'
import { updateUser } from '../redux/actions/userActions'

import { prepareSymptoms } from '../lib/symptoms'

const useStyles = makeStyles(theme => ({
  hero: {
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    width: '100px',
  },
  progress: {
    margin: theme.spacing(5, 0),
    height: 15,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  wizard: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    width: '100%',
    alignContent: 'top',
    margin: theme.spacing(5, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0),
    },
  },
}))

const Mycovid = ({
  config,
  calendar,
  diagnosis,
  symptoms,
  user,
  updateCalendar,
  updateDiagnosis,
  updateSymptom,
  updateUser,
}) => {
  const classes = useStyles()

  const handleErrors = response => {
    if (response.status !== 200) {
      throw Error(response.statusText)
    }
    return response
  }

  const handleSubmit = () => {
    // @TODO: Clean this up
    const sessionId = uuid()
    const payload = {
      survey_id: '002',
      user_id: sessionId,
      report_date: new Date(),
      report_source: 'report_diagnosis',
      gender: user.gender,
      age: user.age,
      postcode: user.postcode,
      country: config.country.name,
      country_code: config.country.short,
      calendar,
      diagnosis,
      symptoms,
    }

    console.log('p', payload)
    fetch('/api/survey', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(() => {
        Router.push({ pathname: '/thanks' })
      })
      .catch(error => console.log(error))
  }

  const options = prepareSymptoms(process.env.disease.symptoms)

  return (
    <>
      <Grid container>
        <DiagnosisIntro />
        <StepWizard
          className={classes.wizard}
          nav={<Nav handleSubmit={handleSubmit} />}
        >
          <Diagnosis callback={updateDiagnosis} />
          <Questionnaire
            question="What were your symptoms?"
            options={options[0]}
            callback={updateSymptom}
          />
          <Questionnaire
            question="What were your symptoms? (continuation)"
            options={options[1]}
            callback={updateSymptom}
          />
          <Questionnaire
            question="What were your symptoms? (continuation)"
            options={options[2]}
            callback={updateSymptom}
          />
          <Dates calendar={calendar} callback={updateCalendar} />
          <Age callback={updateUser} />
          <Gender callback={updateUser} />
          <Location callback={updateUser} />
        </StepWizard>
      </Grid>
    </>
  )
}

const mapStateToProps = ({ calendar, config, diagnosis, symptoms, user }) => ({
  calendar,
  config,
  diagnosis,
  symptoms,
  user,
})

const mapDispatchToProps = {
  updateCalendar,
  updateDiagnosis,
  updateSymptom,
  updateUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Mycovid)
