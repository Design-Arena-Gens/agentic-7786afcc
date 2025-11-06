import { GreetingCarousel } from "./components/GreetingCarousel";

const studioLinks = [
  {
    title: "শুরু করুন",
    description: "সখের বা পেশাদার, যে কেউ বন্ধুসুলভ সম্ভাষণ দিয়ে সম্পর্ক বাঁচাতে পারে।",
    href: "#starter"
  },
  {
    title: "টুলবক্স",
    description: "চটজলদি আইসব্রেকার, ছোট্ট খুশির খোঁজ।",
    href: "#toolbox"
  },
  {
    title: "মাইক্রো-মুহূর্ত",
    description: "দৈনন্দিন জীবনের ৫টি ক্ষুদ্র অভিজ্ঞতা।",
    href: "#micro"
  }
];

const microMoments = [
  "নতুন সহকর্মীর ডেস্কের পাশ দিয়ে হাঁটার সময়",
  "বিকেলের চা বানাতে গিয়ে রান্নাঘরে দেখা হলে",
  "অনলাইন মিটিংয়ে ক্যামেরা অন হওয়ার আগ মুহূর্ত",
  "বৃষ্টি শেষে রঙিন রাস্তায় ছাতা ভাগাভাগি",
  "সংগীত উৎসবে প্রিয় গানের শুরু অপেক্ষা"
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__badge">সামাজিক স্পন্দন</div>
        <h1 className="hero__title">
          <span>ওই!</span>
          <span>স্বতঃস্ফূর্ত সম্ভাষণকে</span>
          <span>উৎসব করুন।</span>
        </h1>
        <p className="hero__subtitle">
          দৈনন্দিন ছোট্ট শব্দ &quot;ওই&quot;-কে ঘিরে নির্মিত একটি মিনিমাল অভিজ্ঞতা।
          হালকা কথোপকথন থেকে গভীর সম্পর্কের সেতু—সব শুরু এক টুকরো সম্ভাষণে।
        </p>
      </section>

      <section className="studio" id="starter">
        <h2>ওই স্টুডিও</h2>
        <div className="studio__grid">
          {studioLinks.map((item) => (
            <article key={item.title} className="studio__card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href} className="studio__link">
                এক নজরে →
              </a>
            </article>
          ))}
        </div>
      </section>

      <GreetingCarousel />

      <section className="moments" id="micro">
        <div className="moments__content">
          <h2>মাইক্রো-মুহূর্ত</h2>
          <p>
            কোথায় কোথায় &quot;ওই&quot; সবচেয়ে স্বাভাবিক শোনায় তার কয়েকটি মুহূর্ত। এগুলোই আধুনিক
            সামাজিক যোগাযোগের ক্ষুদ্র স্রোত।
          </p>
          <ul>
            {microMoments.map((moment) => (
              <li key={moment}>{moment}</li>
            ))}
          </ul>
        </div>
        <aside className="moments__aside" id="toolbox">
          <h3>স্ক্রিপ্ট কিট</h3>
          <p>
            আপনার পরবর্তী সম্ভাষণের জন্য দ্রুত প্রস্তুতি নিন। কণ্ঠে একটু উষ্ণতা, চোখে চোখ,
            আর একটি আন্তরিক হাসি—তেই তৈরি হয়ে যাবে মুহূর্ত।
          </p>
          <div className="moments__aside-card">
            <p className="moments__aside-eyebrow">Pro টিপ</p>
            <p className="moments__aside-text">
              কথোপকথন শুরু করে সরাসরি প্রশ্ন করবেন না; প্রথমে শেয়ার করুন একটি অনুভূতি বা ছোট
              পর্যবেক্ষণ।
            </p>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <p>ছোট শব্দ, বড় সম্পর্ক। আজই কারও কাছে &quot;ওই&quot; বলে ফেলুন।</p>
      </footer>
    </main>
  );
}
