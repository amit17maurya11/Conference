import React, { useState, useRef } from 'react';
import './Service.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const faqs = [
    {
      question: 'What Topics Are Most Relevant in NLP Education Today?',
      answer: 'With the advent of models like GPT, are we moving towards a future where understanding transformers and pre-trained models is the most critical skill? Shouldwe reframe the foundational concepts of NLP to focus less on rule-based systems andstatistical methods, and more on the workings of attention mechanisms, fine-tuningpre-trained models, and handling large-scale text data?What topics should ALWAYS be taught no matter what paradigm of NLP is of currentinterest and excitement? Should datasets and tools be covered in NLP teaching? Howmuch and at what depth? Should GPU architectures be covered? What is the crucialrole of the interaction between linguistics and probability.',
    },
    {
      question: 'NLP VS LLMs?',
      answer: 'How do we blend theoretical understanding with hands-on experience when thesemodels require extensive computational resources? Should our teaching prioritize howto leverage existing models rather than building them from scratch?Moreover, given the challenges and opportunities in working with low-resourcelanguages, particularly in the Indian context, should we focus more on multilingual andmultimodal NLP? How do we address the unique problems of tokenization, lack ofdatasets, and the cultural nuances present in Indian languages.',
    },
    {
      question: ' What Traditional Topics Might Be Less Relevant Now?',
      answer: 'Do traditional methods like rule-based parsing, n-gram language models, and olderstatistical methods still hold a significant place in modern NLP education? While theseapproaches offer valuable historical context, are they worth the same level of attentionin a curriculum dominated by transformer-based methods? Should topics like TF-IDF,bag-of-words, and statistical machine translation be shifted to an introductory level orperhaps reframed as part of NLP’s evolution, while emphasizing that today’s cuttingedge techniques are drastically different?If we move away from these traditional topics, how can we ensure that students stilldevelop a deep understanding of language and its computational treatment, ratherthan just learning to use APIs and models.',
    },
    // {
    //   question: 'What is included in the ticket prices?',
    //   answer: 'The ticket prices include access to all sessions, workshops, and networking events, as well as meals during the conference.',
    // },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-left">
        <h2>Frequently asked questions, about the conference</h2>
        <p>
          Eventor Collaborative, brought to you by IBM, is where the most
          inventive and forward-thinking nonprofit leaders come together to
          discover emerging trends in fundraising and technology.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '×' : '+'}</span>
            </div>
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
              style={{
                maxHeight: activeIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0px',
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
