import React from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { InfoType, Locales, Question } from '../../../types'

type HandleChange = (event: SelectChangeEvent) => void

const allSelection: InfoType = {
  id: 'allDimensions',
  title: {
    fi: 'Kaikki',
    sv: 'All',
    en: 'All',
  },
}

const languages = [
  {
    id: 'en',
    title: {
      fi: 'englanti',
      sv: 'engelska',
      en: 'English',
    },
  },
  {
    id: 'sv',
    title: {
      fi: 'ruotsi',
      sv: 'svenska',
      en: 'Swedish',
    },
  },
]

const sortDimensions = (dimensions: InfoType[], language: keyof Locales) => {
  const sortedDimensions = dimensions.sort((a, b) => {
    if (a.title[language] > b.title[language]) return 1
    if (a.title[language] < b.title[language]) return -1

    return 0
  })

  return sortedDimensions
}

export const DimensionSelect = ({
  dimensionId,
  dimensions,
  handleChange,
}: {
  dimensionId: string
  dimensions: InfoType[]
  handleChange: HandleChange
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  const sortedDimensions = sortDimensions(dimensions, language)
  const dimensionSelections = [allSelection].concat(sortedDimensions)

  return (
    <Box mr={2} width={300}>
      <FormControl fullWidth>
        <InputLabel>{t('admin:selectDimension')}</InputLabel>
        <Select
          label={t('admin:selectDimension')}
          value={dimensionId}
          onChange={handleChange}
        >
          {dimensionSelections.map(({ id, title }) => (
            <MenuItem key={id} value={id}>
              {title[language]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

const sortQuestions = (questions: Question[], language: keyof Locales) => {
  const sortedQuestions = questions.sort((a, b) => {
    if (a.title[language] > b.title[language]) return 1
    if (a.title[language] < b.title[language]) return -1

    return 0
  })

  return sortedQuestions
}

export const QuestionSelect = ({
  questionId,
  questions,
  handleChange,
}: {
  questionId: string
  questions: Question[]
  handleChange: HandleChange
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  const filteredQuestions = questions.filter(
    ({ optionData }) =>
      optionData.options.length && optionData.type !== 'dimensions'
  )
  const sortedQuestions = sortQuestions(filteredQuestions, language)

  return (
    <Box mr={2} width={300}>
      <FormControl fullWidth>
        <InputLabel>{t('admin:selectQuestion')}</InputLabel>
        <Select
          label={t('admin:selectQuestion')}
          value={questionId}
          onChange={handleChange}
        >
          {sortedQuestions.map(({ id, title }) => (
            <MenuItem key={id} value={id}>
              {title[language]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export const LanguageSelect = ({
  selectedLanguage,
  handleChange,
}: {
  selectedLanguage: keyof Locales
  handleChange: HandleChange
}) => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales

  return (
    <Box width={150}>
      <FormControl fullWidth>
        <FormLabel>{t('admin:selectLanguage')}</FormLabel>
        <RadioGroup defaultValue="en" onChange={handleChange}>
          {languages.map(({ id, title }) => (
            <FormControlLabel
              key={id}
              value={id}
              control={<Radio />}
              label={title[language]}
              checked={selectedLanguage === id}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
