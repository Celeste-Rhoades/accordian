import { React, useState } from "react";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div>
      <div className="accordian">
        <button onClick={() => setIsOpen(!isOpen)}>+</button>

        {isOpen ? (
          <div>
            Let's suppose we're working on our FriendlyGreeting component.
          </div>
        ) : (
          <div>
            We want to greet the user, but there's a problem: We don't know
            everyone's name.
          </div>
        )}
      </div>
      <div className="accordian">
        <button onClick={() => setIsOpen2(!isOpen2)}>+</button>
        {isOpen2 ? (
          <div>
            {" "}
            I ran into this exact problem when I was building a tool to generate
            newsletter issues. I didn't know the name of every subscriber.
          </div>
        ) : (
          <div>
            {" "}
            If I didn't know their name, I wanted to render a “fallback” value:
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
