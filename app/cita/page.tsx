export default function CitaPage() {
    return (
        <main className="pt-32 px-8 flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Reserva tu Cita</h1>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Nombre completo" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    <input type="email" placeholder="Correo electrónico" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    <select className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                        <option>Selecciona especialidad</option>
                        <option>Pediatría</option>
                        <option>Ginecología</option>
                        <option>Medicina General</option>
                    </select>
                    <button className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                        Enviar Solicitud
                    </button>
                </form>
            </div>
        </main>
    );
}