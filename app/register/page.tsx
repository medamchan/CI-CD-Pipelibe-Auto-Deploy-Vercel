"use client";

export default function RegisterPage() {
  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <input className="border p-2 w-full mb-2" placeholder="Name" />
      <input className="border p-2 w-full mb-2" placeholder="Email" />
      <input className="border p-2 w-full mb-2" placeholder="Password" />
      <button className="bg-green-600 text-white w-full py-2">
        Register
      </button>
    </div>
  );
}
