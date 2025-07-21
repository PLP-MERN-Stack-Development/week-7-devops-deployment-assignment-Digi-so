export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" type="email" placeholder="Email" />
        <input className="border p-2 rounded" type="password" placeholder="Password" />
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}
