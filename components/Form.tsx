export default function Form() {
  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      className="space-y-4 max-w-xl"
    >
      <input name="name" required placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
      <input type="email" name="email" required placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
      <input name="pickup" required placeholder="Pickup Location" className="w-full p-2 border border-gray-300 rounded" />
      <input name="dropoff" required placeholder="Drop-off Location" className="w-full p-2 border border-gray-300 rounded" />
      <textarea name="details" rows={4} placeholder="Delivery Details" className="w-full p-2 border border-gray-300 rounded"></textarea>
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Submit</button>
    </form>
  );
}