import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd178568-9954-4c6c-b198-235019fb6435");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="c-contact__contact-form">
      <form onSubmit={onSubmit} autocomplete="on">
        <div className="c-input">
          <label>What do I call you?*</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            autocomplete="on"
          />
        </div>
        <div className="c-input">
          <label>Where can I reach you?*</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            autocomplete="on"
          />
        </div>
        <div className="c-input">
          <label>What’s on your mind?*</label>
          <textarea
            name="message"
            placeholder="Hey Jake, lets talk about..."
            required
            autocomplete="on"></textarea>
        </div>

        <button className="btn-primary" type="submit">
          Let's Send It!
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
