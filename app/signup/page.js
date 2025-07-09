export default function SignUp() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded">Create Account</button>
      </form>
    </div>
  );
}