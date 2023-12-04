import React from 'react';

const CppIntroLesson = () => {
  return (
    <div>
      <h2>Introduction to C++: Printing "Hello, World!"</h2>

      <p>
        Welcome to the world of C++ programming! In this introductory lesson, we'll start with a
        simple yet classic example: printing "Hello, World!" to the console.
      </p>

      <h3>Writing Your First C++ Program</h3>

      <p>
        In C++, the standard way to create a simple program is by using the <code>main()</code>{' '}
        function. This function is the entry point of every C++ program. Let's create our first
        program:
      </p>

      <pre>
        <code>
          {`#include <iostream>

int main() {
    // Your code goes here
    return 0;
}`}
        </code>
      </pre>

      <p>
        In this example, we have a basic structure for a C++ program. The <code>#include
        &lt;iostream&gt;</code> line is necessary for input and output operations. The <code>main()</code>{' '}
        function is where the execution of our program begins and ends. The <code>return 0;</code>{' '}
        statement indicates a successful execution.
      </p>

      <h3>Printing "Hello, World!"</h3>

      <p>
        Now, let's modify our program to print the classic message to the console. We'll use the{' '}
        <code>std::cout</code> statement for output:
      </p>

      <pre>
        <code>
          {`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}
        </code>
      </pre>

      <p>
        The <code>std::cout</code> statement is used to display output. In this case, we are
        printing the string "Hello, World!" followed by a newline (<code>std::endl</code>) to
        ensure a clean console output.
      </p>

      <p>Copy the code, compile, and run your program. You should see:</p>

      <pre>
        <code>Hello, World!</code>
      </pre>

      <p>
        Congratulations! You've just written and executed your first C++ program. This simple
        example sets the stage for exploring the vast world of C++ programming.
      </p>
    </div>
  );
};

export default CppIntroLesson;
