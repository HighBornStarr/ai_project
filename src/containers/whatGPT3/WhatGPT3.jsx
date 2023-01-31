import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="ChatGPT is a large language model developed by OpenAI that uses machine learning techniques to generate human-like text. It can be fine-tuned for a variety of language tasks, such as language translation, text summarization, and question answering. It's designed to be used for conversational AI and NLP tasks." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots are computer programs designed to simulate conversation with human users through the use of artificial intelligence. They are used for a variety of tasks, such as customer service, information gathering, and entertainment." />
      <Feature title="Knowledgebase" text="An AI knowledgebase is a collection of information and data that is used to train and inform an artificial intelligence system. It can include a wide range of information, such as text, images, audio, and video, and is used to teach the AI system about the world and its capabilities." />
      <Feature title="Education" text="AI education can be pursued through formal degree programs at the undergraduate and graduate levels, as well as through online courses, tutorials, and self-study." />
    </div>
  </div>
);

export default WhatGPT3;