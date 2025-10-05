"use client"

import { useState } from "react"

// Driver Registration Form (Preview-Only UI)
// Tailwind is available in this canvas. This component focuses on UX/UI and client-side validation.
// Hook it up to Firestore/your API later (see notes in the chat).

const licenseMask = (v) => {
  const digits = v.replace(/\D/g, "")
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)} ${digits.slice(2)}`
  return `${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4, 10)}`
}

const phoneMask = (v) => {
  const digits = v.replace(/\D/g, "")
  if (digits.length === 0) return "+7"
  if (digits[0] === "8") {
    const rest = digits.slice(1)
    if (rest.length === 0) return "+7"
    if (rest.length <= 3) return `+7(${rest}`
    if (rest.length <= 6) return `+7(${rest.slice(0, 3)})${rest.slice(3)}`
    if (rest.length <= 8) return `+7(${rest.slice(0, 3)})${rest.slice(3, 6)}-${rest.slice(6)}`
    return `+7(${rest.slice(0, 3)})${rest.slice(3, 6)}-${rest.slice(6, 8)}-${rest.slice(8, 10)}`
  }
  if (digits[0] === "7") {
    const rest = digits.slice(1)
    if (rest.length === 0) return "+7"
    if (rest.length <= 3) return `+7(${rest}`
    if (rest.length <= 6) return `+7(${rest.slice(0, 3)})${rest.slice(3)}`
    if (rest.length <= 8) return `+7(${rest.slice(0, 3)})${rest.slice(3, 6)}-${rest.slice(6)}`
    return `+7(${rest.slice(0, 3)})${rest.slice(3, 6)}-${rest.slice(6, 8)}-${rest.slice(8, 10)}`
  }
  if (digits.length <= 3) return `+7(${digits}`
  if (digits.length <= 6) return `+7(${digits.slice(0, 3)})${digits.slice(3)}`
  if (digits.length <= 8) return `+7(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6)}`
  return `+7(${digits.slice(0, 3)})${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8, 10)}`
}

const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="text-sm font-medium text-slate-200">
    {children}
  </label>
)

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-xl bg-slate-900/60 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none text-slate-100 placeholder-slate-400 px-4 py-3 ${
      props.className || ""
    }`}
  />
)

const FileInput = ({ id, label, onChange, accept }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <input
      id={id}
      type="file"
      accept={accept}
      onChange={onChange}
      className="block w-full text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500/10 file:text-cyan-300 file:px-4 file:py-2 hover:file:bg-cyan-500/20"
    />
  </div>
)

const Section = ({ title, children }) => (
  <div className="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-5 md:p-6">
    <div className="mb-4 flex items-center gap-3">
      <div className="h-6 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-fuchsia-500" />
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
    </div>
    <div className="grid gap-4">{children}</div>
  </div>
)

const GradientButton = ({ children, ...props }) => (
  <button
    {...props}
    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 hover:from-cyan-300 hover:via-sky-300 hover:to-fuchsia-300 active:scale-[.99] transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </button>
)

function validate(form) {
  const errors = {}
  if (!form.fullName.trim()) errors.fullName = "Введите ФИО"
  if (!/^\+7$$\d{3}$$\d{3}-\d{2}-\d{2}$/.test(form.phone)) errors.phone = "Формат: +7(999)999-99-99"
  if (!form.birthDate) errors.birthDate = "Укажите дату рождения"
  if (!/^\d{2}\s\d{2}\s\d{6}$/.test(form.licenseNumber)) errors.licenseNumber = "Формат: 99 99 999999"
  if (!form.licenseDate) errors.licenseDate = "Укажите дату выдачи"
  if (!form.consentPD) errors.consentPD = "Обязательное согласие"
  if (!form.consentOffer) errors.consentOffer = "Нужно согласие с офертой"
  return errors
}

export default function DriverRegistrationPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "+7", // Changed initial value from "+7 " to "+7"
    birthDate: "",
    email: "",
    licenseNumber: "",
    licenseCategory: "B",
    licenseDate: "",
    experienceYears: "",
    carBrand: "",
    carColor: "",
    carPlate: "",
    consentPD: false,
    consentOffer: false,
  })
  const [files, setFiles] = useState({
    photo: null,
    licenseFront: null,
    licenseBack: null,
    carPhoto: null,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key, value) => setForm((s) => ({ ...s, [key]: value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length) return
    // Preview-only: show payload in console. Replace with API/Firestore call.
    console.log("DRIVER_REGISTRATION_PAYLOAD", { form, files })
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B0E2A] via-[#14183d] to-[#1e275c] text-slate-100 py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8 md:mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-400">
              Регистрация водителя — Трезвый водитель СПБ
            </h1>
            <p className="text-slate-300/80 mt-1">
              Заполните форму. Документы проверяются диспетчером в течение 24 часов.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-slate-300/80">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" /> Статус: приём заявок
          </div>
        </header>

        <form onSubmit={onSubmit} className="grid gap-6">
          {/* Личные данные */}
          <Section title="Личные данные">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">ФИО</Label>
                <Input
                  id="fullName"
                  placeholder="Иванов Иван Иванович"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />
                {errors.fullName && <p className="text-sm text-rose-400">{errors.fullName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  placeholder="+7(999)999-99-99"
                  value={form.phone}
                  onChange={(e) => update("phone", phoneMask(e.target.value))}
                />
                {errors.phone && <p className="text-sm text-rose-400">{errors.phone}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Дата рождения</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={form.birthDate}
                  onChange={(e) => update("birthDate", e.target.value)}
                />
                {errors.birthDate && <p className="text-sm text-rose-400">{errors.birthDate}</p>}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email (необязательно)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@mail.ru"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
            </div>
          </Section>

          {/* Водительское удостоверение */}
          <Section title="Водительское удостоверение">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="licenseNumber">Номер ВУ</Label>
                <Input
                  id="licenseNumber"
                  placeholder="99 99 999999"
                  value={form.licenseNumber}
                  onChange={(e) => update("licenseNumber", licenseMask(e.target.value))}
                />
                {errors.licenseNumber && <p className="text-sm text-rose-400">{errors.licenseNumber}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseCategory">Категория</Label>
                <select
                  id="licenseCategory"
                  value={form.licenseCategory}
                  onChange={(e) => update("licenseCategory", e.target.value)}
                  className="w-full rounded-xl bg-slate-900/60 border border-slate-700 text-slate-100 px-4 py-3"
                >
                  <option value="B">B</option>
                  <option value="B,BE">B, BE</option>
                  <option value="B,C">B, C</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseDate">Дата выдачи</Label>
                <Input
                  id="licenseDate"
                  type="date"
                  value={form.licenseDate}
                  onChange={(e) => update("licenseDate", e.target.value)}
                />
                {errors.licenseDate && <p className="text-sm text-rose-400">{errors.licenseDate}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <FileInput
                id="photo"
                label="Фото водителя"
                accept="image/*"
                onChange={(e) => setFiles((s) => ({ ...s, photo: e.target.files?.[0] || null }))}
              />
              <FileInput
                id="licenseFront"
                label="Права — лицевая сторона"
                accept="image/*"
                onChange={(e) => setFiles((s) => ({ ...s, licenseFront: e.target.files?.[0] || null }))}
              />
              <FileInput
                id="licenseBack"
                label="Права — оборотная сторона"
                accept="image/*"
                onChange={(e) => setFiles((s) => ({ ...s, licenseBack: e.target.files?.[0] || null }))}
              />
            </div>
          </Section>

          {/* Автомобиль (необязательно) */}
          <Section title="Автомобиль (если работаете на своём, необязательно)">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="carBrand">Марка / Модель</Label>
                <Input
                  id="carBrand"
                  placeholder="Hyundai Solaris"
                  value={form.carBrand}
                  onChange={(e) => update("carBrand", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carColor">Цвет</Label>
                <Input
                  id="carColor"
                  placeholder="Белый"
                  value={form.carColor}
                  onChange={(e) => update("carColor", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carPlate">Госномер</Label>
                <Input
                  id="carPlate"
                  placeholder="А123БВ178"
                  value={form.carPlate}
                  onChange={(e) => update("carPlate", e.target.value)}
                />
              </div>
            </div>
            <FileInput
              id="carPhoto"
              label="Фото автомобиля"
              accept="image/*"
              onChange={(e) => setFiles((s) => ({ ...s, carPhoto: e.target.files?.[0] || null }))}
            />
          </Section>

          {/* Согласия */}
          <Section title="Согласия">
            <div className="space-y-3 text-sm text-slate-300">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.consentPD}
                  onChange={(e) => update("consentPD", e.target.checked)}
                  className="mt-1 h-4 w-4"
                />
                <span>
                  Я даю согласие на обработку персональных данных (ФЗ-152) и загрузку документов для верификации.
                  <br />
                  <a className="underline text-cyan-300" href="#" onClick={(e) => e.preventDefault()}>
                    Политика конфиденциальности
                  </a>
                </span>
              </label>
              {errors.consentPD && <p className="text-sm text-rose-400">{errors.consentPD}</p>}

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.consentOffer}
                  onChange={(e) => update("consentOffer", e.target.checked)}
                  className="mt-1 h-4 w-4"
                />
                <span>
                  Я принимаю условия публичной оферты / договора ГПХ.
                  <br />
                  <a className="underline text-cyan-300" href="#" onClick={(e) => e.preventDefault()}>
                    Условия оферты
                  </a>
                </span>
              </label>
              {errors.consentOffer && <p className="text-sm text-rose-400">{errors.consentOffer}</p>}
            </div>
          </Section>

          <div className="flex items-center justify-between gap-4">
            <p className="text-slate-300/80 text-sm">
              Все данные передаются по защищённому каналу и используются только для подключения к сервису.
            </p>
            <GradientButton type="submit">Отправить заявку</GradientButton>
          </div>

          {submitted && (
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-200">
              ✅ Заявка отправлена! Мы свяжемся с вами после проверки документов.
            </div>
          )}
        </form>

        {/* Preview footer */}
        <footer className="mt-10 text-center text-xs text-slate-400/70">
          Предпросмотр формы. Свяжем с Firestore/ботом по твоей команде.
        </footer>
      </div>
    </div>
  )
}
