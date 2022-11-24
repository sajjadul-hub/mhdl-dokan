import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div tabIndex={0} className=" mb-6 collapse collapse-plus border border-base-300 bg-base-100 rounded-lg">
                <div className="collapse-title text-xl font-medium bg-cyan-300">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <h3 className='text-xl font-semibold'>Local (UI) state:</h3>
                    <p> Local state is data we manage in one or another component.</p>
                    <h3  className='text-xl font-semibold'>  Global (UI) state:</h3>
                    <p> Global state is data we manage across multiple components.</p>
                    <h3  className='text-xl font-semibold'>Server state:</h3>
                    <p> Data that comes from an external server that must be integrated with our UI state.</p>
                    <h3  className='text-xl font-semibold'> URL state:</h3>
                    <p> Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
            </div>
            <div tabIndex={0} className=" mb-6 collapse collapse-plus border border-base-300 bg-base-100 rounded-lg">
                <div className="collapse-title text-xl font-medium bg-cyan-300">
                How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                </div>
            </div>
            <div tabIndex={0} className=" mb-6 collapse collapse-plus border border-base-300 bg-base-100 rounded-lg">
                <div className="collapse-title text-xl font-medium bg-cyan-300">
                What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={0} className=" mb-6 collapse collapse-plus border border-base-300 bg-base-100 rounded-lg">
                <div className="collapse-title text-xl font-medium bg-cyan-300">
                React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;