'use client'

import React from 'react'
import { ACCEPTED_ATTACHMENTS, HONEYPOT_FIELD } from '@/lib/quote-form'

// Every control here renders a real <label>. The old forms leaned on
// placeholders, which vanish the moment someone starts typing and are skipped
// by screen readers entirely.
//
// Layout rule that keeps grid rows aligned: label on top, control in the
// middle, hint underneath. Labels are a single line and never carry extra
// text, so two fields side by side always start their inputs at the same
// height. Only required fields are marked; unmarked means optional.

// Two quote forms often sit on the same page (homepage: custom-box + quote
// section; industry pages: sidebar + full form). Field ids were previously the
// bare field name, so the page shipped duplicate ids and clicking a label in
// the second form focused the first form's input. Each form now gets a unique
// prefix and every control derives its id from it.
const FieldIdContext = React.createContext('')

export function FieldIdProvider({
  prefix,
  children,
}: {
  prefix: string
  children: React.ReactNode
}) {
  return <FieldIdContext.Provider value={prefix}>{children}</FieldIdContext.Provider>
}

function useFieldId(name: string) {
  const prefix = React.useContext(FieldIdContext)
  return prefix ? `${prefix}-${name}` : name
}

const base =
  'w-full rounded-none border border-kraft-200 bg-white px-4 py-3 text-sm text-ink placeholder-ink/35 transition focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500'

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block truncate text-[11px] font-bold uppercase tracking-wide text-kraft-600">
      {children}
      {required && (
        <span className="text-orange-500" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </label>
  )
}

export function FieldHint({ children }: { children?: React.ReactNode }) {
  if (!children) return null
  return <p className="mt-1.5 text-[11px] leading-snug text-ink/40">{children}</p>
}

type TextFieldProps = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'number' | 'date'
  required?: boolean
  placeholder?: string
  hint?: string
  autoComplete?: string
  inputMode?: 'text' | 'email' | 'tel' | 'numeric' | 'decimal'
  defaultValue?: string
}

export function TextField({
  name,
  label,
  type = 'text',
  required,
  placeholder,
  hint,
  autoComplete,
  inputMode,
  defaultValue,
}: TextFieldProps) {
  const id = useFieldId(name)
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        defaultValue={defaultValue}
        className={base}
      />
      <FieldHint>{hint}</FieldHint>
    </div>
  )
}

export type SelectGroup = { label: string; options: readonly string[] }

export function SelectField({
  name,
  label,
  options,
  groups,
  required,
  placeholder = 'Select one',
  hint,
  value,
  defaultValue,
  onChange,
  disabled,
  disabledPlaceholder,
  extraOption,
}: {
  name: string
  label: string
  /** Flat list. Ignored when `groups` is given. */
  options?: readonly string[]
  /** Grouped list, rendered as <optgroup>s. */
  groups?: readonly SelectGroup[]
  required?: boolean
  placeholder?: string
  hint?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  disabledPlaceholder?: string
  extraOption?: string
}) {
  const id = useFieldId(name)
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <select
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={`${base} disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400`}
      >
        {/* value="" so an untouched select submits nothing, instead of posting
            its own label text as if the customer had chosen it. */}
        <option value="">{disabled ? disabledPlaceholder ?? placeholder : placeholder}</option>
        {groups
          ? groups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))
          : (options ?? []).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        {extraOption && <option value={extraOption}>{extraOption}</option>}
      </select>
      <FieldHint>{hint}</FieldHint>
    </div>
  )
}

export function TextAreaField({
  name,
  label,
  rows = 4,
  required,
  placeholder,
  hint,
}: {
  name: string
  label: string
  rows?: number
  required?: boolean
  placeholder?: string
  hint?: string
}) {
  const id = useFieldId(name)
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={`${base} resize-y`}
      />
      <FieldHint>{hint}</FieldHint>
    </div>
  )
}

export function FileField({ hint }: { hint?: string }) {
  const id = useFieldId('attachment')
  return (
    <div>
      <FieldLabel htmlFor={id}>Artwork or reference file</FieldLabel>
      <input
        id={id}
        name="attachment"
        type="file"
        accept={ACCEPTED_ATTACHMENTS}
        className="dieline w-full cursor-pointer bg-white px-4 py-2.5 text-sm text-ink/60 transition file:mr-3 file:rounded-none file:border-0 file:bg-orange-500 file:px-3 file:py-1.5 file:text-xs file:font-bold file:uppercase file:text-white hover:file:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
      />
      <FieldHint>{hint}</FieldHint>
    </div>
  )
}

/** Off-screen, tab-skipped, and unlabelled to humans. Bots fill it anyway. */
export function HoneypotField() {
  const id = useFieldId(HONEYPOT_FIELD)
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor={id}>Fax number</label>
      <input id={id} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}

export function SuccessPanel({
  onReset,
  compact,
}: {
  onReset: () => void
  compact?: boolean
}) {
  return (
    <div
      role="status"
      className={`notch-tl border border-green-200 bg-green-50 text-center ${compact ? 'p-6' : 'p-10'}`}
    >
      <svg
        className={`mx-auto mb-3 text-green-500 ${compact ? 'h-8 w-8' : 'h-12 w-12'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className={`font-bold text-green-800 ${compact ? 'text-base' : 'text-xl'}`}>Your request is in.</p>
      <p className="mt-1 text-sm text-green-700">
        We reply with a quote within 4 business hours, Monday to Friday.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm font-semibold text-green-800 underline underline-offset-2 hover:text-green-900"
      >
        Send another request
      </button>
    </div>
  )
}

export function ErrorNote({ message }: { message: string }) {
  return (
    <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      {message}
    </p>
  )
}
