import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'How do one get solana wallet?',
      answer: 'You can get solana wallet by adding chrome extension to your browser then download any of the reputable wallets',
      open: true
    },
    {
      question: 'How can I upload my music to helios-party?',
      answer: 'Download you music by clicking the download button {here} or got to the Helios.',
      open: true
      //NOT SET UP YET
    },
    {
      question: 'what happens to my songs and image once I upload it to helios-party',
      answer: 'You can choose to create an NFT, Mint it, Auction it, or put some or all of it for sale.',
      open: true
    },

    {
      question: 'How do I get paid since I do not know much about NFT?',
      answer: 'You can get paid by various methods including Canadian Dollars and also any of the available blockchain coins.',
      open: true
    },
    {
      question: 'What if I do not want to sell all my songs, I just want people to listen',
      answer: 'You will be getting royalties on each of your songs based on the amount of listeners, the percentage is much higher that what is paid by other streaming sites around the globe',
      open: true
    },
    {
      question: 'What if I do not want to my songs on NFT?',
      answer: 'Your songs will remain in Helios-party for your fans to listen in and you can decide as to what to do with your art work whenever you want, you still be earning based on patronizing.',
      open: true
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
