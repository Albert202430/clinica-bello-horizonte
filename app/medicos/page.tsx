export default function MedicosPage() {
    return (
        <main className="pt-32 px-8 min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Nuestro Equipo Médico</h1>
            <p className="text-gray-600 mb-8">Contamos con especialistas de primer nivel para tu salud.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Ejemplo de una tarjeta de médico */}
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                    <h3 className="text-xl font-semibold text-center">Dr. Juan Pérez</h3>
                    <p className="text-blue-600 text-center">Cardiología</p>
                </div>
            </div>
        </main>
    );
}