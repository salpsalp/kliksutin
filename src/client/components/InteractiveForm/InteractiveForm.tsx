import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Grid } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'
import usePersistForm from '../../hooks/usePersistForm'
import useSaveEntryMutation from '../../hooks/useSaveEntryMutation'
import HelloBanner from './HelloBanner'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import Results from '../ResultPage/Results'
import Openai from '../ResultPage/Openai/Openai'
import ProceedToContact from '../ResultPage/ProceedToContact'
import { FormValues } from '../../types'
import { FORM_DATA_KEY } from '../../../config'
import styles from '../../styles'

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const mutation = useSaveEntryMutation(survey?.id)
  const [showResults, setShowResults] = useState(false)
  const [resultData, setResultData] = useState<FormValues>(null)

  const { formStyles } = styles

  const getSavedInstance = useCallback(() => {
    const savedData = sessionStorage.getItem(FORM_DATA_KEY)
    if (savedData) return JSON.parse(savedData)

    return {}
  }, [])

  const {
    formState: { isSubmitted },
    handleSubmit,
    control,
    watch,
    getValues,
  } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
    defaultValues: getSavedInstance(),
  })

  const onSubmit = (data: FormValues) => {
    const submittedData = data

    setResultData(submittedData)
    mutation.mutateAsync(submittedData)

    setShowResults(true)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }) // Scroll to top
  }

  usePersistForm({ value: getValues(), sessionStorageKey: FORM_DATA_KEY })

  if (isLoading) return null

  return (
    <Box sx={formStyles.formWrapper}>
      <Grid container>
        <Grid item sm={12}>
          <HelloBanner />
        </Grid>
        <Grid item sm={12} md={7} xl={8}>
          <form
            style={{ display: showResults ? 'none' : 'block' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <RenderSurvey
              control={control}
              watch={watch}
              handleSubmit={handleSubmit(onSubmit)}
              isSubmitted={isSubmitted}
            />
          </form>

          {resultData && showResults && (
            <>
              <Results
                formResultData={resultData}
                watch={watch}
                setShowResults={setShowResults}
              />
              <Grid item sm={12}>
                <Openai watch={watch} />
              </Grid>
              <Grid item sm={12}>
                <ProceedToContact />
              </Grid>
            </>
          )}
        </Grid>
        <Grid item sm={12} md={5} xl={4}>
          <Recommendations watch={watch} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default InteractiveForm
