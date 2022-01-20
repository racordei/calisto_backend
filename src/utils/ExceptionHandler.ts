import { Response } from 'express'

interface IOptions {
  error: any
  status?: number
  message?: string
  custom?: object
}

class Options implements IOptions {
  declare error: any
  declare status?: number | 400
  declare message?: string | undefined
  declare custom?: object | undefined
}

export const ExceptionHandler = (res: Response, options: Options) => {
  const e = options.error
  const status = options.status || 400
  const errorMessage =
    options.message || 'Something went wrong. See more logs on the server'
  if (e instanceof Error) {
    const result = options.custom
      ? { error: e.message, ...options.custom }
      : { error: e.message }
    return res.status(status).json(result)
  } else {
    console.error(e)
    const result = options.custom
      ? { error: errorMessage, ...options.custom }
      : { error: errorMessage }
    return res.status(status).json({ error: errorMessage })
  }
}
