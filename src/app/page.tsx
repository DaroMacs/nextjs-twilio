"use client";

export default function Page() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const phone = formData.get("phone");
    const message = formData.get("message");
    // console.log(phone, message);

    const sms = {
      phone,
      message,
    };

    const response = await fetch("/api/sms", {
      method: "POST",
      body: JSON.stringify(sms),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    alert("Message sent successfully");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <form action="" className=" font-bold" onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold">Send a message to your friends</h1>

        <label htmlFor="phone" className="block my-4 ">
          Write your phone number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Write your phone number here"
          className="px-3 py-2 rounded-md border border-gray-300 block"
        />

        <label htmlFor="message" className="block my-4">
          Write your message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Write your message here"
          className="px-3 py-2 rounded-md border border-gray-300 block"
        />
        <button
          type="submit"
          className="px-3 py-2 rounded-md border border-gray-300 block bg-blue-500 text-white mt-4 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}
