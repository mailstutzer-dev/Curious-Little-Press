import Reveal from '../Reveal'
import './Faq.css'

// Question-and-answer content for the home page. Each question is an <h2>
// followed straight away by a short, self-contained answer, and the same
// text is repeated in the FAQPage structured data below so search engines
// and AI answer tools can lift it cleanly. Keep the two in sync by only
// editing this list.
export const FAQS = [
  {
    q: 'What services does Curious Little Press offer in Pretoria?',
    a: 'Curious Little Press is an open printmaking studio in Pretoria. We offer four services: independent studio rental for experienced printmakers, assisted printing alongside an in-house printer, fine art editioning with a master printer, and printmaking workshops and demonstrations.',
  },
  {
    q: 'Where is Curious Little Press located?',
    a: 'We are at 219 Vonkprop Road, Samcor Park, Waltloo, Pretoria, inside the Dionysus Sculpture Works (DSW) grounds. Enter the DSW gate, walk to the large building and turn right, then look for the CLP sign above the printing studio door.',
  },
  {
    q: 'Which printmaking techniques can I work in at the studio?',
    a: 'Studio artists can work in relief printing and linocut, lithography, intaglio (etching), monotype and screen printing.',
  },
  {
    q: 'Do I need printmaking experience to use the studio?',
    a: 'Independent studio rental is designed for artists with prior printmaking experience who can use the equipment correctly, safely and with consideration for others. If you are less familiar with the presses or a technique, we can provide a trained printer to guide you.',
  },
  {
    q: 'Does Curious Little Press run printmaking workshops?',
    a: 'Yes. We host workshops, demonstrations and group sessions throughout the year, from introductory technical sessions to more experimental, process-based engagements. Upcoming workshops are announced on our Instagram and Facebook pages.',
  },
  {
    q: 'What materials and equipment are provided?',
    a: 'Basic studio materials and equipment are available, including press blankets, newsprint, rollers, solvents, cleaning materials and work surfaces. Studio artists are generally expected to bring their own paper, inks, plates, screens and any specialised materials.',
  },
  {
    q: 'How do I book the studio or ask about rates?',
    a: 'Email studio@curiouslittlepress.com or call the studio liaison on 012 803 2369 or the studio co-ordinator on 072 249 3931 for bookings, rates and more information.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function Faq() {
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      <div className="container">
        <Reveal as="div">
          <span className="eyebrow">Good to Know</span>
          <h2 className="faq__main-title" id="faq-heading">
            Questions About the Studio
          </h2>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item) => (
            <Reveal as="div" key={item.q} className="faq__item" mobileRootMargin="0px 0px 25% 0px">
              <h2 className="faq__question">{item.q}</h2>
              <p className="faq__answer">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
