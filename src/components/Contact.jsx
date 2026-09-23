function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p>Email: nbhattarai444@gmail.com</p>
      <p>Location: Pokhara, Nepal</p>

      <form action="https://formspree.io/f/mrpbkgyj" method="POST">
        <input type="text" placeholder="Your Name" />
        <br /><br />

        <input type="email" placeholder="Your Email" />
        <br /><br />

        <textarea placeholder="Your Message"></textarea>
        <br /><br />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;