import React, { useState } from 'react'

type TValue = string | number | string[]

interface HookInput {
  value: TValue
  setValue(v: unknown): void
  reset(): void
  bind: {
    value: TValue
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
  }
}

/**
 * @async
 * @function useInput
 * @description A simple hook that allow us to handle basic input state
 *
 * @param {TValue} initialValue - initial input value
 * @return {HookInput} object with hook state and events function attributes
 *
 * @example
 * const { value, bind, reset } = useInput("Mhirba")
 *
 *
 */
export default function useInput(initialValue: TValue): HookInput {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: (): void => setValue(null),
    bind: {
      value,
      onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value)
      },
    },
  }
}