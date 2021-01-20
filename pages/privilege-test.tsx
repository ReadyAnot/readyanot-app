import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { QuizQuestion } from '@prisma/client'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import MyAppBar from '../lib/components/AppBar'
import PageContainer, {
  ComponentContainer,
} from '../lib/components/AppContainer'
import MyFooter from '../lib/components/Footer'
import { useCreateLogMutation } from '../lib/graphql/generated/graphql'
import getQuizQuestions from '../lib/prisma/server/quiz'
import { LightCanvas } from '../lib/styles/theme'

export type QuizLog = {
  response: boolean[]
  score: number
}

const useStyles = makeStyles((theme) => ({
  testContent: {
    backgroundColor: LightCanvas,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: '4rem',
    },
  },
  form: {
    marginTop: '1rem',
  },
  progressBar: {
    margin: '2rem 0',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.25rem',
    '& button': {
      marginRight: '2.5rem',
      '&:last-child': {
        marginRight: 'unset',
      },
    },
  },
  scoreText: {
    fontSize: '4rem',
    fontWeight: 700,
    margin: '1rem 0',
  },
  formControlLabel: {
    margin: '9px 0',
  },
  checkbox: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
}))

type PrivilegeTestProps = {
  questions: QuizQuestion[]
}

const PrivilegeTest: NextPage<PrivilegeTestProps> = ({ questions }) => {
  const questionsInPage = 15
  const classes = useStyles()

  const defaultState = new Array<boolean>(questions.length).fill(false)
  const [questionStates, setQuestionStates] = useState<boolean[]>(defaultState)
  const [page, setPage] = useState<number>(0)
  const maxPage = Math.floor(questions.length / questionsInPage)
  const [showResults, setShowResults] = useState<boolean>(false)

  const [createLogMutation] = useCreateLogMutation()

  const onViewScore = () => {
    const logObject: QuizLog = {
      response: questionStates,
      score: questionStates.filter((el) => Boolean(el)).length*2,
    }
    createLogMutation({
      variables: {
        input: {
          namespace: 'USAGE',
          topic: 'PRIVILEGE_TEST',
          data: JSON.stringify(logObject),
        },
      },
    })
    setShowResults(true)
  }

  const clearQuestionStates = () => {
    setPage(0)
    setQuestionStates(defaultState)
    setShowResults(false)
  }

  const pageQuestion = questions.slice(
    page * questionsInPage,
    (page + 1) * questionsInPage
  )

  const QuestionsComponent: React.FC = () => (
    <ComponentContainer>
      <Typography variant="h2">{'Privilege Test'}</Typography>
      <FormGroup className={classes.form}>
        {pageQuestion.map((qn, id) => {
          const indexOffset = page * questionsInPage
          return (
            <FormControlLabel
              key={qn.id}
              className={classes.formControlLabel}
              control={
                <Checkbox
                  className={classes.checkbox}
                  checked={questionStates[indexOffset + id]}
                  onChange={(event) => {
                    questionStates[indexOffset + id] = event.target.checked
                    setQuestionStates([...questionStates])
                  }}
                  name={`question-${indexOffset + id}`}
                />
              }
              label={`${id + indexOffset + 1}. ${qn.content}`}
            />
          )
        })}
      </FormGroup>
      <LinearProgress
        className={classes.progressBar}
        variant="determinate"
        value={(page * 100) / maxPage}
      />
      <div className={classes.buttonRow}>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          size="large"
          variant="outlined"
        >
          {'Previous'}
        </Button>
        {page !== maxPage ? (
          <Button
            onClick={() => setPage(page + 1)}
            size="large"
            variant="contained"
            color="primary"
          >
            {'Next'}
          </Button>
        ) : (
          <Button
            onClick={onViewScore}
            size="large"
            variant="contained"
            color="primary"
          >
            {'Get score'}
          </Button>
        )}
      </div>
    </ComponentContainer>
  )

  const ResultsComponent: React.FC = () => (
    <ComponentContainer>
      <Typography variant="h2">{'Your Privilege Score:'}</Typography>
      <Typography className={classes.scoreText}>
        {questionStates.filter((el) => Boolean(el)).length*2}
      </Typography>
      <Button
        onClick={clearQuestionStates}
        size="large"
        variant="contained"
        color="primary"
      >
        {'Try again'}
      </Button>
    </ComponentContainer>
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  return (
    <PageContainer>
      <Head>
        <title>Privilege Test</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <MyAppBar />
        <div className={classes.testContent}>
          {!showResults ? <QuestionsComponent /> : <ResultsComponent />}
        </div>
      </main>

      <MyFooter />
    </PageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { questions: await getQuizQuestions() } }
}

export default PrivilegeTest
