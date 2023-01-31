import React from 'react';
import Feature from '../../components/feature/Feature';
import './feature.css';

const featuresData = [
  {
    title: 'Improving to end distrusts instantly',
    text: 'GPT-3 will continue to evolve and improve, with researchers and developers working on new techniques and approaches to make it even more powerful and versatile.',
  },
  {
    title: 'Become the most effective',
    text: 'GPT-3 will become increasingly integrated into various industries and business processes, as more companies realize the potential of this technology to automate tasks and improve efficiency.',
  },
  {
    title: 'Master development',
    text: 'GPT-3 will play a key role in the development of new AI applications, such as natural language generation, chatbots, and virtual assistants.',
  },
  {
    title: 'Human-computer interaction',
    text: 'GPT-3 will also be used to enhance human-computer interaction, allowing for more natural and intuitive communication between humans and machines. This will open up new opportunities for people with disabilities and non-technical people to interact with technology.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;