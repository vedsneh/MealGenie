const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6">📬 Contact Us</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-8">
        Have a feature idea or feedback? We’d love to hear from you!
      </p>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full border p-3 rounded"
        ></textarea>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
