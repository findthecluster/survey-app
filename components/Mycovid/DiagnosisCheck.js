import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Options from '../Button/options'

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
}))

export default function DiagnosisCheck({ callback }) {
  const classes = useStyles()

  const options = [
    {
      key: 'yes',
      label: 'Yes',
    },
    {
      key: 'no',
      label: 'No',
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          className={classes.title}
          variant="h3"
          component="h3"
          gutterBottom
        >
          Have you been clinically tested for COVID-19?
        </Typography>
      </Container>
      <Container className={classes.options} align="center">
        <Options
          options={options}
          sendUpdate={value => {
            callback({ field: 'tested', value })
          }}
        />
      </Container>
    </>
  )
}
