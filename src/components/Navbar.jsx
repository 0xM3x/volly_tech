export default function Navbar() {
  return (
    <nav className="bg-secondary shadow p-4 flex justify-between items-center text-text">
      <h1 className="text-2xl font-bold text-primary">Volly Tech</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">Home</a></li>
        <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">Solutions</a></li>
        <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">About</a></li>
        <li><a href="#" className="transition-all duration-200 hover:scale-105 hover:font-bold">Contact</a></li>
      </ul>
    </nav>
  );
}
