import {
  ArrowFatLeft,
  ArrowFatRight,
  BugBeetle,
  CheckCircle,
  House,
  Pen,
  Warning,
  XCircle,
} from "@phosphor-icons/react"
import type React from "react"
import { useId, useState } from "react"
import { Link, useParams } from "react-router"
import notFoundCat from "../../../assets/not-found-cat.png"
import { type Quesion, tests } from "../../../assets/tests"

export default function TestId() {
  const { testId } = useParams()

  const test = tests.find(t => t.id === testId)
  if (!test)
    return (
      <div className="grow shrink flex flex-col items-center justify-center">
        <div className="bg-base-200 p-5 w-full max-w-96 rounded-lg text-center flex flex-col gap-2">
          <img className="" src={notFoundCat} alt="" />
          <h1 className="font-black text-3xl">۴۰۴؛ پیدا نشد!</h1>
          <p>آزمونی که دنبالش میگردی رو اینجا نداریم.</p>
          <Link to="/" className="btn btn-block btn-primary">
            بریم خونه
          </Link>
        </div>
      </div>
    )

  const [scores, setScores] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)

  const questionsCount = test.questions.length
  const notStartedYet = currentQuestion === 0
  const isNotFinishedYet = currentQuestion > 0 && currentQuestion <= questionsCount
  const isLastQuestion = currentQuestion === questionsCount
  const isFinished = currentQuestion > questionsCount
  const totalScore = scores.reduce((a, b) => a + b, 0)
  const result = test.calculateResult(totalScore)

  const startTest = () => setCurrentQuestion(1)
  const goToPrevQuestion = () => setCurrentQuestion(p => p - 1)
  const goToNextQuestion = () => setCurrentQuestion(p => p + 1)

  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <form
        onSubmit={e => e.preventDefault()}
        className="bg-base-200 p-5 w-full max-w-[50rem] rounded-lg text-center flex flex-col gap-2"
      >
        <h1 className="font-black text-3xl">{test.name}</h1>
        <hr className="my-2 border-none bg-nitro-r h-1 rounded-full" />

        {notStartedYet && (
          <>
            <p>{test.description}</p>
            <div className="flex justify-between gap-2">
              <Link to="/" className="btn">
                <House size={20} />
                <span>رفتن به صفحه اصلی</span>
              </Link>

              <button type="button" className="btn btn-primary" onClick={startTest}>
                <Pen size={20} />
                <span>شروع آزمون</span>
              </button>
            </div>
          </>
        )}

        {isNotFinishedYet && (
          <div className="flex flex-col gap-5">
            <Question
              scores={scores}
              setScores={setScores}
              question={test.questions[currentQuestion - 1]}
            />

            <div className="flex justify-between">
              <button type="button" className="btn" onClick={goToPrevQuestion}>
                <ArrowFatRight size={20} weight="fill" />
                <span>قبلی</span>
              </button>

              {isLastQuestion ? (
                <button
                  type={isLastQuestion ? "submit" : "button"}
                  className="btn btn-success"
                  onClick={goToNextQuestion}
                  disabled={!scores[currentQuestion - 1]}
                >
                  <span>مشاهده نتیجه</span>
                  <CheckCircle size={20} weight="fill" />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={goToNextQuestion}
                  disabled={!scores[currentQuestion - 1]}
                >
                  <span>بعدی</span>
                  <ArrowFatLeft size={20} weight="fill" />
                </button>
              )}
            </div>
          </div>
        )}

        {isFinished && (
          <>
            {result === "unknown" && (
              <p className="bg-error text-error-content p-2 rounded-lg">
                <BugBeetle size={24} className="inline" /> یه مشکلی توی محاسبه نتیجه پیش اومده! لطفا
                بعدا دوباره امتحان کن
              </p>
            )}

            {result === "low" && (
              <div className="bg-success text-success-content p-5 rounded-lg flex flex-col gap-2">
                <p className="font-bold text-lg">
                  <CheckCircle size={24} className="inline" /> تبریک!
                </p>
                <p>نمره شما: {totalScore}</p>
                <p className="">
                  <strong>میزان اهمال‌کاری</strong> شما با توجه به اطلاعاتی که وارد کردی{" "}
                  <strong>کم</strong> هست!
                </p>
                <p className="text-pretty">
                  یادت نره توی <strong>دوره‌ی نیتروژن</strong> شرکت کنی تا همین یه ذره اهمال‌کاری رو
                  هم درمان کنی! ✌🏻
                </p>
              </div>
            )}

            {result === "medium" && (
              <div className="bg-warning text-warning-content p-5 rounded-lg flex flex-col gap-2">
                <p className="font-bold text-lg">
                  <Warning size={24} className="inline" /> خب... بد نیس!
                </p>
                <p>نمره شما: {totalScore}</p>
                <p className="">
                  <strong>میزان اهمال‌کاری</strong> شما با توجه به اطلاعاتی که وارد کردی{" "}
                  <strong>متوسط</strong> هست!
                </p>
                <p className="text-pretty">
                  ولی خیلی نگران نباش! چون قراره با هم توی <strong>دوره‌ی نیتروژن</strong> اهمال‌کاری
                  رو درمان کنیم! 🥳‍‍‍
                </p>
              </div>
            )}

            {result === "high" && (
              <div className="bg-error text-error-content p-5 rounded-lg flex flex-col gap-2">
                <p className="font-bold text-lg">
                  <XCircle size={24} className="inline" /> آخ آخ آخ!
                </p>
                <p>نمره شما: {totalScore}</p>
                <p className="">
                  <strong>میزان اهمال‌کاری</strong> شما با توجه به اطلاعاتی که وارد کردی{" "}
                  <strong>زیاد</strong> هست!
                </p>
                <p className="text-pretty">
                  ولی خیلی نگران نباش! چون قراره با هم توی <strong>دوره‌ی نیتروژن</strong> اهمال‌کاری
                  رو درمان کنیم! 🥳‍‍‍
                </p>
              </div>
            )}

            <p>عکس از صفحه هم بگیر یادگاری... 😉</p>
            <Link to="/" className="btn btn-block">
              بریم خونه؟
            </Link>
          </>
        )}
      </form>
    </div>
  )
}

interface QProps {
  question: Quesion
  className?: string
  scores: number[]
  setScores: React.Dispatch<React.SetStateAction<number[]>>
}

function Question({ question, className = "", scores, setScores }: QProps) {
  const id = useId()

  return (
    <div className={`${className} flex flex-col gap-5`}>
      <p className="font-bold text-lg">
        {question.id}. {question.question}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.answers.map(a => (
          <label
            className="cursor-pointer flex gap-1 items-center p-2 rounded-md bg-base-300"
            key={a.id}
          >
            <input
              name={id}
              checked={scores[question.id - 1] === a.score}
              value={a.score}
              className="radio radio-primary"
              type="radio"
              onChange={e => {
                setScores(scores => {
                  const cloned = [...scores]
                  cloned[question.id - 1] = Number(e.target.value)
                  return cloned
                })
              }}
            />
            <span>{a.text}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
