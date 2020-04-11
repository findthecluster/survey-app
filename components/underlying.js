import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'

import Symptom from './symptom'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  badge: {
    background: '#fff8ea',
    color: '#f44336',
    textAlign: 'center',
    padding: theme.spacing(3, 0),
  },
  list: {
    textAlign: 'left',
    color: '#000',
    padding: theme.spacing(0, 7),
    lineHeight: 2,
    fontSize: '18px',
  },
}))

export default function Underlying({ form, update }) {
  const classes = useStyles()

  const symptoms = [
    {
      name: 'Asthma or chronic lung disease',
      key: 'asthma',
    },
    {
      name: 'Diabetes',
      key: 'diabetes',
    },
    {
      name: 'High blood pressure',
      key: 'high_blood',
    },
    {
      name: 'Kidney disease',
      key: 'kidney_disease',
    },
    {
      name: 'Liver disease',
      key: 'liver_disease',
    },
    {
      name: 'Cardiovascular disease',
      key: 'cardiovascular_disease',
    },
    {
      name: 'Congestive heart failure',
      key: 'congestive_heart',
    },
    {
      name: 'Obesity',
      key: 'obesity',
    },
    {
      name: 'Pregnancy',
      key: 'pregnancy',
    },
    {
      name: 'Weakened immune system',
      key: 'weakened_immune',
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography align="center" variant="h3" component="h3" gutterBottom>
          Do you have any of the following conditions?
        </Typography>
      </Container>
      <Container align="center">
        {
          symptoms.map((symptom) => (
            <Symptom name={symptom.name} sendUpdate={(response) => { update(symptom.key, response) }} />
          ))
        }
      </Container>
    </>
  )
}
