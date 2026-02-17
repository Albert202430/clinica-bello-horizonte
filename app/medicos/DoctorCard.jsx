import Link from "next/link";

export default function DoctorCard({ medico }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center flex flex-col">
      <img
        src={medico.imagen}
        alt={medico.nombre}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-[#0173BC]/20"
      />

      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
        {medico.nombre}
      </h3>

      <p className="text-[#0173BC] font-medium mb-2">
        {medico.especialidad}
      </p>

      <p className="text-gray-500 text-sm mb-4 flex-grow">
        {medico.descripcion}
      </p>

      <Link
        href={`/medicos/${medico.id}`}
        className="mt-auto text-[#0173BC] font-medium hover:underline transition"
      >
        Ver perfil
      </Link>
    </div>
  );
}