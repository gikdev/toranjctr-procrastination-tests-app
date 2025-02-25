export type Result = "low" | "medium" | "high" | "unknown"

export interface Test {
  id: string
  name: string
  description: string
  questions: Quesion[]
  calculateResult: (score: number) => Result
}

export interface Quesion {
  id: number
  question: string
  answers: Answer[]
}

export interface Answer {
  id: number
  text: string
  score: number
}

const genTakmanAnswers = (isReverseMode = false): Answer[] => [
  { id: 0, text: "مطمئنا این چنین نیستم", score: isReverseMode ? 4 : 1 },
  { id: 1, text: "این تمایل در من وجود ندارد", score: isReverseMode ? 3 : 2 },
  { id: 2, text: "موافقاین تمایل در من وجود دارد", score: isReverseMode ? 2 : 3 },
  { id: 3, text: "مطمئنا این چنین هستم", score: isReverseMode ? 1 : 4 },
]
const genSchwartzAnswers = (isReverseMode = false): Answer[] => [
  { id: 0, text: "در همه موارد درست نیست", score: isReverseMode ? 4 : 1 },
  { id: 1, text: "به ندرت درست است", score: isReverseMode ? 3 : 2 },
  { id: 2, text: "نسبتا درست است", score: isReverseMode ? 2 : 3 },
  { id: 3, text: "دقیقا درست است", score: isReverseMode ? 1 : 4 },
]

export const taakman: Test = {
  id: "taakman",
  name: "پرسش‌نامه اهمال‌کاری تاکمن",
  description: `
    این مقیاس به دست تاکمن (۱۹۹۱) ساخته شده و از ۱۶ سوال تشکیل‌شده است که فرد به یکی از
    چهار گزینه پاسخ دهد. این پرسش‌نامه نخستین‌بار در سال ۲۰۰۱ در دانشگاه تورنتو کانادا برای
    سنجش میزان اهمال‌کاری دانشجوایان طراحی، اجرا و هنجار شد
  `,
  calculateResult(score: number) {
    if (score > 48) return "high"
    if (score <= 48 && score > 32) return "medium"
    if (score <= 32 && score >= 16) return "low"
    return "unknown"
  },
  questions: [
    {
      id: 1,
      question: "حتی اگر انجام‌دادن کارهایم مهم باشد، بی جهت آن‌ها را به تاخیر می‌اندازم",
      answers: genTakmanAnswers(),
    },
    {
      id: 2,
      question: "شروع هر کاری را که مورد علاقه‌ام نباشد به تاخیر می‌اندازم",
      answers: genTakmanAnswers(),
    },
    {
      id: 3,
      question: "برای شروع هر کاری که مهلت معینی داشته باشد، تا آخرین لحظه معطل میکنم",
      answers: genTakmanAnswers(),
    },
    {
      id: 4,
      question: "همیشه تصمیم‌گیری‌های دشوار را به تاخیر می‌اندازم",
      answers: genTakmanAnswers(),
    },
    {
      id: 5,
      question: "همیشه شروع برنامه‌هایی را که منجر به پیشرفت کارهایم می‌شوند به تاخیر می‌اندازم",
      answers: genTakmanAnswers(),
    },
    {
      id: 6,
      question: "همیشه به دنبال بهانه‌ای برای انجام ندادن کارهایم هستم",
      answers: genTakmanAnswers(),
    },
    {
      id: 7,
      question: "همیشه برای انجام کارهای کسل‌کننده مانند مطالعه‌کردن وقت کافی صرف میکنم",
      answers: genTakmanAnswers(true),
    },
    { id: 8, question: "به طور علاج ناپذیری گرفتار وقت تلف‌کردن هستم", answers: genTakmanAnswers() },
    {
      id: 9,
      question: "من وقتم را بیهوده تلف میکنم و ظاهرا هیچ کاری را انجام نمی‌دهم",
      answers: genTakmanAnswers(),
    },
    {
      id: 10,
      question: "همیشه وقتی کار مشکلی در پیش دارم، آن را به تاخیر می‌اندازم",
      answers: genTakmanAnswers(),
    },
    {
      id: 11,
      question: "به خودم قول میدهم که کاری را انجام دهم، ولی عملا خود را کنار می‌کشم",
      answers: genTakmanAnswers(),
    },
    {
      id: 12,
      question: "هر وقت تصمیم به انجام کاری میگیرم آن را دنبال میکنم",
      answers: genTakmanAnswers(true),
    },
    {
      id: 13,
      question:
        "هر چند به خاطر شروع نکردن کار از خودم متنفر می‌شوم، اما این تنفر مرا وادار به انجام کار نمی‌کند",
      answers: genTakmanAnswers(),
    },
    {
      id: 14,
      question: "همیشه کارهای مهم را انجام میدهم و وقت اضافه می‌آورم",
      answers: genTakmanAnswers(true),
    },
    {
      id: 15,
      question:
        "حتی زمانی که اهمیت شروع کارها برایم مشخص باشد، بازهم نسبت به انجام آن‌ها بی‌تفاوت هستم",
      answers: genTakmanAnswers(),
    },
    {
      id: 16,
      question: "عادت ندارم کاری را به فردا موکول کنم یا از انجام آن طفره بروم",
      answers: genTakmanAnswers(true),
    },
  ],
}

export const schwartz: Test = {
  id: "schwartz",
  name: "پرسش‌نامه استاندارد اهمال‌کاری شوارتز و دیهل",
  description: `
    این پرسش‌نامه از سوی شوارتز و دیهل طرح شده است.
    این مقیاس دارای ۱۰ سوال در طیف لیکرت ۴ درجه‌ای است و اهمال‌کاری را می‌سنجد
  `,
  calculateResult(score: number) {
    if (score > 26) return "high"
    if (score <= 26 && score > 13) return "medium"
    if (score <= 13 && score >= 10) return "low"
    return "unknown"
  },
  questions: [
    {
      id: 1,
      question:
        "در اغلب روزهای قبل، من مواردی را که تمایل داشته‌ام فوری انجام دهم از سر خود رفع کرده‌ام",
      answers: genSchwartzAnswers(),
    },
    {
      id: 2,
      question: "من روز را با تصویر روشنی از آنچه میخواهم انجام دهم آغاز میکنم",
      answers: genSchwartzAnswers(true),
    },
    {
      id: 3,
      question: "مکررا وظایف خود را زودتر از زمان خواسته شده انجام میدهم",
      answers: genSchwartzAnswers(true),
    },
    {
      id: 4,
      question: "اغلب مواردی را که انتخاب میکنم به پایان نمی‌رسانم",
      answers: genSchwartzAnswers(),
    },
    {
      id: 5,
      question: "وقتی میخواهم نقشه‌هایم را عملی کنم، خیلی منظم و مرتب هستم",
      answers: genSchwartzAnswers(true),
    },
    {
      id: 6,
      question: "وظایفی که هنوز به پایان نرسیده‌اند موجب نگرانی‌ام می‌شوند",
      answers: genSchwartzAnswers(),
    },
    {
      id: 7,
      question:
        "به گونه‌ای برنامه‌ریزی می‌کنم که تا پایان روز احساس کنم کارهای مهمم به انجام رسیده‌اند",
      answers: genSchwartzAnswers(true),
    },
    {
      id: 8,
      question: "اجازه نمیدهم موضوعات با اهمیت زندگی‌ام در استرس روزانه مدفون (مخفی) شود",
      answers: genSchwartzAnswers(true),
    },
    {
      id: 9,
      question: "من اغلب عذاب وجدان دارم، به دلیل اینکه می‌دانم برخی از کارها را به تاخیر می‌اندازم",
      answers: genSchwartzAnswers(),
    },
    {
      id: 10,
      question: "اگر نامه‌ای بنویسم، مدتی در گوشه‌ای می‌ماند تا آن را ارسال کنم",
      answers: genSchwartzAnswers(),
    },
  ],
}

export const tests = [taakman, schwartz]
